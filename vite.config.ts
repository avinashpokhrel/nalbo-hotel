import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import { seo } from './src/config/seo';

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Escape characters that are special inside an HTML attribute value. */
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

/** Build the JSON-LD Hotel schema object from the seo config. */
function buildSchema(s: typeof seo) {
  const absImage = s.ogImage.startsWith('http') ? s.ogImage : `${s.siteUrl}${s.ogImage}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: s.name,
    description: s.description,
    url: s.siteUrl,
    telephone: s.contact.phone.replace(/\s/g, ''),
    email: s.contact.email,
    foundingDate: s.foundingDate,
    currenciesAccepted: 'NPR',
    paymentAccepted: 'Cash, Card',
    address: {
      '@type': 'PostalAddress',
      streetAddress: s.contact.address,
      addressLocality: 'Dharan',
      addressRegion: 'Province No. 1',
      addressCountry: 'NP',
    },
    geo: {
      '@type': 'GeoCoordinates',
    },
    image: [absImage],
    logo: [
      { '@type': 'ImageObject', url: `${s.siteUrl}/logo.png`, width: 512, height: 512 },
      { '@type': 'ImageObject', url: `${s.siteUrl}/apple-touch-icon.png`, width: 180, height: 180 },
    ],
    sameAs: Object.values(s.socials),
    hasMap: `https://www.google.com/maps/search/${encodeURIComponent(`${s.name} ${s.contact.address}`)}`,
    openingHours: s.openingHours,
    checkinTime: s.checkinTime,
    checkoutTime: s.checkoutTime,
    amenityFeature: s.amenities.map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    })),
    containsPlace: s.rooms.map((r) => ({
      '@type': 'Room',
      name: r.name,
      description: r.description,
      bed: { '@type': 'BedDetails', typeOfBed: r.bedType, numberOfBeds: r.beds },
    })),
  };
}

/** Generate the full <head> injection block as an HTML string. */
function buildSeoHead(s: typeof seo): string {
  const absImage = s.ogImage.startsWith('http') ? s.ogImage : `${s.siteUrl}${s.ogImage}`;
  const schema   = buildSchema(s);
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: s.name,
    url: s.siteUrl,
    logo: `${s.siteUrl}/logo.png`,
  };

  return `
    <!-- ─── Primary Meta Tags ─────────────────────────────────────────────── -->
    <title>${esc(s.title)}</title>
    <meta name="title"       content="${esc(s.title)}" />
    <meta name="description" content="${esc(s.description)}" />
    <meta name="keywords"    content="${esc(s.keywords)}" />
    <meta name="author"      content="${esc(s.name)}" />
    <meta name="robots"      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <link rel="canonical"    href="${s.siteUrl}/" />

    <!-- ─── Geographic Tags ───────────────────────────────────────────────── -->
    <meta name="geo.region"    content="${s.geo.region}" />
    <meta name="geo.placename" content="${esc(s.geo.placename)}" />

    <!-- ─── Open Graph / Facebook ────────────────────────────────────────── -->
    <meta property="og:type"         content="website" />
    <meta property="og:url"          content="${s.siteUrl}/" />
    <meta property="og:site_name"    content="${esc(s.name)}" />
    <meta property="og:title"        content="${esc(s.title)}" />
    <meta property="og:description"  content="${esc(s.description)}" />
    <meta property="og:image"        content="${absImage}" />
    <meta property="og:image:width"  content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt"    content="${esc(s.name)} — ${esc(s.contact.address)}" />
    <meta property="og:locale"       content="en_US" />

    <!-- ─── Twitter / X Card ─────────────────────────────────────────────── -->
    <meta name="twitter:card"        content="summary_large_image" />
    <meta name="twitter:url"         content="${s.siteUrl}/" />
    <meta name="twitter:title"       content="${esc(s.title)}" />
    <meta name="twitter:description" content="${esc(s.description)}" />
    <meta name="twitter:image"       content="${absImage}" />
    <meta name="twitter:image:alt"   content="${esc(s.name)} — ${esc(s.contact.address)}" />

    <!-- ─── Favicon & Touch Icons ────────────────────────────────────────── -->
    <link rel="icon"             type="image/x-icon"            href="/favicon.ico" />
    <link rel="icon"             type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon"             type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="icon"             type="image/png" sizes="512x512" href="/logo.png" />
    <link rel="apple-touch-icon" sizes="180x180"                href="/apple-touch-icon.png" />
    <link rel="manifest"         href="/site.webmanifest" />
    <meta name="theme-color"              content="#C9A96E" />
    <meta name="msapplication-TileColor" content="#1C1511" />
    <meta name="msapplication-TileImage" content="/apple-touch-icon.png" />
    <link rel="preload" as="image" href="/logo.png" />

    <!-- ─── Performance: Preconnect / DNS-prefetch ───────────────────────── -->
    <link rel="preconnect"   href="https://maps.googleapis.com" />
    <link rel="dns-prefetch" href="https://maps.googleapis.com" />

    <!-- ─── JSON-LD: Hotel / LodgingBusiness Schema ──────────────────────── -->
    <script type="application/ld+json">
${JSON.stringify([schema, orgSchema], null, 4)}
    </script>`.trimStart();
}

// ─────────────────────────────────────────────────────────────────────────────
// Plugin 1 — Inject the generated <head> block into index.html
// ─────────────────────────────────────────────────────────────────────────────
function seoHeadPlugin(): Plugin {
  return {
    name: 'vite-plugin-seo-head',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html.replace('<!-- %%SEO_HEAD%% -->', buildSeoHead(seo)),
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Plugin 2 — Emit robots.txt and sitemap.xml into dist/
//            (only runs during `vite build`, not the dev server)
// ─────────────────────────────────────────────────────────────────────────────
function seoStaticPlugin(): Plugin {
  return {
    name: 'vite-plugin-seo-static',
    generateBundle() {
      const { siteUrl } = seo;
      const today       = new Date().toISOString().slice(0, 10);

      // ── robots.txt ──────────────────────────────────────────────────────────
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: [
          `# robots.txt — ${seo.name} (${siteUrl})`,
          `# Auto-generated from src/config/seo.ts — do not edit manually`,
          ``,
          `User-agent: *`,
          `Allow: /`,
          `Allow: /logo.png`,
          ``,
          `# All well-behaved crawlers are welcome. If you need to block specific
# aggressive scrapers later, add their rules here.`,
          ``,
          `Sitemap: ${siteUrl}/sitemap.xml`,
        ].join('\n'),
      });

      // ── sitemap.xml ─────────────────────────────────────────────────────────
      const sections: Array<{ id: string; priority: string; freq: string }> = [
        { id: '#rooms',      priority: '0.9', freq: 'monthly' },
        { id: '#contact',    priority: '0.8', freq: 'yearly'  },
        { id: '#about',      priority: '0.7', freq: 'yearly'  },
        { id: '#dining',     priority: '0.7', freq: 'yearly'  },
        { id: '#recreation', priority: '0.6', freq: 'yearly'  },
        { id: '#facilities', priority: '0.6', freq: 'yearly'  },
      ];

      const sectionEntries = sections
        .map(({ id, priority, freq }) =>
          [
            `  <url>`,
            `    <loc>${siteUrl}/${id}</loc>`,
            `    <lastmod>${today}</lastmod>`,
            `    <changefreq>${freq}</changefreq>`,
            `    <priority>${priority}</priority>`,
            `  </url>`,
          ].join('\n'),
        )
        .join('\n');

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<!-- Auto-generated from src/config/seo.ts — do not edit manually -->`,
          `<urlset`,
          `  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`,
          `  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"`,
          `  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`,
          `  <url>`,
          `    <loc>${siteUrl}/</loc>`,
          `    <lastmod>${today}</lastmod>`,
          `    <changefreq>monthly</changefreq>`,
          `    <priority>1.0</priority>`,
          `  </url>`,
          sectionEntries,
          `</urlset>`,
        ].join('\n'),
      });
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Vite config
// ─────────────────────────────────────────────────────────────────────────────
export default defineConfig(({ mode }) => {
  loadEnv(mode, '.', '');

  return {
    plugins: [
      react(),
      tailwindcss(),
      seoHeadPlugin(),   // injects full <head> into index.html
      seoStaticPlugin(), // emits robots.txt + sitemap.xml into dist/
    ],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@assets': path.resolve(__dirname, './src/assets'),
      },
    },

    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },

    build: {
      target: 'es2020',
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      sourcemap: mode === 'development',

      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react':  ['react', 'react-dom'],
            'vendor-motion': ['motion'],
            'vendor-swiper': ['swiper'],
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: (info) => {
            const ext = info.name?.split('.').pop() ?? '';
            if (/png|jpe?g|svg|gif|webp|ico/.test(ext)) return 'assets/images/[name]-[hash][extname]';
            if (ext === 'css')                            return 'assets/css/[name]-[hash][extname]';
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
    },
  };
});

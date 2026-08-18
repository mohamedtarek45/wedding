import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';

function weddingMetadataPlugin() {
  return {
    name: 'wedding-metadata-plugin',
    transformIndexHtml(html) {
      try {
        const jsonUrl = new URL('./src/data/weddingData.json', import.meta.url);
        const weddingData = JSON.parse(fs.readFileSync(jsonUrl, 'utf-8'));

        const groomAr = weddingData.couple?.groom?.ar || 'أحمد';
        const brideAr = weddingData.couple?.bride?.ar || 'إسراء';
        const coupleAr = weddingData.couple?.fullName?.ar || `${groomAr} & ${brideAr}`;
        const groomEn = weddingData.couple?.groom?.en || 'Ahmed';
        const brideEn = weddingData.couple?.bride?.en || 'Israa';
        const coupleEn = weddingData.couple?.fullName?.en || `${groomEn} & ${brideEn}`;

        const dateAr = weddingData.event?.date?.ar || '22 أغسطس 2026';
        const dayAr = weddingData.event?.dayOfWeek?.ar || 'السبت';
        const venueAr = weddingData.event?.venue?.ar || 'قاعه القصر للحفلات';
        const venueLocationAr = weddingData.event?.venueLocation?.ar || 'حدائق القبة , القاهرة';
        const venueEn = weddingData.event?.venue?.en || 'Al Qasr Hall';

        const pageTitle = `${coupleAr} | دعوة حفل الزفاف 💍✨`;
        const metaDescription = `يتشرف ${groomAr} و${brideAr} بدعوتكم لمشاركتهما فرحة عقد القران وحفل الزفاف يوم ${dayAr} ${dateAr} في ${venueAr}، ${venueLocationAr}. يسعدنا ويشرفنا حضوركم ومشاركتنا فرحتنا!`;
        const ogDescription = `يتشرف ${groomAr} و${brideAr} بدعوتكم لمشاركتهما فرحة عقد القران وحفل الزفاف يوم ${dayAr} ${dateAr} في ${venueAr}، ${venueLocationAr}. اضغط هنا لعرض تفاصيل الدعوة والموقع.`;
        const ogTitle = `دعوة حفل زفاف ${groomAr} و${brideAr} 💍✨`;
        const ogImageAlt = `دعوة حفل زفاف ${groomAr} و${brideAr} | ${coupleEn} Wedding Celebration`;
        const keywords = `${groomAr} و${brideAr}, حفل زفاف, دعوة زفاف, كارت أفراح, ${coupleEn} Wedding, ${venueEn}`;
        const heroPhoto = weddingData.assets?.heroPhoto || '/fafd_compressed.webp';

        return html
          .replaceAll('__PAGE_TITLE__', pageTitle)
          .replaceAll('__META_DESCRIPTION__', metaDescription)
          .replaceAll('__OG_DESCRIPTION__', ogDescription)
          .replaceAll('__OG_TITLE__', ogTitle)
          .replaceAll('__OG_IMAGE_ALT__', ogImageAlt)
          .replaceAll('__SITE_NAME__', `دعوة حفل زفاف ${coupleAr}`)
          .replaceAll('__KEYWORDS__', keywords)
          .replaceAll('__AUTHOR__', coupleAr)
          .replaceAll('__HERO_PHOTO__', heroPhoto);
      } catch (err) {
        console.error('Error in weddingMetadataPlugin:', err);
        return html;
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    weddingMetadataPlugin(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          i18n: ['i18next', 'react-i18next'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});

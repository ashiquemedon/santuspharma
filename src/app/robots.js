
export default function robots() {

  return {
    rules: [
      {
        userAgent: "*", // Applies to all crawlers
        allow: "/",      // Allow crawling of all pages
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}

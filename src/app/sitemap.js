export default async function sitemap() {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
             lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
             lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
        },
      
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
             lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
        },
          {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
             lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
        },
    ];
}
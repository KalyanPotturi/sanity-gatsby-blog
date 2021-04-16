export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6079749f558b78d441106f20",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-gfmsygv4",
                  apiId: "d303f820-cdb9-4592-976c-2a62c73df94e",
                },
                {
                  buildHookId: "6079749f658074dec3d00af5",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-4o61orku",
                  apiId: "2298c6df-48e8-462c-8ec2-3878ded5fcba",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/KalyanPotturi/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-4o61orku.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

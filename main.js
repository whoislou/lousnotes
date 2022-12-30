import blog, { ga, redirects } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Louai Misto",
  author: "Louai Misto",
  avatar: "./lou.jpg",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:lmist@icloud.com" },
    { title: "GitHub", url: "https://github.com/lmist" },
  ],
  background: "#fff",
  middlewares: [
    ga("UA-91675022-1"),
    redirects({
      "iocp-links.html": "iocp_links",
    }),
  ],
});

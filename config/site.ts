export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Joseph Vargas | Portfolio",
  description: "Joseph Vargas Portfolio",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Me",
      href: "/aboutMe",
    },
    {
      label: "Proyects",
      href: "/proyects",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Me",
      href: "/aboutMe",
    },
    {
      label: "Proyects",
      href: "/proyects",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    contact: "/contact",
  },
};

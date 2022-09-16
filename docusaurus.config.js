// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Konfig",
  tagline: "Build & Scale In-Video Game Stores",
  url: "https://docs.konfigthis.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  plugins: [require.resolve("docusaurus-plugin-image-zoom")],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "facebook", // Usually your GitHub org/user name.
  // projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/konfig-dev/konfig-docs/tree/master/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
      {
        googleAnalytics: {
          trackingID: "G-S1WP8SMM27",
          anonymizeIP: true,
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Konfig",
        logo: {
          alt: "Konfig Logo",
          src: "img/favicon.png",
        },
        // items: [
        //   // {
        //   //   type: "doc",
        //   //   docId: "intro",
        //   //   position: "left",
        //   //   label: "Docs",
        //   // },
        //   // { to: "/blog", label: "Blog", position: "left" },
        //   // {
        //   //   href: "https://github.com/facebook/docusaurus",
        //   //   label: "GitHub",
        //   //   position: "right",
        //   // },
        // ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "About Us",
            items: [
              {
                label: "Website",
                to: "https://konfigthis.com",
              },
              {
                label: "LinkedIn",
                to: "https://www.linkedin.com/company/konfig",
              },
            ],
          },
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Introduction",
          //       to: "/docs/intro",
          //     },
          //   ],
          // },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Blog",
          //       to: "/blog",
          //     },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/facebook/docusaurus",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Konfig, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: ".markdown :not(em) > img",
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)",
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        config: {
          margin: 70,
        },
      },
    }),
};

module.exports = config;

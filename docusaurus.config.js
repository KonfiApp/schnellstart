module.exports = {
  title: "KonfiApp",
  tagline: "Das moderne System für Konfirmanden",
  url: "https://schnellstart.konfiapp.de",
  baseUrl: "/",
  favicon: "img/favicon.png",
  themeConfig: {
    navbar: {
      title: "KonfiApp",
      logo: {
        alt: "KonfiApp Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/intro",
          activeBasePath: "docs",
          label: "Schnellstart",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Allgemein",
          items: [
            {
              label: "Verwaltung",
              href: "https://verwaltung.konfiapp.de/",
            },
          ],
        },
        {
          title: "Rechtliches",
          items: [
            {
              label: "Impressum",
              href: "https://konfiapp.de/impressum/",
            },
            {
              label: "Datenschutzerklärung",
              href: "https://konfiapp.de/datenschutz/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://konfiapp.de">KonfiApp</a>. Alle Rechte vorbehalten.<br>built with 🔥 + 💙<br>powered by Docusaurus 🦖.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

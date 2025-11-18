// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/nightOwl');
const darkCodeTheme = require('prism-react-renderer/themes/okaidia');

/** @type {import('@docusaurus/types').Config} */
const config = {
  
  title: 'skainDoc',
  tagline: 'skaina blockchain documentation and tutorials.',
  url: 'https://doc.skaina.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'skainaLabs',
  projectName: 'doc', 


  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        doc: {
          sidebarPath: require.resolve('./sidebars.js'),

         },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'skaina',
        logo: {
          alt: 'skaina Logo',
          src: 'img/logo.png',
        },
        // items: [
        //   {
        //     type: 'doc',
        //     docId: 'intro',
        //     position: 'left',
        //     label: 'Introduction',
        //   },
  
        // ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
            //   {
            //   label: 'Discord',
            //   href: 'https://dd.skaina.com',
            // },
            // {
            //   label: 'Telegram',
            //   href: 'https://t.me/skaina',
            // },
            // {
            //   label: 'Bitcointalk',
            //   href: 'https://bitcointalk.org/index.php?topic=00000001',
            // },
            ],
          },
          {
            title: 'Social',
            items: [
              // {
              //   label: 'Reddit',
              //   href: 'https://www.reddit.com/r/skaina/',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/skaina',
              // },
              // {
              //   label: 'Facebook',
              //   href: 'https://www.facebook.com/skaina.com',
              // },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Wallet',
                href: 'https://wallet.skaina.com',
              },
              // {
              //   label: 'Explorer',
              //   href: 'https://scan.skaina.com',
              // },  
              {
                label: 'GitHub',
                href: 'https://github.com/skaina',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} skaina.`,
      },

    }),
};

module.exports = config;

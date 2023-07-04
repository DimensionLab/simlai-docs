const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  titleSuffix: ' - Siml.ai Docs',
  latex: true,
  staticImage: true,
  footerText: `© ${new Date().getFullYear()} DimensionLab s.r.o., creators of Siml.ai`,
})

module.exports = withNextra()

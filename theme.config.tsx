import React from "react";
import { useTheme } from 'next-themes';
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Image from "next/image";
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: () => {
    const { theme } = useTheme()
    return (
      <Image
        src={theme === "light" ? "/img/siml-logo-black-gradient.png" : "/img/siml-logo-white-gradient.png"}
        width={120}
        height={20}
        alt="Siml.ai logo"
      />
    )
  },
  project: {
    link: "https://github.com/DimensionLab/simlai-docs/tree/main",
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Siml.ai Documentation'
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://docs.siml.ai' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Siml.ai Documentation'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Siml.ai is a software platform for AI Engineering, providing a set of tools to easily create, train and deploy powerful high-performance AI-based physics simulators.'}
        />
      </>
    )
  },
  docsRepositoryBase: "https://github.com/DimensionLab/simlai-docs/tree/main",
  footer: {
    text: "Siml.ai Documentation",
  },
  banner: {
    key: 'v0.6-release',
    text: (
      <a href="https://www.dimensionlab.org/blog/siml-ai-v0-6-expressions-in-constraints-datasets-and-ux-improvements" target="_blank">
        🎉 Siml.ai v0.6 is released! Expressions in constraints, datasets and UX improvements. Read more →
      </a>
    )
  }
};

export default config;

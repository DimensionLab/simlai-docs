import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: <Image src="/img/siml-logo-white-gradient.png" width={120} height={20} alt="" />,
  project: {
    link: "https://github.com/DimensionLab/simlai-docs",
  },
  docsRepositoryBase: "https://github.com/DimensionLab/simlai-docs",
  footer: {
    text: "Siml.ai Docs",
  },
};

export default config;

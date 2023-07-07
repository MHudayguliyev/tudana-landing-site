const webpack = require('webpack')
const { parsed: myEnv } = require('dotenv').config({})
/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// const withImage=require('next-images')
// module.exports = withImage()

module.exports = withBundleAnalyzer({
  distDir: "build",
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ru", "tm"],
    defaultLocale: "tm",
    localeDetection: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
    return config
  }
});

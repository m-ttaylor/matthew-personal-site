/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = 'https://m-ttaylor.github.io/matthew-personal-site/'
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}


const nextConfig = {
  reactStrictMode: true,
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
}

export default nextConfig;
import createMDX from '@next/mdx'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // mdxRs: true,
  },
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
  // Optionally, add any other Next.js config below
}

export default withMDX(nextConfig)

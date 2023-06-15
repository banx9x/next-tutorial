/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // typedRoutes: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.dummyjson.com",
            },
            {
                protocol: "https",
                hostname: "robohash.org",
            },
        ],
    },
};

module.exports = nextConfig;

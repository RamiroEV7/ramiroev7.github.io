import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configuración para GitHub Pages
  output: 'export',
  trailingSlash: true,
  // Deshabilitar imágenes optimizadas si no son necesarias
  images: {
    unoptimized: true,
  },
  // Configuración de base path para GitHub Pages (descomenta y ajusta según tu repo)
  // basePath: '/nombre-de-tu-repo',
  // assetPrefix: '/nombre-de-tu-repo',
  // 禁用 Next.js 热重载，由 nodemon 处理重编译
  reactStrictMode: false,
  webpack: (config, { dev }) => {
    if (dev) {
      // 禁用 webpack 的热模块替换
      config.watchOptions = {
        ignored: ['**/*'], // 忽略所有文件变化
      };
    }
    return config;
  },
  eslint: {
    // 构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

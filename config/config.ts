import { defineConfig } from '@umijs/max';
import proxy from './proxy';
import { routes } from './route';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '个人生活感悟-詹姆斯',
    locale: false,
    // name: 'BasicLayout',
    // loading: '@/components/GlobalLoading', // 指定全局 Loading 组件
  },
  favicons: [
    //  图标的 meta 头标签
    '/avatar.jpg',
  ],
  publicPath: isDev
    ? '/'
    : 'https://static.kinglebronjames.club/static/james/dist/', // CDN地址
  routes,
  npmClient: 'pnpm',
  proxy,
  hash: true,
  jsMinifier: 'esbuild',
  outputPath: 'dist',
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM",
  //   // axios: "axios",
  //   // moment: "moment",
  //   dayjs: "dayjs",
  //   antd:"antd",
  //   echarts:'echarts'
  // },
  // links: [{ href: 'https://unpkg.com/antd@5.18.2/dist/reset.css', rel: 'stylesheet' }],
  // headScripts: [
  //   "https://unpkg.com/react@18.3.1/umd/react.production.min.js",
  //   "https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js",
  //   "https://unpkg.com/dayjs/dayjs.min.js",
  //   "https://unpkg.com/antd@5.18.2/dist/antd.min.js",
  //   "https://unpkg.com/echarts@5.5.0/dist/echarts.min.js"
  // ],
});

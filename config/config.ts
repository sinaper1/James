import { defineConfig } from '@umijs/max';
import proxy from './proxy';
import { routes } from './route';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '个人生活感悟-詹姆斯',
    locale: false,
  },
  routes,
  npmClient: 'pnpm',
  proxy,
});

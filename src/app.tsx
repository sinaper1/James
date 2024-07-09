// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
// import { RunTimeLayoutConfig } from '@umijs/max';
import Footer from '@/layouts/Footer';
import React from 'react';

// export async function getInitialState(): Promise<{ name: string }> {
//   return { name: '@umijs/max' };
// }

export const layout = () => {
  return {
    title: '个人生活感悟-詹姆斯',
    logo: 'http://static.kinglebronjames.club/static/james/image/background/avatar.jpg',
    menu: {
      locale: false,
    },
    // 默认布局调整
    // rightContentRender: () => <RightContent />,
    rightContentRender: undefined,
    footerRender: () => <Footer />,
    menuHeaderRender: undefined,
  };
};

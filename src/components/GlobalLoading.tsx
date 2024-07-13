import { history } from '@umijs/max';
import { Spin } from 'antd'; // 使用 Ant Design 的 Spin 组件作为加载指示器
import React, { useEffect, useState } from 'react';

const GlobalLoading: React.FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unlisten = history.listen(() => {
      setLoading(true); // 路由切换时显示加载状态
    });

    console.log(1212121212);

    return () => {
      unlisten();
    };
  }, []);

  return loading ? (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Spin size="large" />
    </div>
  ) : null;
};

export default GlobalLoading;

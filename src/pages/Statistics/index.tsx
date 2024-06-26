import React, {useState} from "react";
import { PageContainer } from '@ant-design/pro-components';
import { Spin } from 'antd';
import './index.less';

const StatisticsPage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    return (
        <PageContainer ghost>
            <Spin spinning={loading}>
                <div>
                    121212
                </div>
            </Spin>
        </PageContainer>
    )
}

export default StatisticsPage;

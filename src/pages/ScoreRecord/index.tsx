import React, { useRef }  from 'react';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { getScoreRecordList } from "@/services/v1/ScoreRecordController";
import { birthToAgeDiff, formatDateToChinese } from "@/utils/dateFormat";

const ScoreRecordPage: React.FC = () => {
    const actionRef = useRef<ActionType>();
    const birthDay = '1984-12-30';
    const columns: ProColumns<API.ScoreRecordItem>[] = [
        {
            title: '日期',
            key: 'date',
            dataIndex: 'date',
            render: (_, record) => formatDateToChinese(record.date),
        },
        {
            title: '生涯得分',
            key: 'score',
            dataIndex: 'score',
        },
        {
            title: '年龄',
            key: 'age',
            dataIndex: 'age',
            render: (_, record) => birthToAgeDiff(birthDay, record.date),
        },
    ];
    return (
        <PageContainer ghost>
            <ProTable<API.ScoreRecordItem>
                columns={columns}
                actionRef={actionRef}
                cardBordered
                request={async () => {
                    const response = await getScoreRecordList();
                    const { data, success } = response;
                    if (success) {
                        return { data, success };
                    } else {
                        return { data: [], success: false };
                    }
                }}
                rowKey="score"
                search={false}
                scroll={{
                    y: 'max-content',
                    x: 'max-content',
                }}
                pagination={{
                    defaultPageSize: 10,
                    pageSizeOptions: [5, 10, 20],
                    showQuickJumper: true,
                    showSizeChanger: true,
                }}
            />
        </PageContainer>
    );
};

export default ScoreRecordPage;

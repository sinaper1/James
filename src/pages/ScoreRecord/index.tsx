import { getScoreRecordList } from '@/services/v1/ScoreRecordController';
import { birthToAgeDiff, formatDateToChinese } from '@/utils/dateFormat';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import React, { useRef } from 'react';

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
    <PageContainer>
      <ProTable<API.ScoreRecordItem>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params) => {
          const response = await getScoreRecordList({
            page: params.current as number,
            pageSize: params.pageSize as number,
          });
          const { data, status } = response;
          if (status) {
            return { ...data, success: true };
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

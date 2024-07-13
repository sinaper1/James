import EChart from '@/components/EChart';
import { getStatisticsList } from '@/services/v1/StatisticsController';
import { isPad } from '@/utils/application';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Affix, Select, Spin } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import './index.less';

type listItem = {
  [key in string]: string;
};

const StatisticsPage: React.FC = () => {
  const list: listItem = {
    gp: '出场数',
    gs: '首发场数',
    score: '得分',
    backboard: '篮板',
    assist: '助攻',
    steal: '抢断',
    blockShot: '盖帽',
    mistake: '失误',
    foul: '犯规',
  };
  const divRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<{
    loading: boolean;
    type: string;
    seasonType: string;
    width: number;
    totalData?: API.TotalItem;
    statisticsData?: API.StatisticsItem;
  }>({
    loading: false,
    type: 'aver',
    seasonType: 'regular',
    width: 0,
  });
  const getDataList = async () => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));
    const { data, status } = await getStatisticsList({
      type: state.type,
      seasonType: state.seasonType,
    });
    if (status && data) {
      setState((prevState) => ({
        ...prevState,
        statisticsData: data.data,
        totalData: data.totalData,
      }));
    }
    setState((prevState) => ({
      ...prevState,
      loading: false,
    }));
  };
  const updateWidth = () => {
    if (divRef.current) {
      setState((prevState) => ({
        ...prevState,
        width: divRef.current ? divRef.current.offsetWidth : 0,
      }));
    }
  };
  useEffect(() => {
    updateWidth(); // Initial width
    window.addEventListener('resize', updateWidth);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);
  useEffect(() => {
    if (state.type && state.seasonType) {
      getDataList();
    }
  }, [state.type, state.seasonType]);
  return (
    <PageContainer>
      <Spin spinning={state.loading}>
        <div className={'statistics'}>
          <ProCard
            title="数据总览(数据统计时间：2024/7/10)"
            bordered
            extra={
              <Affix offsetTop={isPad() ? 60 : 20} key={'select'}>
                <Select
                  optionFilterProp="label"
                  onChange={(value) => {
                    setState((prevState) => ({
                      ...prevState,
                      type: value,
                    }));
                  }}
                  className={'statistics-select'}
                  value={state?.type}
                  options={[
                    {
                      value: 'aver',
                      label: '场均数据',
                    },
                    {
                      value: 'total',
                      label: '总计数据',
                    },
                  ]}
                />
                <Select
                  optionFilterProp="label"
                  onChange={(value) => {
                    setState((prevState) => ({
                      ...prevState,
                      seasonType: value,
                    }));
                  }}
                  className={'statistics-selectRight'}
                  value={state?.seasonType}
                  options={[
                    {
                      value: 'regular',
                      label: '常规赛',
                    },
                    {
                      value: 'post',
                      label: '季后赛',
                    },
                  ]}
                />
              </Affix>
            }
          >
            <>
              <div className={'statistics-total'}>
                {state?.totalData &&
                  Object.keys(state?.totalData as API.TotalItem)?.map(
                    (item: string, index: number) => (
                      <div className={'statistics-total-card'} key={index}>
                        <div className={'statistics-total-card-title'}>
                          {list[item]}
                        </div>
                        <div className={'statistics-total-card-content'}>
                          {state?.totalData && state.totalData[item]}
                        </div>
                      </div>
                    ),
                  )}
              </div>
              <div className={'statistics-echarts'} ref={divRef}>
                <EChart
                  width={state.width}
                  height={400}
                  option={{
                    title: {
                      text: '出场数',
                    },
                    tooltip: {},
                    xAxis: {
                      type: 'category',
                      data: state?.statisticsData?.season,
                    },
                    yAxis: {},
                    series: [
                      {
                        name: '首发场数',
                        data: state?.statisticsData?.gp,
                        type: 'bar',
                        stack: 'x',
                        color: '#552583',
                      },
                      {
                        name: '替补场数',
                        data: state?.statisticsData?.gs,
                        type: 'bar',
                        stack: 'x',
                        color: '#FDB927',
                      },
                    ],
                  }}
                />
                <EChart
                  width={state.width}
                  height={400}
                  option={{
                    title: {
                      text: '得分',
                    },
                    tooltip: {},
                    xAxis: {
                      type: 'category',
                      data: state?.statisticsData?.season,
                    },
                    yAxis: {},
                    series: [
                      {
                        data: state?.statisticsData?.score,
                        type: 'line',
                        color: '#552583',
                      },
                    ],
                  }}
                />
                <EChart
                  width={state.width}
                  height={400}
                  option={{
                    title: {
                      text: '篮板',
                    },
                    tooltip: {},
                    xAxis: {
                      type: 'category',
                      data: state?.statisticsData?.season,
                    },
                    yAxis: {},
                    series: [
                      {
                        data: state?.statisticsData?.backboard,
                        type: 'line',
                        color: '#552583',
                      },
                    ],
                  }}
                />
                <EChart
                  width={state.width}
                  height={400}
                  option={{
                    title: {
                      text: '助攻',
                    },
                    tooltip: {},
                    xAxis: {
                      type: 'category',
                      data: state?.statisticsData?.season,
                    },
                    yAxis: {},
                    series: [
                      {
                        data: state?.statisticsData?.assist,
                        type: 'line',
                        color: '#552583',
                      },
                    ],
                  }}
                />
                <EChart
                  width={state.width}
                  height={400}
                  option={{
                    title: {
                      text: '抢断',
                    },
                    tooltip: {},
                    xAxis: {
                      type: 'category',
                      data: state?.statisticsData?.season,
                    },
                    yAxis: {},
                    series: [
                      {
                        data: state?.statisticsData?.steal,
                        type: 'line',
                        color: '#552583',
                      },
                    ],
                  }}
                />
                <EChart
                  width={state.width}
                  height={400}
                  option={{
                    title: {
                      text: '盖帽',
                    },
                    tooltip: {},
                    xAxis: {
                      type: 'category',
                      data: state?.statisticsData?.season,
                    },
                    yAxis: {},
                    series: [
                      {
                        data: state?.statisticsData?.blockShot,
                        type: 'line',
                        color: '#552583',
                      },
                    ],
                  }}
                />
                <EChart
                  width={state.width}
                  height={400}
                  option={{
                    title: {
                      text: '失误',
                    },
                    tooltip: {},
                    xAxis: {
                      type: 'category',
                      data: state?.statisticsData?.season,
                    },
                    yAxis: {},
                    series: [
                      {
                        data: state?.statisticsData?.mistake,
                        type: 'line',
                        color: '#552583',
                      },
                    ],
                  }}
                />
                <EChart
                  width={state.width}
                  height={400}
                  option={{
                    title: {
                      text: '犯规',
                    },
                    tooltip: {},
                    xAxis: {
                      type: 'category',
                      data: state?.statisticsData?.season,
                    },
                    yAxis: {},
                    series: [
                      {
                        data: state?.statisticsData?.foul,
                        type: 'line',
                        color: '#552583',
                      },
                    ],
                  }}
                />
              </div>
            </>
          </ProCard>
        </div>
      </Spin>
    </PageContainer>
  );
};

export default StatisticsPage;

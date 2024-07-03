import { request } from '@umijs/max';

export async function getStatisticsList(
    params: {
        /**
         * type: aver: 场均，total: 总共
         * seasonType: regular:常规赛,post季后赛
         * */
        type: string;
        seasonType: string;
    },
    options?: { [key: string]: any },
) {
    return request<API.StatisticsResponse>('/api/v1/getStatisticsList', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

export async function getTotalList(
    params: {
        /**
         * seasonType: regular:常规赛,post季后赛
         * */
        seasonType: string;
    },
    options?: { [key: string]: any },
) {
    return request<API.TotalResponse>('/api/v1/getTotalList', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

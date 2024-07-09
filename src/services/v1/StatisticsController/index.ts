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
  return request<API.StatisticsResponse>(
    '/basketball/api/score/getStatistics',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

// export async function getTotalList(
//     params: {
//         /**
//          * seasonType: regular:常规赛,post季后赛
//          * */
//         type: string;
//         seasonType: string;
//     },
//     options?: { [key: string]: any },
// ) {
//     return request<API.TotalResponse>('/basketball/api/score/getStatistics', {
//         method: 'GET',
//         params: {
//             ...params,
//         },
//         ...(options || {}),
//     });
// }

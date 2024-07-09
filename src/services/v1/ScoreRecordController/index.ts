import { request } from '@umijs/max';

export async function getScoreRecordList(
  params: {
    /** id */
    page: number;
    pageSize: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.ScoreRecordResponse>(
    '/basketball/api/score/getScoreRecord',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

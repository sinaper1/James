import { request } from '@umijs/max';

export async function getScoreRecordList(
    options?: { [key: string]: any },
) {
    return request<API.ScoreRecordResponse>('/api/v1/getScoreRecordList', {
        method: 'GET',
        ...(options || {}),
    });
}

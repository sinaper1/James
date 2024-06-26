import { request } from '@umijs/max';

export async function getStatisticsList(
    options?: { [key: string]: any },
) {
    return request<API.HomeResponse>('/api/v1/getHomeList', {
        method: 'GET',
        // params: {
        //     ...params,
        // },
        ...(options || {}),
    });
}

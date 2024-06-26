import { request } from '@umijs/max';

export async function getHomeList(
    options?: { [key: string]: any },
) {
    return request<API.HomeResponse>('/api/v1/getHomeList', {
        method: 'GET',
        ...(options || {}),
    });
}

import { request } from '@umijs/max';

export async function getImageList(
    params: {
        /** id */
        id: number;
    },
    options?: { [key: string]: any },
) {
    return request<API.ImageResponse>('/api/v1/getImageList', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

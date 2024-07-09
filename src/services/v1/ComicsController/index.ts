import { request } from '@umijs/max';

export async function getImageList(
  params: {
    /** id */
    id: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.ImageResponse>('/basketball/api/comics/getComicsList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

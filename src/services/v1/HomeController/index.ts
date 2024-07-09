import { request } from '@umijs/max';

export async function getHomeList(options?: { [key: string]: any }) {
  return request<API.HomeResponse>('/basketball/api/basic/getPlayerInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

export const routes= [
    {
        path: '/',
        redirect: '/home',
    },
    {
        name: '简介',
        path: '/home',
        component: './Home',
    },
    {
        name: '数据统计',
        path: '/statistics',
        component: './Statistics',
    },
    {
        name: '詹皇传奇',
        path: '/comics',
        component: './Comics',
    },
]

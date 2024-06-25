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
        name: '权限演示',
        path: '/access',
        component: './Access',
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './Table',
    },
    {
        name: '詹皇传奇',
        path: '/comics',
        component: './Comics',
    },
]

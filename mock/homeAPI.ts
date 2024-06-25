const home = {
    id: 0,
    logo: 'https://static.kinglebronjames.club/static/james/image/background/team.png',
    avatar: 'https://static.kinglebronjames.club/static/james/image/background/avatar2.png',
    name: '勒布朗-詹姆斯',
    eName: 'LeBron-James',
    team: '洛杉矶湖人',
    number: 'No.23',
    position: '小前锋',
    birth: '1984年12月30日',
    country: '美国',
    height: '206cm',
    weight: '113Kg',
    // 站立摸高
    stand: '270cm',
    // 臂展
    wingspan: '214cm',
    // 选秀顺位
    draft: '2003年第1轮1顺位',
    // 职业生涯
    career: '2003年-至今',
    careerHistory: [
        {year: '2003-2010', team: '克利夫兰骑士'},
        {year: '2010-2014', team: '迈阿密热火'},
        {year: '2014-2018', team: '克利夫兰骑士'},
        {year: '2018-至今', team: '洛杉矶湖人'},
    ]
};

export default {
    'GET /api/v1/getHomeList': (req: any, res: any) => {
        res.json({
            success: true,
            data: home,
            errorCode: 0,
        });
    },
}

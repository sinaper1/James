const home = {
  id: 0,
  avatar:
    'http://static.kinglebronjames.club/static/james/image/background/avatar2.png',
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
    {
      year: '2003-2010',
      team: '克利夫兰骑士',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/cleveland.png',
    },
    {
      year: '2010-2014',
      team: '迈阿密热火',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/heat.png',
    },
    {
      year: '2014-2018',
      team: '克利夫兰骑士',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/cleveland.png',
    },
    {
      year: '2018-至今',
      team: '洛杉矶湖人',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/lakers.png',
    },
  ],
  careerHonors: [
    {
      year: [2020, 2016, 2013, 2012],
      name: '总冠军',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/champion.png',
    },
    {
      year: [2020, 2016, 2013, 2012],
      name: '总决赛MVP',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/fmvp.png',
    },
    {
      year: [2024],
      name: '季中赛冠军',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/champion.png',
    },
    {
      year: [2024],
      name: '季中赛MVP',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/champion.png',
    },
    {
      year: [2013, 2012, 2010, 2009],
      name: 'MVP',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/mvp.png',
    },
    {
      year: [
        2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
        2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005,
      ],
      name: '全明星',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/champion.png',
    },
    {
      year: [2018, 2008, 2006],
      name: '全明星MVP',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/amvp.png',
    },
    {
      year: [
        2020, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008,
        2006,
      ],
      name: '最佳阵容一阵',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/champion.png',
    },
    {
      year: [2021, 2007, 2005],
      name: '最佳阵容二阵',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/champion.png',
    },
    {
      year: [2024, 2023, 2022, 2019],
      name: '最佳阵容三阵',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/champion.png',
    },
    {
      year: [2013, 2012, 2011, 2010, 2009],
      name: '最佳防守一阵',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/champion.png',
    },
    {
      year: [2014],
      name: '最佳防守二阵',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/champion.png',
    },
    {
      year: [2008],
      name: '得分王',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/champion.png',
    },
    {
      year: [2020],
      name: '助攻王',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/champion.png',
    },
    {
      year: [2004],
      name: '最佳新秀',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/bestRookie.png',
    },
    {
      year: [2004],
      name: '最佳新秀一阵',
      logo: 'http://static.kinglebronjames.club/static/james/image/background/champion.png',
    },
  ],
  lakes:
    'http://static.kinglebronjames.club/static/james/image/background/lakers.png',
  // heat: 'https://static.kinglebronjames.club/static/james/image/background/heat.png',
  // cleveland: 'https://static.kinglebronjames.club/static/james/image/background/cleveland.png',
  mvp: 'http://static.kinglebronjames.club/static/james/image/background/mvp.png',
  amvp: 'http://static.kinglebronjames.club/static/james/image/background/amvp.png',
  fmvp: 'http://static.kinglebronjames.club/static/james/image/background/fmvp.png',
  bestRookie:
    'http://static.kinglebronjames.club/static/james/image/background/bestRookie.png',
  champion:
    'http://static.kinglebronjames.club/static/james/image/background/champion.png',
};

export default {
  'GET /api/v1/getHomeList': (req: any, res: any) => {
    res.json({
      success: true,
      data: home,
      errorCode: 0,
    });
  },
};

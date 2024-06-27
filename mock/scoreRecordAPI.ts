const scoreRecord = [
    {
        date: '2004-2-9',
        score: 1000,
    },
    {
        date: '2004-11-27',
        score: 2000,
    },
    {
        date: '2005-3-2',
        score: 3000,
    },
    {
        date: '2005-11-13',
        score: 4000,
    },
    {
        date: '2006-1-21',
        score: 5000,
    },
    {
        date: '2006-3-29',
        score: 6000,
    },
    {
        date: '2006-12-23',
        score: 7000,
    },
    {
        date: '2007-3-14',
        score: 8000,
    },
    {
        date: '2007-12-17',
        score: 9000,
    },
    {
        date: '2008-2-27',
        score: 10000,
    },
    {
        date: '2008-11-18',
        score: 11000,
    },
    {
        date: '2009-2-3',
        score: 12000,
    },
    {
        date: '2009-10-27',
        score: 13000,
    },
    {
        date: '2010-1-2',
        score: 14000,
    },
    {
        date: '2010-3-19',
        score: 15000,
    },
    {
        date: '2010-12-23',
        score: 16000,
    },
    {
        date: '2011-3-18',
        score: 17000,
    },
    {
        date: '2012-2-3',
        score: 18000,
    },
    {
        date: '2012-4-19',
        score: 19000,
    },
    {
        date: '2013-1-16',
        score: 20000,
    },
    {
        date: '2013-4-6',
        score: 21000,
    },
    {
        date: '2014-1-10',
        score: 22000,
    },
    {
        date: '2014-4-4',
        score: 23000,
    },
    {
        date: '2015-1-17',
        score: 24000,
    },
    {
        date: '2015-11-3',
        score: 25000,
    },
    {
        date: '2016-1-30',
        score: 26000,
    },
    {
        date: '2016-11-12',
        score: 27000,
    },
    {
        date: '2017-2-4',
        score: 28000,
    },
    {
        date: '2017-11-3',
        score: 29000,
    },
    {
        date: '2018-1-24',
        score: 30000,
    },
    {
        date: '2018-4-6',
        score: 31000,
    },
    {
        date: '2019-2-6',
        score: 32000,
    },
    {
        date: '2019-11-28',
        score: 33000,
    },
    {
        date: '2020-3-7',
        score: 34000,
    },
    {
        date: '2021-2-19',
        score: 35000,
    },
    {
        date: '2021-12-29',
        score: 36000,
    },
    {
        date: '2022-3-28',
        score: 37000,
    },
    {
        date: '2023-1-16',
        score: 38000,
    },
    {
        date: '2023-11-24',
        score: 39000,
    },
    {
        date: '2024-3-3',
        score: 40000,
    },
];

export default {
    'GET /api/v1/getScoreRecordList': (req: any, res: any) => {
        res.json({
            success: true,
            data: scoreRecord,
            errorCode: 0,
        });
    },
}

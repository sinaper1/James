const users = [
  { id: 0, name: 'Umi', nickName: 'U', gender: 'MALE' },
  { id: 1, name: 'Fish', nickName: 'B', gender: 'FEMALE' },
];

const ImageArr = [
  {id: 1, number: 8},
  {id: 2, number: 8},
  {id: 3, number: 8},
  {id: 4, number: 8},
  {id: 5, number: 8},
  {id: 6, number: 8},
  {id: 7, number: 8},
  {id: 8, number: 9},
  {id: 9, number: 7},
  {id: 10, number: 7},
  {id: 11, number: 9},
  {id: 12, number: 5},
  {id: 13, number: 3},
]

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
  'GET /api/v1/getImageList': (req: {query: any}, res: any) => {
    const arr: string[] = [];
    ImageArr.forEach(item=>{
      if(req?.query?.id && item.id === Number(req?.query?.id)){
        for(let i = 0; i<=item.number; i++){
          arr.push(`https://static.kinglebronjames.club/static/james/image/caricature/Image/${req.query.id}th/${req.query.id}-${i}.jpg`)
        }
      }
    })
    res.json({
      success: true,
      data: { list: arr },
      errorCode: 0,
    });
  },
};

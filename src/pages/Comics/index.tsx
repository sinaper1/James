import { isPad } from '@/utils/application';
import { PageContainer } from '@ant-design/pro-components';
import { Affix, Image, Select, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
// import {getImageList} from "@/services/v1/ComicsController";
import './index.less';

const ImageArr = [
  { id: 1, number: 8 },
  { id: 2, number: 8 },
  { id: 3, number: 8 },
  { id: 4, number: 8 },
  { id: 5, number: 8 },
  { id: 6, number: 8 },
  { id: 7, number: 8 },
  { id: 8, number: 9 },
  { id: 9, number: 7 },
  { id: 10, number: 7 },
  { id: 11, number: 9 },
  { id: 12, number: 5 },
  { id: 13, number: 3 },
];

const HomePage: React.FC = () => {
  const [selectValue, setSelectValue] = useState<number>();
  const [imageArr, setImageArr] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const onChange = async (value: number) => {
    setLoading(true);
    setSelectValue(value);
    const arr: string[] = [];
    ImageArr.forEach((item) => {
      if (value && item.id === Number(value)) {
        for (let i = 0; i <= item.number; i++) {
          arr.push(
            `http://static.kinglebronjames.club/static/james/image/caricature/Image/${value}th/${value}-${i}.jpg`,
          );
        }
      }
    });
    window.scrollTo(0, 0);
    setImageArr(arr);
    // const {success, data} = await getImageList({id: value});
    // if(success && data?.list?.length){
    //     window.scrollTo(0, 0);
    //     setImageArr(data.list);
    // }
    setLoading(false);
  };
  useEffect(() => {
    onChange(1);
  }, []);
  return (
    <PageContainer
      className={'comics-container'}
      header={{
        title: '詹皇传奇',
        ghost: true,
        extra: [
          <Affix offsetTop={isPad() ? 60 : 20} key={'select'}>
            <Select
              placeholder="Select a person"
              optionFilterProp="label"
              onChange={onChange}
              className={'comics-select'}
              value={selectValue}
              options={[
                {
                  value: 1,
                  label: '第一回：初出茅庐',
                },
                {
                  value: 2,
                  label: '第二回：人，一定要有梦想',
                },
                {
                  value: 3,
                  label: '第三回：大战御林军',
                },
                {
                  value: 4,
                  label: '第四回：击溃汽车人',
                },
                {
                  value: 5,
                  label: '第五回：未来是你的',
                },
                {
                  value: 6,
                  label: '第六回：绿色恐怖',
                },
                {
                  value: 7,
                  label: '第七回：差不多先生',
                },
                {
                  value: 8,
                  label: '第八回：重要的决定',
                },
                {
                  value: 9,
                  label: '第九回：迷失',
                },
                {
                  value: 10,
                  label: '第十回：圆梦',
                },
                {
                  value: 11,
                  label: '第十一回：复仇',
                },
                {
                  value: 12,
                  label: '第十二回：艰难的决定2',
                },
                {
                  value: 13,
                  label: '第十三回：游子归来',
                },
              ]}
            />
          </Affix>,
        ],
      }}
    >
      <Spin spinning={loading}>
        <div className={'comics-content'}>
          {imageArr.map((item, index) => (
            <Image key={index} src={item} preview={false} />
          ))}
        </div>
      </Spin>
    </PageContainer>
  );
};

export default HomePage;

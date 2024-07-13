import { getHomeList } from '@/services/v1/HomeController';
import { PageContainer } from '@ant-design/pro-components';
import { Col, Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import './index.less';

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<API.dataItem>();
  const getDataList = async () => {
    setLoading(true);
    const { data, status } = await getHomeList();
    if (status) {
      setDataSource(data);
    }
    setLoading(false);
  };
  useEffect(() => {
    getDataList();
  }, []);
  return (
    <PageContainer>
      <Spin spinning={loading}>
        <div className={'home'}>
          <Row>
            <Col>
              <div className={'home-avatar'}>
                <div className={'home-avatar-right'}>
                  <figure className={'home-avatar-right-logo'}>
                    <div className={'home-avatar-right-logo-ratio'} />
                    <div className={'home-avatar-right-logo-image'}>
                      <img src={dataSource?.teamLogo} alt={'logo'} />
                    </div>
                  </figure>
                  <div className={'home-avatar-right-logo'} />
                  <div className={'home-avatar-right-left'} />
                  <figure className={'home-avatar-right-avatar'}>
                    <div className={'home-avatar-right-avatar-ratio'} />
                    <div className={'home-avatar-right-avatar-image'}>
                      <img
                        src={dataSource?.avatar}
                        alt={'avatar'}
                        className={'home-avatar-right-avatar-image-detail'}
                      />
                    </div>
                  </figure>
                  <div className={'home-avatar-right-right'} />
                </div>
                <div className={'home-avatar-left'} />
              </div>
            </Col>
            <Col>
              <div className={'home-intro'}>
                <h1>{dataSource?.name}</h1>
                <h1>{dataSource?.eName}</h1>
                <div className={'home-intro-detail'}>
                  <img
                    src={dataSource?.teamLogo}
                    alt={'logo'}
                    className={'home-intro-detail-logo'}
                  />
                  <span>{dataSource?.team}</span>
                  <span>-</span>
                  <span>{dataSource?.number}</span>
                  <span>-</span>
                  <span>{dataSource?.position}</span>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className={'home-title'}>个人资料</div>
            </Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <b>出生日期</b>
            </Col>
            <Col xs={12} sm={6} md={6} lg={8} xl={8}>
              <span>{dataSource?.birth}</span>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <b>国籍</b>
            </Col>
            <Col xs={12} sm={6} md={6} lg={8} xl={8}>
              <span>{dataSource?.country}</span>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <b>身高</b>
            </Col>
            <Col xs={12} sm={6} md={6} lg={8} xl={8}>
              <span>{dataSource?.height}CM</span>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <b>体重</b>
            </Col>
            <Col xs={12} sm={6} md={6} lg={8} xl={8}>
              <span>{dataSource?.weight}KG</span>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <b>站立摸高</b>
            </Col>
            <Col xs={12} sm={6} md={6} lg={8} xl={8}>
              <span>{dataSource?.stand}CM</span>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <b>臂展</b>
            </Col>
            <Col xs={12} sm={6} md={6} lg={8} xl={8}>
              <span>{dataSource?.wingspan}CM</span>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className={'home-title'}>职业资料</div>
            </Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <b>选秀顺位</b>
            </Col>
            <Col xs={12} sm={6} md={6} lg={8} xl={8}>
              <span>{dataSource?.draft}</span>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <b>职业生涯</b>
            </Col>
            <Col xs={12} sm={6} md={6} lg={8} xl={8}>
              <span>{dataSource?.career}</span>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className={'home-title'}>职业生涯历史</div>
            </Col>
          </Row>
          <Row gutter={[0, 8]}>
            {dataSource?.careerHistory?.map((item) => (
              <>
                <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                  <span>{item?.year}</span>
                </Col>
                <Col xs={12} sm={6} md={6} lg={8} xl={8}>
                  <img
                    src={item?.logo}
                    alt={'logo'}
                    className={'home-intro-detail-logo'}
                  />
                  <span>{item?.team}</span>
                </Col>
              </>
            ))}
          </Row>
          <Row>
            <Col span={24}>
              <div className={'home-title'}>职业生涯荣誉</div>
            </Col>
          </Row>
          <Row gutter={[0, 10]}>
            {dataSource?.careerHonors?.map((item, index) => (
              <Col xs={24} sm={12} md={12} lg={8} xl={8} key={index}>
                <div className={'home-honors'}>
                  <img
                    src={item?.logo}
                    alt={'logo'}
                    className={'home-honors-logo'}
                  />
                  <div className={'home-honors-detail'}>
                    <span>{`${item?.year?.split(',')?.length}×${
                      item?.name
                    }`}</span>
                    <span className={'home-honors-detail-year'}>
                      {item?.year}
                    </span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Spin>
    </PageContainer>
  );
};

export default HomePage;

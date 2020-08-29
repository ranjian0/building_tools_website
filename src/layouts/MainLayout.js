import React from 'react';
import {  Layout, Menu, PageHeader  } from 'antd';
import {  UnorderedListOutlined, DownloadOutlined, HomeOutlined } from '@ant-design/icons';
import CarouselLayout from '../components/Carousel';
import DownloadButton from '../components/DownloadButton'
import 'antd/dist/antd.css';
import './MainLayout.css';

const { Header, Content, Footer, Sider } = Layout;


const MainLayout = () => {
    return (
      <Layout style={{minHeight:"100vh"}}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<DownloadOutlined />}>
              Downloads
            </Menu.Item>
            <Menu.Item key="3" icon={<UnorderedListOutlined />}>
              Wiki
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} >
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Building Tools"
                subTitle="Fast building exteriors in Blender"
              />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <CarouselLayout />
                <br />
                <DownloadButton />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
  )
}


export default MainLayout;
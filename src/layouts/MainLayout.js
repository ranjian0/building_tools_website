import React from 'react';
import {  Layout, Menu, PageHeader  } from 'antd';
import {  UnorderedListOutlined, DownloadOutlined, HomeOutlined } from '@ant-design/icons';
import {  Switch, Route, useHistory } from "react-router-dom";

import HomePage from '../pages/HomePage';
import WikiPage from '../pages/WikiPage';
import DownloadPage from '../pages/DownloadPage';

import 'antd/dist/antd.css';
import './MainLayout.css';

const { Header, Content, Footer, Sider } = Layout;


const MainLayout = () => {
    const history = useHistory()

    const onMenuClicked = (item, key, keyPath, e) => {
        history.push(item.key)
    }

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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={onMenuClicked}>
            <Menu.Item key="/" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="/downloads" icon={<DownloadOutlined />}>
              Downloads
            </Menu.Item>
            <Menu.Item key="/wiki" icon={<UnorderedListOutlined />}>
              Wiki
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0}} >
            <PageHeader
                className="site-page-header"
                onBack={() => {history.push('/')}}
                title="Building Tools"
                subTitle="Fast building exteriors in Blender"
              />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24 }}>
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route path="/downloads">
                    <DownloadPage />
                  </Route>
                  <Route path="/wiki">
                    <WikiPage />
                  </Route>
                </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', "height": "15vh" }}>Building Tools ©2020</Footer>
        </Layout>
      </Layout>
  )
}


export default MainLayout;
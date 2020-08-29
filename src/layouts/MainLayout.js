import React, { useRef } from 'react';
import {  Layout, Menu, PageHeader  } from 'antd';
import {  UnorderedListOutlined, DownloadOutlined, HomeOutlined } from '@ant-design/icons';
import {  Switch, Route, useHistory } from "react-router-dom";

import HomePage from '../pages/HomePage';
import WikiPage from '../pages/WikiPage';
import DownloadPage from '../pages/DownloadPage';

import 'antd/dist/antd.css';
import './MainLayout.css';

const { Header, Content, Footer, Sider } = Layout;

const MenuKeys = {
    home: "/",
    downloads: "/downloads",
    wiki: "/wiki"
}


const MainLayout = () => {
    const history = useHistory()
    const menuRef = useRef(null)

    const onMenuClicked = (item, key, keyPath, e) => {
        history.push(item.key)
    }

    const onHeaderBackButton = () => {
        menuRef.current.selectedKeys=[]
        history.push('/')
        console.log("Back pressed", menuRef.current)
    }

    return (
      <Layout style={{minHeight:"100vh"}}>
        <Sider breakpoint="lg" collapsedWidth="0">
          <div className="logo" />
          <Menu ref={menuRef} theme="dark" mode="inline" defaultSelectedKeys={[MenuKeys.home]} onClick={onMenuClicked}>
            <Menu.Item key={MenuKeys.home} icon={<HomeOutlined />}>Home</Menu.Item>
            <Menu.Item key={MenuKeys.downloads} icon={<DownloadOutlined />}>Downloads</Menu.Item>
            <Menu.Item key={MenuKeys.wiki} icon={<UnorderedListOutlined />}>Wiki </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0}} >
            <PageHeader
                className="site-page-header"
                onBack={onHeaderBackButton}
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
import React, { useRef } from 'react';
import {  Layout, Menu, PageHeader  } from 'antd';
import {  UnorderedListOutlined, DownloadOutlined, HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';
import {  Switch, Route, useHistory } from "react-router-dom";

import HomePage from '../pages/HomePage';
import WikiPage from '../pages/WikiPage';
import AboutPage from '../pages/AboutPage';
import DownloadPage from '../pages/DownloadPage';

import 'antd/dist/antd.css';
import './MainLayout.css';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const MenuKeys = {
    home: "/",
    about: "/about",
    downloads: "/downloads",
    wiki: "/wiki",
    wiki_installation: "/wiki/installation",
    wiki_modules: "/wiki/modules",
    wiki_dev: "/wiki/dev"
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
            <Menu.Item key={MenuKeys.about} icon={<InfoCircleOutlined />}>About</Menu.Item>
            <Menu.Item key={MenuKeys.downloads} icon={<DownloadOutlined />}>Downloads</Menu.Item>
            <SubMenu key={MenuKeys.wiki} icon={<UnorderedListOutlined />} title="Wiki">
              <Menu.Item key={MenuKeys.wiki_installation}>Installation</Menu.Item>
              <Menu.Item key={MenuKeys.wiki_modules}>Modules</Menu.Item>
              <Menu.Item key={MenuKeys.wiki_dev}>Development</Menu.Item>
            </SubMenu>
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
                  <Route exact path="/about">
                    <AboutPage />
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
import React, { useRef, useState, useEffect } from 'react';
import {  Layout, Menu, PageHeader  } from 'antd';
import {  Switch, Route, useHistory } from "react-router-dom";
import {  UnorderedListOutlined, DownloadOutlined, HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';

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
    wiki_dev: "/wiki/dev",
    wiki_mod_: "/wiki/mod"
}


const MainLayout = () => {
    const history = useHistory()
    const menuRef = useRef(null)
    const [subtitle, setSubtitle] = useState('')
    const [menuSelection, setMenuSelection] = useState('/')

    // When the component mounts
    useEffect(() => {
      if (window.innerWidth >= 576) {
        setSubtitle('Fast building exteriors in Blender')
      }
    }, [])

    // When the window is resized
    useEffect(() => {
      function onResize(e) {
        if (window.innerWidth >= 576) {
          setSubtitle('Fast building exteriors in Blender')
        } else {
          setSubtitle('')
        }
      }
      window.addEventListener('resize', onResize)
      return () => {
        window.removeEventListener('resize', onResize)
      }
    })



    const onMenuClicked = (item, key, keyPath, e) => {
      setMenuSelection(item.key)
      history.push(item.key)
    }

    const onHeaderBackButton = () => {
      setMenuSelection('/')
      history.push('/')
    }

    return (
      <Layout style={{minHeight:"100vh"}}>
        <Sider breakpoint="lg" collapsedWidth="0">
          <div className="logo" />
          <Menu ref={menuRef} theme="dark" mode="inline" selectedKeys={[menuSelection,]} defaultSelectedKeys={[MenuKeys.home]} onClick={onMenuClicked}>
            <Menu.Item key={MenuKeys.home} icon={<HomeOutlined />}>Home</Menu.Item>
            <Menu.Item key={MenuKeys.about} icon={<InfoCircleOutlined />}>About</Menu.Item>
            <Menu.Item key={MenuKeys.downloads} icon={<DownloadOutlined />}>Downloads</Menu.Item>
            <SubMenu key={MenuKeys.wiki} icon={<UnorderedListOutlined />} title="Wiki">
              {/* Installation */}
              <Menu.Item key={MenuKeys.wiki_installation}>Installation</Menu.Item>

              {/* Modules */}
              <SubMenu key={MenuKeys.wiki_modules} title="Modules">
                <Menu.Item key={MenuKeys.wiki_mod_}>Floorplan</Menu.Item>
                <Menu.Item key={MenuKeys.wiki_mod_}>Floors</Menu.Item>
                <Menu.Item key={MenuKeys.wiki_mod_}>Roof</Menu.Item>

                <Menu.Item key={MenuKeys.wiki_mod_}>Window</Menu.Item>
                <Menu.Item key={MenuKeys.wiki_mod_}>Door</Menu.Item>
                <Menu.Item key={MenuKeys.wiki_mod_}>Multigroup</Menu.Item>

                <Menu.Item key={MenuKeys.wiki_mod_}>Balcony</Menu.Item>
                <Menu.Item key={MenuKeys.wiki_mod_}>Stairs</Menu.Item>

                <Menu.Item key={MenuKeys.wiki_mod_}>Materials</Menu.Item>
              </SubMenu>

              {/* Development */}
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
                subTitle={subtitle}
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
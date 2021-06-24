import React, { useRef, useState, useEffect } from 'react';
import {  Layout, Menu, PageHeader  } from 'antd';
import {  Switch, Route, useHistory } from "react-router-dom";
import {  DownloadOutlined, HomeOutlined, AppstoreOutlined } from '@ant-design/icons';

import HomePage from '../pages/HomePage';
import DemoPage from '../pages/DemoPage';
import DownloadPage from '../pages/DownloadPage';

import 'antd/dist/antd.css';
import './MainLayout.css';

const { Header, Content, Sider } = Layout;

const MenuKeys = {
    home: "/",
    demo: "/demo",
    downloads: "/downloads",
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
          <div className="logo"><p>Building Tools</p></div>
          <Menu ref={menuRef} theme="dark" mode="inline" selectedKeys={[menuSelection,]}
                defaultSelectedKeys={[MenuKeys.home]} onClick={onMenuClicked}>
            <Menu.Item key={MenuKeys.home} icon={<HomeOutlined />}>Home</Menu.Item>
            <Menu.Item key={MenuKeys.downloads} icon={<DownloadOutlined />}>Downloads</Menu.Item>
            <Menu.Item key={MenuKeys.demo} icon={<AppstoreOutlined />}>Demo</Menu.Item>
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
          <Content>
            <div className="site-layout-background" style={{ padding: 24 }}>
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route path="/downloads">
                    <DownloadPage />
                  </Route>
                  <Route exact path="/demo">
                    <DemoPage />
                  </Route>
                </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
  )
}


export default MainLayout;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Typography, Button, Space } from 'antd'
import { DownloadOutlined } from '@ant-design/icons';
import { DownloadRelease, API_URL } from '../GithubAPI';


function fileSize(size) {
  var i = Math.floor( Math.log(size) / Math.log(1024) )
  return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
}

const DownloadPage = () => {
  const [state, setState] = useState({
    loading: false,
    stable_releases: [],
    unstable_releases: []
  })

  useEffect(() => {
    setState({loading: true})
    axios.get(API_URL).then((releases) => {
      const allReleases = releases.data
      let stable = allReleases.filter(release => !release.prerelease)
      let unstable = allReleases.filter(release => release.prerelease)
      setState({loading: false, stable_releases:stable, unstable_releases:unstable})
    })
  }, [setState])

  let text = ''
  let size = 'small'
  // Medium devices
  if (window.innerWidth >= 768 && window.innerWidth < 992) {
      size = 'medium'
      text = 'Download'
  // Large Devices
  } else if (window.innerWidth >= 992) {
      size = 'large'
      text = 'Download'
  }
  const [btnSize, setBtnSize] = useState(size)
  const [btnText, setBtnText] = useState(text)

  function onResize(e) {
      // Small devices
      if (window.innerWidth <= 576) {
          setBtnSize('small')
          setBtnText('')
      // Medium devices
      } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
          setBtnSize('medium')
          setBtnText('Download')
      // Large Devices
      } else if (window.innerWidth >= 992) {
          setBtnSize('large')
          setBtnText('Download')
      }
  }

  useEffect(() => {
      window.addEventListener('resize', onResize)
      return () => {
          window.removeEventListener('resize', onResize)
      }
  })


  return (
        <div>
            <List
              header={<Typography.Text strong>Stable Releases</Typography.Text>}
              bordered
              dataSource={state.stable_releases}
              renderItem={item => (
                <List.Item>
                  <Typography.Text >{item.name}</Typography.Text>
                  <Space>
                    <Typography.Text type="success">{fileSize(item.assets[0].size)}</Typography.Text>
                    <Button type="primary" icon={<DownloadOutlined />} size={size} shape='round' onClick={(e) => {DownloadRelease(item)}}>
                              {text}
                    </Button>
                  </Space>
                </List.Item>
              )}
            />

            <br />

            <List
              header={<Typography.Text strong>Unstable Releases</Typography.Text>}
              bordered
              dataSource={state.unstable_releases}
              renderItem={item => (
                <List.Item>
                  <Typography.Text >{item.name}</Typography.Text>
                  <Space>
                    <Typography.Text type="success">{fileSize(item.assets[0].size)}</Typography.Text>
                    <Button type="primary" icon={<DownloadOutlined />} size={size} shape='round' onClick={(e) => {DownloadRelease(item)}}>
                              {text}
                    </Button>
                  </Space>
                </List.Item>
              )}
            />

        </div>
    )
}

export default DownloadPage;
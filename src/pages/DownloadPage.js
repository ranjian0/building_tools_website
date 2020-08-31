import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Typography, Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons';
import { DownloadRelease, API_URL } from '../GithubAPI';


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

  return (
        <div>
            <List
              header={<Typography.Text strong>Stable Releases</Typography.Text>}
              bordered
              dataSource={state.stable_releases}
              renderItem={item => (
                <List.Item>
                  <Typography.Text >{item.name}</Typography.Text>
                  <Button type="primary" icon={<DownloadOutlined />} size='default' shape='round' onClick={(e) => {DownloadRelease(item)}}>
                            Download
                  </Button>

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
                  <Button type="primary" icon={<DownloadOutlined />} size='default' shape='round' onClick={(e) => {DownloadRelease(item)}}>
                            Download
                  </Button>

                </List.Item>
              )}
            />

        </div>
    )
}

export default DownloadPage;
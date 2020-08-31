import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Space } from 'antd';
import { DownloadOutlined, GithubOutlined } from '@ant-design/icons';
import { DownloadRelease, API_URL } from '../GithubAPI'


const DownloadButton = () => {
    const [btnSize, setBtnSize] = useState('large')
    const [state, setState] = useState({
        loading: false,
        latest_release: null,
    })

    useEffect(() => {
    setState({loading: true})
    axios.get(API_URL).then((releases) => {
      const allReleases = releases.data
      setState({loading: false, latest_release:allReleases[0]})
    })
    }, [setState])


    function download_latest(e) {
        console.log(state.latest_release)
        DownloadRelease(state.latest_release)
    }

    function showgithub(e) {
        window.open("https://github.com/ranjian0/building_tools", "_blank")
    }

    function onResize(e) {
        // Small devices
        if (window.innerWidth <= 576) {
            setBtnSize('small')
        // Medium devices
        } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
            setBtnSize('medium')
        // Large Devices
        } else if (window.innerWidth >= 992) {
            setBtnSize('large')
        }
    }

    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    })

    onResize(null)
    let download_text = btnSize === 'small' ? 'Dowload' : 'Download Latest'
    let github_text = btnSize === 'small' ? 'Github' : 'View on Github'
    return (
        <Space>
            <Button type="primary" icon={<DownloadOutlined />} size={btnSize} onClick={download_latest}>
                      {download_text}
            </Button>


            <Button type="primary" icon={<GithubOutlined />} size={btnSize} onClick={showgithub}>
                      {github_text}
            </Button>
        </Space>
    )
}

export default DownloadButton;


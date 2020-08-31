import React from 'react';
import { Button, Space } from 'antd';
import { DownloadOutlined, GithubOutlined } from '@ant-design/icons';


const DownloadButton = () => {
    function donwload(e) {
        console.log("Donwload Clicked")
    }

    function showgithub(e) {
        console.log("Show on Github")
    }

    return (
        <Space>
            <Button type="primary" icon={<DownloadOutlined />} size='large' onClick={donwload}>
                      Download Latest
            </Button>


            <Button type="primary" icon={<GithubOutlined />} size='large' onClick={showgithub}>
                      View on Github
            </Button>
        </Space>
    )
}

export default DownloadButton;


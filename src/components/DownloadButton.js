import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';


const DownloadButton = () => {
    function donwload(e) {
        console.log("Donwload Clicked")
    }

    return (
        <Button type="primary" icon={<DownloadOutlined />} size='large' onClick={donwload}>
                  Download Latest
        </Button>
    )
}

export default DownloadButton;


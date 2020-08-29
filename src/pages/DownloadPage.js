import React from 'react';
import { List, Typography } from 'antd'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
];

const DownloadPage = () => {
    return (
        <div>
            <List
              header={<Typography.Text strong>Stable Releases</Typography.Text>}
              bordered
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <Typography.Text mark>[ITEM]</Typography.Text> {item}
                </List.Item>
              )}
            />

            <br />

            <List
              header={<Typography.Text strong>Alpha Releases</Typography.Text>}
              bordered
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <Typography.Text mark>[ITEM]</Typography.Text> {item}
                </List.Item>
              )}
            />

        </div>
    )
}

export default DownloadPage;
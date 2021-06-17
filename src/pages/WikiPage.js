import React from 'react';
import { List, Card } from 'antd';

const { Meta } = Card;

const data = [
  {
    title: 'Installation',
    description: "Installation instructions"
  },
  {
    title: 'Modules',
    description: "In depth tutorials for all the addon tools"
  },
  {
    title: 'Development',
    description: "Up and running for contributors"
  },
];


const WikiPage = () => {
    return (
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card
                // style={{ width: "150" }}
                cover={
                  <img
                    alt="example"
                    src="https://via.placeholder.com/150"
                  />
                }>

                <Meta
                  title={item.title}
                  description={item.description}
                />
              </Card>
            </List.Item>
        )}
      />
    )
}


export default WikiPage;
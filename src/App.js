import React, { Component } from "react";
import { Avatar, Card, Button} from 'antd';
import { UserOutlined ,SearchOutlined} from '@ant-design/icons';
import './App.css';
import 'antd/dist/antd.css';

const { Meta,Grid } = Card;


class FoodPlan extends Component{
   render() {
    return (
      <div class = "Container">
        <div class = "Header">
          header
        </div>
        <div class = "Content1">
          Content1
        </div>
        <div class = "Content2">
          <div class = "Image1">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="homemade.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="homemade.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="homemade.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>
          <div class = "Image2">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="homemade.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="homemade.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="homemade.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>
          <div class = "Image3">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="homemade.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="homemade.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card><Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="homemade.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="homemade.png" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="homemade.png" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <div class = "Image4">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="homemade.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="homemade.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="homemade.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>
        </div>
        <div class="Sider">
          Sider
        </div>
        <div class="Bottom">
          Bottom
        </div>
        <div class="Footer">
          Footer
        </div>
      </div>


    );
  }
}
export default FoodPlan;

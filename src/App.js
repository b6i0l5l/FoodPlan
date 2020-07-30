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
          <Button type="link" class = "ant-btn-link">
            Home
          </Button>
          <Button type="link" class = "ant-btn-link">
            Homade
          </Button>
          <Button type="link" class = "ant-btn-link">
            Restaurant
          </Button>
          <Button type="link" class = "ant-btn-link">
            Vegetarians
          </Button>
          <Button type="link" class = "ant-btn-link">
            Desserts
          </Button>
        </div>
        <div class = "Test">

        </div>
        <div class = "Content1">
        </div>
        <div class = "Content21">
          <div class = "Image">
            <Card
              class = "ant-card-cover"
              cover={<img alt="example" src="content2.png" />}
            >
              <Meta title="HomeMade" description="www.instagram.com" />
            </Card>
          </div>
        </div>
        <div class = "Content22">
          <div class = "Image">
            <Card
              class = "ant-card-cover"
              cover={<img alt="example" src="content2.png" />}
            >
              <Meta title="Restaurant" description="www.instagram.com" />
            </Card>
          </div>
        </div>
        <div class = "Content23">
          <div class = "Image">
            <Card
              class = "ant-card-cover"
              cover={<img alt="example" src="content2.png" />}
            >
              <Meta title="Vegetarians" description="www.instagram.com" />
            </Card>
          </div>
        </div>
        <div class = "Content24">
          <div class = "Image">
            <Card
              class = "ant-card-cover"
              cover={<img alt="example" src="content2.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>
        </div>
        <div class = "Footer">
          Footer
        </div>
      </div>


    );
  }
}
export default FoodPlan;

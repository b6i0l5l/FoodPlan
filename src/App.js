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
        <div class = "Content1">
        </div>
        <div class = "Slogan">
          <p>FitnessPlan</p>
          <p>is</p>
          <p>30% workout, 70% eat</p>
        </div>
        <div class = "Content21">
          <div class = "Image">
            <Card
              class = "ant-card-cover"
              cover={<img alt="example" src="homemade.png" />}
            >
              <Meta title="HomeMade" description="Try to make your own food? Click here!" />
            </Card>
          </div>
        </div>
        <div class = "Content22">
          <div class = "Image">
            <Card
              class = "ant-card-cover"
              cover={<img alt="example" src="Restaurant.jpg" />}
            >
              <Meta title="Restaurant" description="Are you a foodie? Click here!" />
            </Card>
          </div>
        </div>
        <div class = "Content23">
          <div class = "Image">
            <Card
              class = "ant-card-cover"
              cover={<img alt="example" src="vegetarian.jpeg" />}
            >
              <Meta title="Vegetarians" description="Hi, I'm Vegan. Click here!" />
            </Card>
          </div>
        </div>
        <div class = "Content24">
          <div class = "Image">
            <Card
              class = "ant-card-cover"
              cover={<img alt="example" src="QA.jpg" />}
            >
              <Meta title="QA" description="Questions for your meal? Click here!" />
            </Card>
          </div>
        </div>
        <div class = "Footer">
          Made by Stanley
        </div>
      </div>


    );
  }
}
export default FoodPlan;

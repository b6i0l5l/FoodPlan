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
            QA
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
            <div class = "ant-card">
              <Card
                class = "ant-card-cover"
                cover={<img alt="example" src="homemade.png" />}
              >
                <div class = "Image1-Title">
                  <p>HomeMade</p>
                  <p1>Try to make your own food? Click here!</p1>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div class = "Content22">
          <div class = "Image">
            <div class = "ant-card">
              <Card
                class = "ant-card-cover"
                cover={<img alt="example" src="Restaurant.jpg" />}
              >
                <div class = "Image2-Title">
                  <p>Restaurant</p>
                  <p1>Are you a foodie? Click here!</p1>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div class = "Content23">
          <div class = "Image">
            <div class = "ant-card">
              <Card
                class = "ant-card-cover"
                cover={<img alt="example" src="vegetarian.jpeg" />}
              >
                <div class = "Image3-Title">
                  <p>Vegetarians</p>
                  <p1>Hi, I'm Vegan. Click here!</p1>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div class = "Content24">
          <div class = "Image">
            <div class = "ant-card">
              <Card
                class = "ant-card-cover"
                cover={<img alt="example" src="QA.jpg" />}
              >
                <div class = "Image4-Title">
                  <p>QA</p>
                  <p1>Questions for your meal? Click here!</p1>
                </div>
              </Card>
            </div>
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

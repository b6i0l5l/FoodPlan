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
          Content2
        </div>
        <div class="Image1">
          <Card
            class = "ant-card-cover"
            cover={<img alt="example" src="homemade.png" />}
          >
            <div class = "Image1-Title">
              <p>HomeMade</p>
              <p1>Try to make your own food?</p1>
              <a>
                Click here!
              </a>
            </div>
          </Card>
        </div>
        <div class="Image2">
          good
        </div>
        <div class="Image3">
          good
        </div>


        <div class = "Sider">
          Sider
        </div>
        <div class = "Bottom">
          Bottom
        </div>
        <div class = "Footer">
          Footer
        </div>
      </div>


    );
  }
}
export default FoodPlan;

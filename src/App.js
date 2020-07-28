import React, { Component } from "react";
import { Avatar, Card, Button,Tooltip} from 'antd';
import { UserOutlined ,SearchOutlined} from '@ant-design/icons';
import './App.css';



class FoodPlan extends Component{

   render() {
    return (

      <div class ="Container">
        <div class ="Left-Side">
          <Avatar size={150} icon={<UserOutlined />} style={{ position:'absolute',backgroundColor: 'white',display: 'flex',alignItems: 'center',justifyContent: 'center',top:'5%'}} />
          <Card style={{ width: 150, position:'absolute',backgroundColor: 'white', top:'25%' }}>
              <p>Name: </p>
              <p>Posts: </p>
              <p>Likes: </p>
          </Card>
          <Button size={10} shape="circle" icon={<SearchOutlined />} style={{ width: 150, height: 30, position:'absolute',backgroundColor: 'white',top:'45%' }}>Search</Button>
          <Button type="primary" shape="round" size={150}>
            HomeMande
          </Button>
          <Button type="primary" shape="round" size={150}>
            Restaruant
          </Button>
          <Button type="primary" shape="round" size={150}>
            Vegetarian
          </Button>
          <Button type="primary" shape="round" size={150}>
            QA
          </Button>
        </div>
        <div class ="Right-Side">
          COOL
          COOL
          COOL
        </div>

      </div>

    );
  }
}
export default FoodPlan;

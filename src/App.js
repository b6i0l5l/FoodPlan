import React, { Component } from "react";
import { Avatar, Card, Button} from 'antd';
import { UserOutlined ,SearchOutlined} from '@ant-design/icons';
import './App.css';



class FoodPlan extends Component{

   render() {
    return (

      <div class = "Container">
        <div class = "Header">
          header
        </div>
        <div class = "LeftSide">
          <Avatar shape="square" size={100} icon={<UserOutlined />} style={{display:'flex',backgroundColor:"white",alignItems:'center',justifyContent:'center',marginLeft:"10%"}}/>
          <div class = "Info">
            <p>Name: </p>
            <p>Likes: </p>
            <p>Posts: </p>
          </div>
          <div class = "Button">
            <Button type="primary"  icon={<SearchOutlined />} style={{width:150,height:40}}>
              Search
            </Button>
            <Button type="primary"  style={{width:150,height:40,marginTop:'10%'}}>
              HomeMade
            </Button>
            <Button type="primary"  style={{width:150,height:40,marginTop:'1%'}}>
              Restaurant
            </Button>
            <Button type="primary"  style={{width:150,height:40,marginTop:'1%'}}>
              Vegetarian
            </Button>
            <Button type="primary"  style={{width:150,height:40,marginTop:'1%'}}>
              QA
            </Button>
          </div>
        </div>
        <div class = "Footer">
          Footer
        </div>
        <div class = "Body">
          Body
        </div>
      </div>


    );
  }
}
export default FoodPlan;

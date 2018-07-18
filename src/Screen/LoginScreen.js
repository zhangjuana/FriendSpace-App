import React, { Component } from 'react'
import logo from'../../src/logo.svg';
import { 
    Button,
    NavBar,
    WingBlank, 
    WhiteSpace ,
    List,
    InputItem,
    Toast
} from 'antd-mobile';
import { list } from 'postcss';

import userManager from '../DataServer/UserManager';

export default class LoginScreen extends Component {
    componentDidMount(){
        if(userManager.isLogin()===true){
            this.props.history.replace('/TabBarScreen');
        }
    }
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         password:''
      }
    }
    
  render() {
    return (
      <div>
        <NavBar
            mode="dark"
        >
            朋友圈
        </NavBar>
        <img src={logo}/>
        <List>
            <InputItem
                type={'text'}
                value={this.state.username}
                onChange={(username)=>{this.setState({username})}}
                placeholder={"请输入用户名"}
            >
            用户名
            </InputItem>
            <InputItem
                type={'password'}
                value={this.state.password}
                onChange={(password)=>{this.setState({password})}}
                placeholder={"请输入密码"}
            >
            密码
            </InputItem>
        </List>
        <WhiteSpace/>
        <WingBlank>
            <Button
                type={'primary'}
                onClick={async()=>{
                    const result=await userManager.login(this.state.username,this.state.password);
                    console.log(result);
                    if(result.success===false)
                    {
                        Toast.fail(result.errorMessage);
                        return;
                    }
                    this.props.history.push("TabBarScreen");
                }}
            >
            登录
            </Button>
            <WhiteSpace/>
            <Button
                type={'primary'}
                onClick={()=>{
                    this.props.history.push('RegisterScreen');  
                }}  
            >
            注册
            </Button>
        </WingBlank>
      </div>
    )
  }
}

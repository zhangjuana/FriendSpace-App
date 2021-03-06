import React, { Component } from 'react'

import { 
    Button,
    NavBar,
    WingBlank, 
    WhiteSpace ,
    List,
    InputItem,
    Icon,
    Toast
} from 'antd-mobile';
import userManager from "../DataServer/UserManager";
export default class RegisterScreen extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email:'',
         password:''
      }
    }
    
  render() {
    return (
      <div>
        <NavBar
            mode="dark"
            icon={<Icon type="left"/>}
            onLeftClick={()=>{this.props.history.goBack()}}
        >
            注册
        </NavBar>
        <List>
            <InputItem
                type={'text'}
                value={this.state.email}
                onChange={(email)=>{this.setState({email})}}
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
                    const result=await userManager.register(this.state.email,this.state.password);
                    console.log(result);
                    if(result.success===false)
                    {
                        Toast.fail(result.errorMessage);
                        return;
                    }
                    this.props.history.replace("CreateUserScreen");
                }}
            >
            提交
            </Button>
            <WhiteSpace/>
        </WingBlank>
      </div>
    )
  }
}

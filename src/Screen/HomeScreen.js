import React, { Component } from 'react'

import { 
  Toast,
  NavBar,
  ListView,
  PullToRefresh
} from 'antd-mobile';

import userManager from '../DataServer/UserManager';
import messageManager from '../DataServer/MessageManager';
import HomeListItem from'../ViewComponent/HomeListItem';
export default class HomeScreen extends Component {
    async componentDidMount(){
     
      if(userManager.isLogin()===false){
        return;
      }
      const result=await messageManager.homeMessage();
      if(result.success===false){
        Toast.fail(result.errorMessage);
        return;
      }
      this.setState((preState)=>{
        return{
          dataSource:preState.dataSource.cloneWithRows(result.data)
        }
      })

    }

    constructor(props) {
      super(props)
      
      const dataSource =new ListView.DataSource({
        rowHasChanged:(row1,row2)=>row1 !== row2,
      })

      this.state = {
         dataSource,
         refresing:false
      }
    }
    
    onRefresh=async()=>{
      try {
        this.setState({refresing:true});
        const result=await messageManager.homeMessage();
        if(result.success===false){
          Toast.fail(result.errorMessage);
          this.setState({refresing:false});
          return;
        }
        this.setState((preState)=>{
          return{
            dataSource:preState.dataSource.cloneWithRows(result.data),
            refreshing:false
          }
        })
      } catch (error) {
        Toast.fail(`${error}`);
        this.setState({refreshing:false});
      }
    }


  render() {
    return (
      <div>
        <NavBar
          mode='dark'     
            rightContent={[
            <span
              key={2}
              onClick={()=>{
                this.props.history.push('CreateMessageScreen')
              }}
              >
              发消息
            </span>
          ]}
        >
          动态
        </NavBar>
        <ListView
          useBodyScroll={true}
          dataSource={this.state.dataSource}
          pullToRefresh={
            <pullToRefresh
              refreshing={this.state.refresing}
              onRefresh={this.onRefresh}
            />
          }
          renderRow={(message)=>{
            return(
              <HomeListItem
                {...message}
              />
            )
          }}
        />
      </div>
    )
  }
}

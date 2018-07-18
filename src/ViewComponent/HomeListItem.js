import React, { Component } from 'react'
import moment from 'moment';
import './HomeListItem.css';
import { 
    WingBlank, 
    WhiteSpace ,
    Card,
    Grid
} from 'antd-mobile';

import {
    imageBaseURL
} from '../DataServer/URLConfig';

export default class HomeListItem extends Component {
  render() {
      const images=this.props.images.map((image)=>{
            return{
                icon:imageBaseURL+image.url
            }
      })
    return (
      <div
        onClick={()=>{
            if(this.props.onItemClick){
                this.props.onItemClick();
            }
        }}
      >
        <WingBlank>
            <WhiteSpace/>
            <Card>
                <Card.Header
                    title={this.props.user.nickname}
                    thumb={imageBaseURL+this.props.user.image}
                    thumbStyle={{width:'40px',height:'40px'}}
                />
                <Card.Body>
                    <span>
                        {this.props.content}
                    </span>
                    <Grid
                        data={images}
                        columnNum={3}
                        hasLine={false}
                        renderItem={(image)=>{
                            return(
                                <div style={{
                                    width:'88px',
                                    height:'88px',
                                    background:`url(${image.icon}) center center / 86px 86px no-repeat`}}
                                />
                            )
                        }}
                    />
                </Card.Body>
                <Card.Footer
                        content={moment(this.props.createdAt).format('YYYY-MM-DD HH:mm')}
                />
            </Card>
        </WingBlank>
      </div>
    )
  }
}

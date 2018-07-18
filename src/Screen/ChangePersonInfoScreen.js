import React, { Component } from 'react'

import {
    Button,
    Toast,
    NavBar,
    WingBlank,
    WhiteSpace,
    List,
    InputItem,
    Icon,
    ImagePicker,
    Modal
} from 'antd-mobile';

 import userManager from '../DataServer/UserManager';
 import personManager from '../DataServer/PersonManager';

export default class ChangePersonInfoScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nickname: props.location.state.nickname,
            sign: props.location.state.sign,
            files: []
        }
    }

    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { this.props.history.goBack() }}
                >修改用户信息</NavBar>
                <WhiteSpace />
                <ImagePicker
                    files={this.state.files}
                    onChange={(files) => { this.setState({ files }) }}
                    selectable={this.state.files.length < 1}
                />
                <List>
                    <InputItem
                        type={'text'}
                       value={this.state.nickname}
                       onChange={(nickname) => { this.setState({ nickname }) }}
                        placeholder={'请输入昵称'}
                    >
                        昵称
                    </InputItem>
                    <InputItem
                        type={'text'}
                        value={this.state.sign}
                        onChange={(sign) => { this.setState({ sign }) }}
                        placeholder={'请输入个性签名'}
                    >
                        签名
                    </InputItem>
                </List>
                <WhiteSpace />
                <WingBlank>
                    <Button
                        type={'primary'}
                        onClick={async () => {
                            Toast.loading('内容上传中...', 0);
                            const userinfo = {
                                nickname: this.state.nickname,
                                sign: this.state.sign
                            }
                            if (this.state.files.length !== 0) {
                                userinfo.image = this.state.files[0];
                            }
                            const result = await personManager.updateUser(userinfo);
                            console.log(result)

                            Toast.hide();
                            if (result.success === false) {
                                Toast.fail(result.errorMessage);
                                return;
                            }
                            Modal.alert('修改成功', '点击确认返回', [{
                                text: '确认',
                                onPress: () => { this.props.history.goBack() }
                            }])
                        }}
                    >
                        提交修改
                    </Button>
                </WingBlank>
            </div>
        )
    }

}
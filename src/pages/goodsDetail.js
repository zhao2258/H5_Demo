import React from 'react'
import { NavBar, Icon,Button } from 'antd-mobile'
import router from 'umi/router'

export default class GoodsDetail extends React.Component{
    render(){
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    rightContent={[
                        <Icon key="0" type="search" />
                        // <Icon key="1" type="ellipsis" />,
                    ]}
                    onLeftClick={()=>router.goBack()}
                    >商品详情页</NavBar>
                <h1>我是商品的详情页</h1>
                详情页ID:{this.props.location.query.ID}
            </div>
        )
    }
}
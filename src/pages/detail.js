import React from 'react'
import { Button } from 'antd'
import router from 'umi/router'

export default class Detail extends React.Component{
    render(){
        return(
            <div>
                <h1>我是详情页</h1>
                详情页ID:{this.props.location.query.ID}
                <Button onClick={()=>router.goBack()}>返回</Button>
            </div>
        )
    }
}
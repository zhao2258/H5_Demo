import React from 'react'
import router from 'umi/router'
import { Button } from 'antd'

export default class Home extends React.Component{
    goDetail=(id)=>{
        router.push(`/detail?ID=${id}`);
    }
    render(){
        return (
            <div>
                我是首页！
                <Button onClick={()=>this.goDetail(111)}>111</Button>
                <Button onClick={()=>this.goDetail(222)}>2222</Button>
                <Button onClick={()=>this.goDetail(333)}>333</Button>
            </div>
        )
    }
}
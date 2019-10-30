import React from 'react'
import router from 'umi/router'
import { NavBar, Icon,Button,Carousel, WingBlank,Grid } from 'antd-mobile'

export default class Home extends React.Component{
    state = {
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
    }
    goDetail=(value)=>{
        router.push(`/detail?ID=${value.id}`);
    }
    goGoodsDetail=(value)=>{
        router.push(`/goodsDetail?ID=${value}`);
    }
    render(){
        const GridData = Array.from(new Array(6)).map((_val, i) => ({
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: `帅哥${i}`,
            id:`${i}`
        }))
        const CascadeFlow = Array.from(new Array(20)).map((_val,i)=>{
            return <div onClick={()=>this.goGoodsDetail(i)} key={i} style={{overflow:'auto',margin:'10px',height:`${Math.random()*100}px`,minHeight:'30px',background:`#${Math.floor( Math.random() * 0xffffff ).toString(16)}`}}>
                我是方块{i+1}
            </div>
        })
        return (
            <div>
                <div style={{height:'45px'}}>
                    <NavBar style={{position:'absolute',top:0,width:'100%',zIndex:1000}}
                        mode="dark"
                    >首页</NavBar>
                </div>
                <div>
                    <Carousel
                    autoplay={false}
                    infinite
                    autoplay={true}
                    >
                        <a
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src='./images/a.jpg'
                            alt="图片加载异常，请刷新重试"
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                        <a
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={'./images/d.jpg'}
                            alt="图片加载异常，请刷新重试"
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                        <a
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={'./images/c.jpg'}
                            alt="图片加载异常，请刷新重试"
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    </Carousel>
                </div>
                <Grid data={GridData} onClick={(e)=>this.goDetail(e)} columnNum={3} />
                <div style={{columnCount:2,columnGap:0,marginTop:'1rem'}}>
                    {CascadeFlow}
                </div>
            </div>
        )
    }
}
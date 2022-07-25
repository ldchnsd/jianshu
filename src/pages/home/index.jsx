import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import Download from './components/Download'


class Home extends Component {

    componentDidMount() {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data
            const action = {
                type: 'home_list',
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList
            }
            this.props.handleHomeList(action)
        })
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='540' />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Download />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
}

const mapDispatch = (dispatch) => ({
    handleHomeList: (action) => {
        dispatch(action)
    }
})

export default connect(null, mapDispatch)(Home)

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import Download from './components/Download'
import { actionCreators } from './store/index'
import { BackToTop } from './style'

class Home extends PureComponent {

    componentDidMount() {
        this.props.handleHomeList()
        this.scrollEvent()

    }
    scrollEvent = () => {
        window.addEventListener('scroll', this.props.handleScrollTop)
    }

    handleBackTop() {
        window.scrollTo(0, 0)
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
                {this.props.backtop ? <BackToTop onClick={() => { this.handleBackTop() }} >顶部</BackToTop> : null}

            </HomeWrapper>
        )
    }
}


const mapState = (state) => ({
    backtop: state.getIn(['home', 'backtotop'])
})

const mapDispatch = (dispatch) => ({
    handleHomeList: () => {
        dispatch(actionCreators.homeListAction())
    },
    handleScrollTop: () => {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleScroll(true))
        } else {
            dispatch(actionCreators.toggleScroll(false))
        }

    }
})

export default connect(mapState, mapDispatch)(Home)

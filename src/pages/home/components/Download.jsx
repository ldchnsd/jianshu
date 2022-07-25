import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DownloadApp, DownloadInfo, AppCode } from '../style'
import { actionCreators } from '../store/index'
import { CSSTransition } from "react-transition-group";


class Download extends Component {
    handleApp = (mouseIn) => {
        if (mouseIn) {
            return (
                <CSSTransition
                    in={mouseIn}
                    classNames='appShow'
                    timeout={500}>
                    <AppCode>
                        <img className='appcode' alt='' src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-bef8a3919bdba9e8d965956b37291e98.png' />
                    </AppCode>
                </CSSTransition>
            )

        } else {
            return null
        }
    }

    render() {
        const { download, mouseIn, handleMouseEnter, handleMouseLeave } = this.props
        return (
            download.map((item) => {
                return <DownloadApp key={item.get('id')} onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    {this.handleApp(mouseIn)}
                    <img alt='' className='qrcode' src={item.get('imgUrl')} />
                    <DownloadInfo>
                        <h5 className='title'>{item.get('title')}</h5>
                        <p className='desc'>{item.get('desc')}</p>
                    </DownloadInfo>

                </DownloadApp>
            })
        )
    }
}
const mapState = (state) => ({
    download: state.getIn(['home', 'downloadApp']),
    mouseIn: state.getIn(['home', 'mouseIn'])
})
const mapDispatch = (dispatch) => {
    return {
        handleMouseEnter: () => {
            dispatch(actionCreators.mouseEnterAction())
        },
        handleMouseLeave: () => {
            dispatch(actionCreators.mouseLeaveAction())
        }
    }
}
export default connect(mapState, mapDispatch)(Download)
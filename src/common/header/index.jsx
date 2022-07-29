import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from './store/index'
import { actionCreators as logoutActionCreators } from '../../pages/login/store'
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-router-dom'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWraper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  Addition,
  Button,
} from "./style";



class Header extends PureComponent {

  getListArea = () => {

    const { list, page, totalPage, focused, mouseIn, handleMouseIn, handleMouseOut, handleChangePage } = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
      }
    }


    if (focused || mouseIn) {
      return <SearchInfo onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch onClick={() => { handleChangePage(page, totalPage) }} >
            <span className="iconfont spin">&#xe851;</span>
            换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        {pageList}
      </SearchInfo>
    } else {
      return null
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>

        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          {login ?
            <NavItem onClick={logout} className="right">退出</NavItem> :
            <Link to='/login'><NavItem className="right">登录</NavItem></Link>}
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWraper>
            <CSSTransition
              classNames='slide'
              in={focused}
              timeout={300}
            >
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => { handleInputFocus(list) }}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span
              className={focused ? "focused iconfont zoom" : "iconfont zoom"}
            >
              &#xe637;
            </span>
            {this.getListArea(focused)}
          </SearchWraper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className="writting">
              <span className="iconfont">&#xe600;</span>
              写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper >
    );
  }

}


const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus: (list) => {
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur: () => {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseIn: () => {
      dispatch(actionCreators.mouseIn())
    },
    handleMouseOut: () => {
      dispatch(actionCreators.mouseOut())
    },
    handleChangePage: (page, totalPage) => {
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
    logout: () => {
      dispatch(logoutActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

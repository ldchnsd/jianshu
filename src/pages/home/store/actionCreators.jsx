import { actionTypes } from './index'
import axios from 'axios'
import { fromJS } from 'immutable'

export const mouseEnterAction = () => ({ type: actionTypes.MOUSE_ENTER })
export const mouseLeaveAction = () => ({ type: actionTypes.MOUSE_LEAVE })

const homeAction = (result) => ({
    type: actionTypes.HOME_LIST,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const loadMoreAction = (result, nextPage) => ({
    type: actionTypes.LOAD_MORE,
    list: fromJS(result),
    nextPage

})


export const homeListAction = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data
            dispatch(homeAction(result))
        })
    }
}

export const loadMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data
            dispatch(loadMoreAction(result, page + 1))
        })
    }
}

export const toggleScroll = (show) => ({
    type: actionTypes.TOGGLE_SCROLL,
    show
})
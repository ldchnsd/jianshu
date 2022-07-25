import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

export const searchFocus = () => ({ type: actionTypes.INPUT_FOCUS })
export const searchBlur = () => ({ type: actionTypes.INPUT_BLUR })
export const mouseIn = () => ({ type: actionTypes.MOUSE_IN })
export const mouseOut = () => ({ type: actionTypes.MOUSE_OUT })
export const changePage = (data) => ({ type: actionTypes.CHANGE_PAGE, data })



export const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data
            dispatch(changeList(data.data))
        }).catch((error) => {
            console.log(error, 'error');
        })
    }
}

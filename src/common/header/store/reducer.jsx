import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'


//初始化状态数据(要转换成immutable对象)
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
})

const reducer = (state = defaultState, action) => {
    const { type, data, totalPage } = action
    switch (type) {
        //immutable对象的set方法,会结合之前immutable对象的值和要设置的值,返回一个全新的对象
        case actionTypes.INPUT_FOCUS:
            return state.set('focused', true)
        case actionTypes.INPUT_BLUR:
            return state.set('focused', false)
        case actionTypes.CHANGE_LIST:
            return state.merge({
                "list": data,
                "totalPage": totalPage
            })

        case actionTypes.MOUSE_IN:
            return state.set('mouseIn', true)
        case actionTypes.MOUSE_OUT:
            return state.set('mouseIn', false)
        case actionTypes.CHANGE_PAGE:
            return state.set('page', data)

        default:
            return state
    }



}
export default reducer
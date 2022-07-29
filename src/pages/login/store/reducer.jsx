
import { fromJS } from 'immutable'
import { actionTypes } from './index'


//初始化状态数据(要转换成immutable对象)
const defaultState = fromJS({
    login: false,
})

const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case actionTypes.CHANGE_LOGIN:
            return state.set('login', action.value)
        case actionTypes.LOGOUT:
            return state.set('login', action.value)
        default:
            return state;
    }
}
export default reducer
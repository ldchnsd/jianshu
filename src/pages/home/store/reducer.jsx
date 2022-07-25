
import { fromJS } from 'immutable'
import { actionTypes } from './index'


//初始化状态数据(要转换成immutable对象)
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    downloadApp: [
        {
            id: 1,
            title: '下载简书手机App',
            desc: '随时随地发现和创作内容',
            imgUrl: 'https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-bef8a3919bdba9e8d965956b37291e98.png'
        }
    ],
    mouseIn: false,
})

const reducer = (state = defaultState, action) => {
    const { type } = action
    switch (type) {
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case 'home_list':
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            })
        default:
            return state;
    }
}
export default reducer
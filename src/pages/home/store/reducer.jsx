
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
    articlePage: 1,
    backtotop: false,
})

const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case actionTypes.HOME_LIST:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            })
        case actionTypes.LOAD_MORE:
            return state.merge({
                articleList: [...state.get('articleList'), ...action.list],
                articlePage: action.nextPage
            })

        case actionTypes.TOGGLE_SCROLL:
            return state.set('backtotop', action.show)

        default:
            return state;
    }
}
export default reducer
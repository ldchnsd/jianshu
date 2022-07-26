
import { fromJS } from 'immutable'
import { actionTypes } from './index'


//初始化状态数据(要转换成immutable对象)
const defaultState = fromJS({
    title: '野花芬芳',
    content: '<img src="https://upload-images.jianshu.io/upload_images/15992237-4637829443e3d5c3.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"/><p> <b>白屈菜（学名：Chelidonium majus）为罂粟科白屈菜属下的一个种。</b>在中国大部分省区均有分布，沂源、博山山区有分布，以鲁山较为集中，生于山谷湿润地带。生于海拔500—2200米的山坡、山谷林缘草地或路旁、石缝。朝鲜、日本、俄罗斯及欧洲也有分布。</p><p>白屈菜为多年生草本，高30—100厘米，有黄色乳汁。茎直立，多分枝，嫩绿色，被白粉，疏生柔毛。叶互生，1—2回羽状全裂，基生叶全裂片5—8对，茎生叶全裂片2—4对，边缘有不整齐缺刻，上面近无毛，下面疏生短柔毛，有白粉。花数朵，伞状排列；萼片2，早落；花瓣4，黄色，倒卵圆形；雄蕊多数；子房线形，无毛。蒴果线状圆柱形，成熟时由基部向上开裂。种子多数，卵球形，黄褐色，有光泽及网纹。花期5—8月，果期6—10月。</p><p>白屈菜根具有散瘀，止血，止痛，解蛇毒的功效。主治劳伤血瘀，脘痛，月经不调，痛经，蛇咬伤。</p>'
})

const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case actionTypes.ADD_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })

        default:
            return state;
    }
}
export default reducer
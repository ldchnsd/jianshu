import React, { Component } from 'react'
import { WriterArea, WriterTitle, WriterList } from '../style'

export default class Writer extends Component {
    render() {
        return (
            <WriterArea>
                <WriterTitle>
                    <p className='author' >推荐作者</p>
                    <span className='switch' >换一换</span>
                </WriterTitle>
                <WriterList>
                    <img className='pic' src="	https://upload.jianshu.io/users/upload_avatars/713…o-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                    <div className='author'>露露说</div>
                    <div className='focus'>关注</div>
                    <div> 写了2177.2k字 · 34.6k喜欢 </div>

                </WriterList>
            </WriterArea>
        )
    }
}

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListItem, ListInfo, LoadMore } from '../style'
import { loadMoreList } from '../store/actionCreators'

class List extends PureComponent {

    render() {

        return (
            <div>
                {this.props.list.map((item, index) => {
                    return (
                        <Link key={index} to={'/detail/' + item.get('id')}>
                            <ListItem >
                                <img className='pic' src={item.get('imgUrl')} alt='' />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    )
                })
                }
                <LoadMore onClick={() => { this.props.handleLoadMore(this.props.page) }} >更多内容</LoadMore>
            </div >
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispacth) => ({
    handleLoadMore: (page) => {
        dispacth(loadMoreList(page))
    }
})

export default connect(mapState, mapDispatch)(List)

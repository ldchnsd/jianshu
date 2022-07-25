import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RecommendItem } from '../style'

class Recommend extends Component {
    render() {
        return (
            this.props.list.map((item) => {
                return (<RecommendItem>
                    <img className='pic' alt='' src={item.get('imgUrl')} />
                </RecommendItem>)

            })
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState)(Recommend)


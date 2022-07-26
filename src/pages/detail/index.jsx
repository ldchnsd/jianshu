import React, { PureComponent } from 'react'
import { DetailWrapper, Header, Content } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Detail extends PureComponent {

    componentDidMount() {
        this.props.handleDetail(this.props.match.id)
    }


    render() {
        const { title, content } = this.props
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{ __html: content }} />
            </DetailWrapper>
        )
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})
const mapDispatch = (dispatch) => ({
    handleDetail: (id) => {
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapState, mapDispatch)(Detail)


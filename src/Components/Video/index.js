import React, {Component} from 'react';
import {Row, Container} from 'reactstrap';
import VideoList from './list';
import VideoDetail from './detail';

export default class Videos extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container className={'mt-5'}>
                    <Row>
                        <VideoDetail video={this.props.detailVideo}/>
                        <VideoList video_list={this.props.videos}/>
                    </Row>
                </Container>
            </div>
        )
    }
}
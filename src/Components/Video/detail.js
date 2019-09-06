import React, {Component} from 'react';
import {Col} from 'reactstrap';

export default class VideoDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col md={6}>
                {this.props.video && (
                    <iframe title={'test'} width="560" height="315" src={"https://www.youtube.com/embed/" + this.props.video.id.videoId + "/"}
                        frameBorder="0"
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                )}
            </Col>
        )
    }
}
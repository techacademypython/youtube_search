import React, {Component} from 'react';
import {Col, Row, ListGroup, ListGroupItem} from 'reactstrap';

export default class VideoList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col md={4}>
                <ListGroup>
                    {this.props.video_list && this.props.video_list.map((item, index) => {
                        return (
                            <ListGroupItem key={item.etag}>
                                <Row>
                                    <Col md={6}>
                                        <img className={'img'} src={item.snippet.thumbnails.high.url} alt="video"/>
                                    </Col>
                                    <Col md={6}>
                                        <p>{item.snippet.title}</p>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        )
                    })}

                </ListGroup>
            </Col>
        )
    }
}
import React, {Component} from 'react';
import './search.css';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={'mt-3'}>
                <input onChange={(e) => {this.props.onChange(e.target.value)}} className={'search'} type={'form-control'}/>
            </div>
        )
    }
}
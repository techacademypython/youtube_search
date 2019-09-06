import React, {Component} from 'react';
import SearchBar from './Components/SearchBar';
import Videos from './Components/Video';
import YoutubeSearch from 'youtube-api-search';
import './App.css';

const new_token = "AIzaSyDCoSSyA0PiepNKab5QgAuAKzvMwl-Hcs8";

class App extends Component {

    state = {
        videos: [],
        detail: null
    }

    searchYoutube = (term) => {
        YoutubeSearch({
            key: new_token,
            term: term
        }, (videos) => {
            this.setState({
                videos: videos,
                detail: videos[0]
            });
        })
    };


    render() {
        return (
            <div className="App">
                <SearchBar onChange={this.searchYoutube}/>
                <Videos videos={this.state.videos} detailVideo={this.state.detail} />
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class App extends Component {

    constructor(props) {
        super(props);
        const params = this.getHashParams();
        const token = params.access_token;
        if (token) {
            spotifyApi.setAccessToken(token);
        }

        this.state = {
            loggedIn: token ? true : false,
            nowPlaying: {name: 'Not Checked', albumArt: '', artist: 'Unknown'}
        }


    }

    getHashParams = () => {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);

        }
        return hashParams;
    }


    getNowPlaying=()=> {
        spotifyApi.getMyCurrentPlaybackState()
            .then((res) => {
                console.log('res', res);

                this.setState({
                    nowPlaying: {
                        name: res.item.name,
                        albumArt: res.item.album.images[0].url,
                        artist: res.item.artists[0].name
                    }
                })

            })
    }


    render() {

        return (
            <div className='App'>
                <a href='http://localhost:8888'> Login to Spotify </a>
                <div>
                    Now Playing: {this.state.nowPlaying.name} by: {this.state.nowPlaying.artist}
                </div>
                <div>
                    <img src={this.state.nowPlaying.albumArt} style={{height: 150}}/>
                </div>
                { this.state.loggedIn &&
                <button onClick={this.getNowPlaying}>
                    Check Now Playing
                </button>
                }
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import axios from "axios/index";
import {Link} from "react-router-dom";
import Header from '../component/Header';
import EpisodeVideoList from "../component/EpisodeVideoList";
import WebtoonInfo from "../component/WebtoonInfo";
import Footer from '../component/Footer';
import { SmsOutlined } from '@material-ui/icons';

class Viewer extends Component{
    constructor(props){
        super(props)

        this.state = {
            episodeId : parseInt(props.match.params.episodeId, 10),
            episode : {},
            episodeList : [] //에피소드 리스트
        };
    }

    componentDidMount(){
        this._getEpisodeList2();
        this._getEpisodeList();
    }

    _getEpisodeList(){
        const apiUrl = '/dummy/episode_list.json';

        axios.get(apiUrl)
            .then(data => {
                this.setState({
                    episode : data.data.webtoonEpisodes.find(episode => (
                        episode.id === this.state.episodeId
                    ))
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

        _getEpisodeList2(){
        const apiUrl = '/dummy/episode_video_list.json';

        axios.get(apiUrl)
            .then(data => {
                //웹툰ID가 일치하는 에피소들만 state.episodeList에 저장
                this.setState({
                    episodeList : data.data.webtoonEpisodes.filter(episode => (
                        episode.epiid === 13
                    ))
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        const episode = this.state.episode;
        return (
            <div className="wrap_viewer">
            <Header/>
            { episode.id ? (
                <div>
                    <div className="wrap_images">
                        { episode.images.map((img, index) => (
                            <video key={index} src={img} controls></video>
                        )) }
                    </div>
                    <div className="top_viewer">
                        <Link to={`/webtoon/${episode.webtoonId}`} className="btn_close">{episode.epiid}</Link>
                        <p>
                            {episode.title+" "}
                            {episode.dateCreated}
                        </p>
                    </div>
                    <div className='comment_input'>
                        <img src="https://thumbnail.laftel.net/profiles/default/ddad1788-ad54-4aad-81fb-f3c96ed082ed.jpg" alt="" className='profile_commt' />
                        <textarea placeholder="댓글을 남겨보세요." maxlength="1000" className='input_commt'></textarea>
                        <div className='comment_list'>
                            <SmsOutlined className='commticon'/><p className='commt_count'>{"댓글 " + "0"}</p>
                        </div>
                        <p className='noncommt'>댓글이 없습니다</p>
                    </div>
                </div>
            ) : (
                <span>LOADING...</span>
            ) }
            <Footer/>
            </div>
        )
    }
}

export default Viewer;
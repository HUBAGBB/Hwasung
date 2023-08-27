import React, { Component } from 'react';
import Header from "../component/Header";
import Gnb from "../component/Gnb";
import Footer from "../component/Footer";
import axios from "axios";
import WebtoonInfo from "../component/WebtoonInfo";
import EpisodeList from "../component/EpisodeList";
import { AccordionSummary } from '@material-ui/core';
import { Bookmark, PlayArrow, Share } from '@material-ui/icons';
import {Link} from "react-router-dom";

class WebtoonHome extends Component{
    constructor(props){
        super(props);

        this.state = {
            webtoonId : parseInt(props.match.params.webtoonId, 10), // webtoonId를 얻어서 숫자로 변환
            webtoon : {}, //웹툰 상세 객체
            episodeList : [] //에피소드 리스트
        };
    }

    componentDidMount(){
        this._getWebtoon();
        this._getEpisodeList();
    }

    _getWebtoon(){
        const apiUrl = '/dummy/webtoon_detail.json';

        axios.get(apiUrl)
            .then(data => {
                //웹툰들 중 ID가 일치하는 웹툰을 state.webtoon에 저장
                this.setState({
                    webtoon : data.data.webtoons.find(w => (
                        w.id === this.state.webtoonId
                    ))
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    

    _getEpisodeList(){
        const apiUrl = '/dummy/episode_list.json';

        axios.get(apiUrl)
            .then(data => {
                //웹툰ID가 일치하는 에피소들만 state.episodeList에 저장
                this.setState({
                    episodeList : data.data.webtoonEpisodes.filter(episode => (
                        episode.webtoonId === this.state.webtoonId
                    ))
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        return (
            <div>
                <Header />

                { this.state.webtoon.id ? (
                    <WebtoonInfo webtoon={this.state.webtoon} />
                ) : (
                    <span>LOADING...</span>
                ) }
                <div>
                    <ul className='controlUpNav'>
                        <li>
                            <PlayArrow className='playicon'/>
                            1화부터 보기
                        </li>
                        <li>
                            <Bookmark className='bookmarkicon'/>
                            북마크 하기
                        </li>
                        <li>
                            <Share className='shareicon'/>
                            공유하기
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='controlNav'>
                        <li className='controlNav-active'>
                        회차 정보
                        </li>
                        <li>
                        작품 정보
                        </li>
                        <li>
                        관련 정보
                        </li>
                    </ul>
                </div>

                { this.state.episodeList.length > 0 ? (
                    <EpisodeList episodes={this.state.episodeList} />
                ) : (
                    <h1 className='nonEpisode'><img className='nonEpisodeimg' src="https://web-prod.laftel.net/3.4.7/assets/puming_404.1d094b8a.webp" alt="" />업로드 된 에피소드가 없습니다!</h1>
                ) }

                <Footer />
            </div>
        )
    }
}

export default WebtoonHome;
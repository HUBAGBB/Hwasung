import React from 'react';
import {Link} from "react-router-dom";

const EpisodeList = (props) => {
    return (
        <ul className="list_webtoon2 list_episode2">
            { props.episodes.map((episode, index) => (
                <li key={index}>
                    <Link to={`/viewer/${episode.id}`} className="link_webtoon2">
                        <img src={episode.thumbnailImage.url} className="img_webtoon2" alt={episode.title} />
                        <div className="info_webtoon2">
                            <strong className="tit_webtoon2">
                                {episode.title}
                            </strong>
                            <p className='title_episode'>
                                {episode.dateCreated}
                            </p>
                        </div>
                    </Link>
                </li>
            )) }
        </ul>
    )
}

export default EpisodeList;
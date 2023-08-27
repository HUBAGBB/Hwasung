import React from 'react';
import {Link} from "react-router-dom";

const WebtoonList = (props) => {
    return (
        <div className="list_webtoon">
            { props.list.map((webtoon, index) => (
                    <Link to={`/webtoon/${webtoon.id}`} key={index} className="link_webtoon">
                        <img src={webtoon.thumbnail} className="img_webtoon" alt={webtoon.title} />
                        <div className="info_webtoon">
                            <p className="tit_webtoon">
                                {webtoon.title}
                            </p>
                        </div>
                    </Link>
            )) }
        </div>
    )
}

export default WebtoonList;
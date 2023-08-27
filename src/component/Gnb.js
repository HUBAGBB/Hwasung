import React from 'react';
import {Link} from "react-router-dom";

const Gnb = (props) => (
    <ul className="gnb2">
        <li className="gnb">
            <Link to="/?day=mon" className={ props.day === 'mon' ? 'tab_day on' : 'tab_day' }>월</Link>
        </li>
        <li className="gnb">
            <Link to="/?day=tue" className={ props.day === 'tue' ? 'tab_day on' : 'tab_day' }>화</Link>
        </li>
        <li className="gnb">
            <Link to="/?day=wed" className={ props.day === 'wed' ? 'tab_day on' : 'tab_day' }>수</Link>
        </li>
        <li className="gnb">
            <Link to="/?day=tur" className={ props.day === 'tur' ? 'tab_day on' : 'tab_day' }>목</Link>
        </li>
        <li className="gnb">
            <Link to="/?day=fri" className={ props.day === 'fri' ? 'tab_day on' : 'tab_day' }>금</Link>
        </li>
        <li className="gnb">
            <Link to="/?day=satr" className={ props.day === 'satr' ? 'tab_day on' : 'tab_day' }>토</Link>
        </li>
        <li className="gnb">
            <Link to="/?day=sun" className={ props.day === 'sun' ? 'tab_day on' : 'tab_day' }>일</Link>
        </li>
    </ul>
)

export default Gnb;
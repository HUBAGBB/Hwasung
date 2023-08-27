import { Search, Notifications, ExpandMore } from '@material-ui/icons';
import React from 'react';
import { useEffect, useState } from 'react'
const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://i.imgur.com/aT6r755.png" alt=""/>
                <span>태그검색</span>
                <span>요일별 신작</span>
                <span>테마추천</span>
                <span>멤버십</span>
            </div>
            <div className="right">
                <Search/>
                <Notifications/>
                <img src="https://thumbnail.laftel.net/profiles/default/ddad1788-ad54-4aad-81fb-f3c96ed082ed.jpg" alt="" />
                <div className="profile">
                    <ExpandMore/>
                    <div className="options">
                        <span>로그인</span>
                        <span>설정</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Header
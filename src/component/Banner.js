import React from 'react';
import bannerimg from "./bannver.png"
import adovideo from "./ado.mp4"
const Banner = () => {

return (
    <div>
        {/*<video className='banner' mute autoPlay loop>
            <source src={adovideo} type="video/mp4"/>
        </video>*/}
        <img src={bannerimg} alt="" width={1874} height={800} className='banner'/>
    </div>
)
}

export default Banner
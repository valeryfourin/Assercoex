import React from 'react';
import '../../styles/home/SideImage.scss';

const SideImage = () => {
    return (
        <div className="side-image-container" id="side-image-container" >
            <div className="side-image hide-banner-img-on-mobile" style={{backgroundImage: 'url(../images/general/rose-bud.png)'}}/>
        </div>
    );
};

export default SideImage;
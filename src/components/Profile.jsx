import React, { useState } from 'react';
import './styles/Profile.css'

export const UserProfileCard = () => {
    const handleFollow = () => {
        window.open('https://www.linkedin.com/in/piyush-verma-883a26248/', '_blank');
    };

    return (
        <div id="card">
            <div id="ds-top"></div>
            <div id="avatar-holder">
                <img src="https://avatars.githubusercontent.com/u/112806418?s=400&u=fda9f3528bd812065477053c533f7db655e43097&v=4" alt="Piyush" />
            </div>
            <div id="name">
                <a href="https://github.com/piyushvermaa" target="_blank">Piyush Soni</a>
            </div>
            <div id="button">
                <button id="btn" onClick={handleFollow}>Follow <i className="fas fa-user-plus"></i></button>
            </div>
        </div>
    );
};

const Profile = () => {
    const [clicked, setClicked] = useState(0);
    const [currentFollowers, setCurrentFollowers] = useState(90);

    const follow = () => {
        setClicked(clicked + 1);

        if (clicked % 2 === 0) {
            setCurrentFollowers(currentFollowers - 1);
        } else {
            setCurrentFollowers(currentFollowers + 1);
        }
    };

    return <UserProfileCard />;
};

export default Profile;

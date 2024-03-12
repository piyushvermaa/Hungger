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
            <div className="ds-info">
          <div className="ds pens">
            <h6 title="Number of pens created by the user">Followers <i className="fas fa-edit"></i></h6>
            <p>700+</p>
          </div>
          <div className="ds projects">
            <h6 title="Number of projects created by the user">Projects <i className="fas fa-project-diagram"></i></h6>
            <p>5</p>
          </div>
          <div className="ds posts">
            <h6 title="Number of posts">Posts <i className="fas fa-comments"></i></h6>
            <p>16</p>
          </div>
        </div>
        <div className="ds-skill">
          <h6>Skill <i className="fa fa-code" aria-hidden="true"></i></h6>
          <div className="skill html">
            <h6><i className="fab fa-html5"></i> React </h6>
            <div className="bar bar-html">
              <p>95%</p>
            </div>
          </div>
          <div className="skill css">
            <h6><i className="fab fa-css3-alt"></i> Tailwind </h6>
            <div className="bar bar-css">
              <p>90%</p>
            </div>
          </div>
          <div className="skill javascript">
            <h6><i className="fab fa-js"></i> JavaScript </h6>
            <div className="bar bar-js">
              <p>75%</p>
            </div>
          </div>
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

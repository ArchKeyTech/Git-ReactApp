import React from "react";
import "./UserInfo.css";
import * as FaIcons from "react-icons/fa";
import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";

//UserInfo component to display details about each user (name, bio, location, twitter)
const UserInfo = ({ userDetails, chosenVcs }) => {
  return (
    <>
      <div className="top-container">
        <div className="row">
          {/**button to visit the user's git profile */}

          <span>
            <a
              href={
                "html_url" in userDetails[chosenVcs]
                  ? userDetails[chosenVcs].html_url
                  : userDetails[chosenVcs].web_url
              }
            >
              <button className="profile-btn">Visit Profile</button>
            </a>
          </span>
          <div className="profile-pic-div">
            <img
              alt="profile pic"
              className="profile-pic"
              src={userDetails[chosenVcs].avatar_url}
            ></img>
          </div>

          {/**icons for username, bio, location and twitter address */}

          <div className="user-details">
            <ul className="user-detail-list">
              <li>
                <span>
                  <span className="icons">
                    {" "}
                    <FaIcons.FaUserAstronaut />{" "}
                  </span>
                  &emsp;
                  {"login" in userDetails[chosenVcs]
                    ? userDetails[chosenVcs].login
                    : userDetails[chosenVcs].username}
                </span>
              </li>
              <li>
                <span>
                  <span className="icons">
                    <BsIcons.BsFillChatRightQuoteFill />
                  </span>
                  &emsp; {userDetails[chosenVcs].bio}
                </span>
              </li>
              <li>
                <span>
                  <span className="icons">
                    <ImIcons.ImLocation2 />
                  </span>
                  &emsp; {userDetails[chosenVcs].location}
                </span>
              </li>
              <li>
                <span>
                  <span className="icons">
                    <FaIcons.FaTwitter />
                  </span>
                  &emsp;
                  {"twitter" in userDetails[chosenVcs]
                    ? userDetails[chosenVcs].twitter
                    : userDetails[chosenVcs].twitter_username}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="lower-container">
        <p className="follower">
          Followers: {userDetails[chosenVcs].followers}
        </p>
        <p className="following">
          Following: {userDetails[chosenVcs].following}
        </p>
      </div>
    </>
  );
};

export default UserInfo;

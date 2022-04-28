import React, { useState, useRef, useEffect } from "react";
import Repos from "./Repos";
import UserInfo from "./UserInfo";
import "./UserInfo.css";
import Loading from "./Loading";

/**
 * GitProfile class to act as component
 */
const GitProfile = ({ userDetails, chosenVcs }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [repoContent, setRepoContent] = useState(null);

  const prevChosenVcsRef = useRef();

  useEffect(() => {
    //function to fetchthe chosen VCS repo for a user
    const fetchRepos = async (nameGitHub, nameGitLab) => {
      /**
       * if chosenVCS = 0 (github), we fetch github repo, set isLoaded to true to indicate we got a response,
       * store the response to repoContent
       */
      if (chosenVcs === 0) {
        try {
          const response = await fetch(`/github/repo/${nameGitHub}`);
          const data = await response.json();

          setRepoContent(data);
          setIsLoaded(true);
        } catch (e) {
          console.log(e);
        }

        /**
         * if chosenVCS = 1 (gitlab), we fetch gitlab repo, set isLoaded to true to indicate we got a response,
         * store the response to repoContent
         */
      } else if (chosenVcs === 1) {
        try {
          const response = await fetch(`/gitlab/repo/${nameGitLab}`);
          const data = await response.json();
          setRepoContent(data);
          setIsLoaded(true);
        } catch (e) {
          console.log(e);
        }
      }
    };
    //the name of user on github
    const nameGitHub = userDetails[0].login;
    //name of user on gitlab
    const nameGitLab = userDetails[1].username;
    if (chosenVcs !== prevChosenVcsRef.current) {
      //set isLoaded to false
      setIsLoaded(false);
      //fetch repos based on the new chosen VCS
      fetchRepos(nameGitHub, nameGitLab);
    }
    fetchRepos(nameGitHub, nameGitLab);
  }, [userDetails, chosenVcs]);

  /**
   * if not loaded yet, indicate that the repos are being fetched with message and gif
   */
  if (!isLoaded) {
    return (
      <div className="profile-div ">
        <UserInfo userDetails={userDetails} chosenVcs={chosenVcs} />
        <div className="loading-block">
          <h2>Repos on the way...</h2>
          <Loading />
        </div>
      </div>
    );
    /**
     * else mount the Repos component to display the repos contents
     */
  } else {
    return (
      <div className="profile-div">
        <UserInfo userDetails={userDetails} chosenVcs={chosenVcs} />
        <div className="repos-main-title">
          <h2 style={{ marginBottom: "20px" }}>Repositories</h2>
        </div>
        <div>
          <Repos repoContent={repoContent} />
        </div>
      </div>
    );
  }
};

export default GitProfile;

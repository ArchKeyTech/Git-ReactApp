import React from "react";
import Repos from "./Repos";
import UserInfo from "./UserInfo";
import loadingGif from "../load.gif";
import "./UserInfo.css";

/**
 * GitProfile class to act as component
 */
class GitProfile extends React.Component {
  constructor(props) {
    super(props);

    //states
    this.state = {
      //check if data is loaded
      isLoaded: false,
      //stores repo details from response
      repoContent: null,
    };
  }

  //function to fetchthe chosen VCS repo for a user
  getRepos(nameGitHub, nameGitLab) {
    /**
     * if chosenVCS = 0 (github), we fetch github repo, set isLoaded to true to indicate we got a response,
     * store the response to repoContent
     */
    if (this.props.chosenVcs === 0) {
      console.log("its on hub");
      fetch(`/github/repo/${nameGitHub}`)
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            isLoaded: true,
            repoContent: result,
          });
        })
        .catch((error) => {
          console.log(error);
        });

      /**
       * if chosenVCS = 1 (gitlab), we fetch gitlab repo, set isLoaded to true to indicate we got a response,
       * store the response to repoContent
       */
    } else if (this.props.chosenVcs === 1) {
      console.log("its on lab");
      fetch(`/gitlab/repo/${nameGitLab}`)
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            isLoaded: true,
            repoContent: result,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  //action to run when component is mounted
  componentDidMount() {
    //the name of user on github
    const nameGitHub = this.props.userDetails[0].login;
    //name of user on gitlab
    const nameGitLab = this.props.userDetails[1].username;

    //fetch the repos when component is mounted
    this.getRepos(nameGitHub, nameGitLab);
  }

  //action to run when a component prop/state is updated
  componentDidUpdate(prevProps) {
    //the name of user on github
    const nameGitHub = this.props.userDetails[0].login;
    //name of user on gitlab
    const nameGitLab = this.props.userDetails[1].username;

    //if the new chosen VCS is different from the previous
    if (this.props.chosenVcs !== prevProps.chosenVcs) {
      //set isLoaded to false
      this.setState({
        isLoaded: false,
      });
      //fetch repos based on the new chosen VCS
      this.getRepos(nameGitHub, nameGitLab);
    }
  }

  render() {
    //state needed for render
    const { isLoaded, repoContent } = this.state;
    //states passed down as props
    const { userDetails, chosenVcs } = this.props;

    /**
     * if not loaded yet, indicate that the repos are being fetched with message and gif
     */
    if (!isLoaded) {
      return (
        <div className="profile-div">
          <UserInfo userDetails={userDetails} chosenVcs={chosenVcs} />
          <div className="loading-block">
            <h2>Repos on the way...</h2>
            <img
              className="loading-img"
              src={loadingGif}
              alt="loading gif"
            ></img>
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
            <h2>Repositories</h2>
          </div>
          <div>
            <Repos repoContent={repoContent} />
          </div>
        </div>
      );
    }
  }
}

export default GitProfile;

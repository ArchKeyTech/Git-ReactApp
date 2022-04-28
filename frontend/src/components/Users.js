import React, { useEffect } from "react";
import "./Users.css";

/**
 * Users function to display the names of users found on each VCS (github and gitlab)
 * @param {*} props
 * @returns
 */
const Users = ({ userDetails, setVcs, chosenVcs }) => {
  //passing states down as props

  //array to hold our two VCS titles
  const vcsOptions = ["GitHub", "GitLab"];

  //option variable for the 2 VCS options
  let option = 0;

  // useEffect(() => {}, [userDetails]);

  //iterate through the user details from the API's response
  let usersResult = userDetails.map((user, key) => {
    //the user block divs for a VCS
    let userBlock;

    //if we are currently on the first index of vcsOptions we display GitHub user
    if (vcsOptions[option] === "GitHub") {
      console.log(option);
      /**
       * each user block holds the found user's name as well as the VCS's name on top
       * depending on the div class, the user's details will be displayed or hidden
       *
       * we also add the setVcs function as an onClick event trigger which tells the program which VCS
       * has been chosen to display user details
       */
      userBlock = (
        <div
          key={key}
          className={
            option === chosenVcs
              ? "user-block left display github "
              : "user-block left github"
          }
          onClick={(ev) => setVcs(ev)}
        >
          <h3 className="vcs-title github">GitHub</h3>
          {"error" in user ? (
            <p>{user.error}</p>
          ) : (
            <p className="user-name github">Account: {user.login}</p>
          )}
        </div>
      );
      /**
       * same steps as for the GitHub user above
       */
    } else if (vcsOptions[option] === "GitLab") {
      userBlock = (
        <div
          key={key}
          className={
            option === chosenVcs
              ? "user-block right display gitlab"
              : "user-block right gitlab"
          }
          onClick={(ev) => setVcs(ev)}
        >
          <h3 className="vcs-title gitlab">GitLab</h3>
          {"error" in user ? (
            <p>{user.error}</p>
          ) : (
            <p className="user-name gitlab">Account: {user.username}</p>
          )}
        </div>
      );
    }

    //increment the option variable
    option++;
    //return each userBlock for a VCS
    return userBlock;
  });

  //function to toggle off the display class of VCS when another VCS's user is clicked
  const toggleResult = (childClass) => {
    //find the class that is active (displayed)
    let activeClass = document.getElementsByClassName("display");
    //if there is user content being displayed we change the class to a blank to hide it
    if (activeClass.length > 0) {
      activeClass[0].className = "user-block";
      childClass.parentNode.className += " display";
    }
    //since this function is passed to an event listener, the parentnode of the element clicked will be switched to 'display'
  };

  //the class of the elements showing the user names per VCS
  let classToShow = document.getElementsByClassName("user-name");
  //iterate through each class element
  for (let i = 0; i < classToShow.length; i++) {
    //attach an event listener to toggle off the display of the currently active element when new one is clicked
    classToShow[i].addEventListener("click", toggleResult(classToShow[i]));
  }

  //return the the users found
  return <div className="users-row">{usersResult}</div>;
};

export default Users;

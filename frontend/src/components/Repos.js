import React from "react";
import "./Repos.css";

//function to display the repositories for a user in a VCS
function Repos({ repoContent }) {
  //passing the repoContent state as props

  const scrollingFunction = () => {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      reveals[i].classList.add("active");
    }
  };
  window.addEventListener("scroll", scrollingFunction);

  /**
   * this displays the repo content incase user has repos.
   * content includes title, description, date and commits
   */
  if (repoContent[0] === undefined) {
    return <div className="noRepo">No repository exists for this user</div>;
  } else if ("error" in repoContent[0]) {
    return <div>{repoContent[0].error}</div>;
  } else {
    return repoContent.map((repo, key) => {
      return (
        <div key={key}>
          <div className="repo-div">
            <div className="repo-title">
              <p className="repo-name reveal">{repo.repoName}</p>
              <p>
                {" "}
                <span className="repo-description reveal">
                  {" "}
                  {repo.repoDesc}{" "}
                </span>
              </p>
              <div className="repo-date reveal">
                <p>Created on: {repo.repoBirth}</p>
              </div>
            </div>

            <div className="repo-commit-title reveal">
              <p>Commit Feed</p>
            </div>

            <div className="commit-msg-div reveal">
              {repo.commitMsg !== undefined ? (
                <ul>
                  {repo.commitMsg.map((msg, key) => (
                    <li className="commit-msg reveal" key={key}>
                      {msg}
                    </li>
                  ))}
                </ul>
              ) : (
                <div>Sorry, access timeout. Please try again later</div>
              )}
            </div>
          </div>
        </div>
      );
    });
  }
}

export default Repos;

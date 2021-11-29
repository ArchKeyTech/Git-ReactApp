import React from "react";
import "./Repos.css";

//function to display the repositories for a user in a VCS
function Repos(props) {
  //passing the repoContent state as props
  const { repoContent } = props;

  /**
   * this displays the repo content incase user has repos.
   * content includes title, description, date and commits
   */
  if ("error" in repoContent[0]) {
    return <div>{repoContent[0].error}</div>;
  } else {
    return repoContent.map((repo, key) => {
      return (
        <div key={key}>
          <div className="repo-div">
            <div className="repo-title">
              <p className="repo-name">{repo.repoName}</p>
              <p>
                {" "}
                <span className="repo-description"> {repo.repoDesc} </span>
              </p>
              <div className="repo-date">
                <p>Created on: {repo.repoBirth}</p>
              </div>
            </div>

            <div className="repo-commit-title">
              <p>Commit Feed</p>
            </div>

            <div className="commit-msg-div">
              <ul>
                {repo.commitMsg.map((msg, key) => (
                  <li className="commit-msg" key={key}>
                    {msg}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    });
  }

  //returns either 'no repo' text or the repo content
  //return <div>{"error" in repoContent[0] ? repoContent[0].error : repos}</div>;
}

export default Repos;

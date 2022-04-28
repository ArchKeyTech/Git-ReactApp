/**
 * Module dependencies
 */

const express = require("express");
const helmet = require("helmet");
const path = require("path");

const app = express();
app.use(helmet());

const port = process.env.PORT || 4000;
require("isomorphic-fetch");

const gitlab_token = "glpat-xyRszvf5c3qGuiK4vJy4";

/*the structure of our queries will be as follow:
 --> user-details 
 ----> user-repos
 --------> user-repos-commits
 */

//GETTING THE USER DETAILS FOR A REQUESTED USERNAME FOR EACH OF THE VCS
app.get("/user/:username", async (req, resp) => {
  //the username's parameter for account owner
  let userName = req.params.username;

  //storing a user's detail in array (id, profile pic, bio, number of repos etc)
  let userDetails = [];
  let githubUserContent;
  let gitlabUserContent;

  //TRY AND CATCH BLOCK FOR FETCHING THE GITHUB'S USERS DETAILS
  try {
    let githubUserResponse = await fetch(
      `https://api.github.com/users/${userName}`
    );

    //storing the user's content json
    githubUserContent = await githubUserResponse.json();

    //check if our response ok status is false (meaning there's an error. this is how github's api handles non-existent usernames)
    if (!githubUserResponse.ok) {
      //throw new Error(`HTTP error! status: ${githubUserResponse.status}`)
      throw new Error(`User does not exist`);

      //else push the content to userDetails
    } else {
      userDetails.push(githubUserContent);
    }

    //catch block to handle error
  } catch (err) {
    //push the error message to userDetails
    userDetails.push({ error: err.message });
  }

  //TRY AND CATCH BLOCK FOR FETCHING GITLAB'S USERS DETAILS
  try {
    let gitlabUserResponse = await fetch(
      `https://gitlab.com/api/v4/users?username=${userName}`
    );

    gitlabUserContent = await gitlabUserResponse.json();

    //check if the content is empty (meaning no names found. this is how gitlab api handles non-existent usernames)
    if (gitlabUserContent.length === 0) {
      //throw error
      throw new Error("User does not exist");

      //else we extract that user's id to fetch other details about them
    } else {
      let gitlabUserId = gitlabUserContent[0].id;

      //this fetches the full user content thanks to the ID
      let gitlabUserInfo = await fetch(
        `https://gitlab.com/api/v4/users/${gitlabUserId}?access_token=${gitlab_token}`
      );

      //store the new user content response in json
      gitlabUserContent = await gitlabUserInfo.json();
      //resp.send(gitlabUserContent);

      //push the new user content response in json
      userDetails.push(gitlabUserContent);
    }
    //if error is caught, push the error message to userDetails
  } catch (err) {
    //push the error message to userDetails
    userDetails.push({ error: err.message });
  }
  //send userDetails as response
  resp.send(userDetails);
});

//GETTING GITHUB REPO INFORMATION FOR A GIVEN USER ACCOUNT
app.get("/github/repo/:username", async (req, resp) => {
  //the username param for repo's owner
  let userName = req.params.username;

  //array to store each of the 5 repo's details (details like: name, description, creation-date etc)
  let repoDetails = [];
  const reposPerPage = 5;

  //variable object to store all the repos
  let reposObj;

  try {
    //fetching 5 repos from the specified user
    let repoResponse = await fetch(
      `https://api.github.com/users/${userName}/repos?per_page=${reposPerPage}&sort=create`
    );

    //check if our response ok status is false (meaning there's an error)
    if (!repoResponse.ok) {
      throw new Error(
        `No repository exists for this user ${repoResponse.statusText}`
      );

      //else if no error
    } else {
      //store the json repo response
      reposObj = await repoResponse.json();

      //looping through each of the 5 repos
      for (let i = 0; i < reposObj.length; i++) {
        //variable for commits of a repo
        let repoCommits;

        //fetching the 5 commits for each repo
        let commitResponse = await fetch(
          `https://api.github.com/repos/${userName}/${reposObj[i].name}/commits?per_page=5`
        );

        //storing the repo's 5 commits json
        repoCommits = await commitResponse.json();

        // object to store content of each repo fetched
        let repoContent = {};
        //repo's name property
        repoContent["repoName"] = reposObj[i].name;
        //repo's last commit date property
        repoContent["repoLastCommit"] =
          repoCommits[0].commit.author.date.substr(0, 10);
        //repo creation date property
        repoContent["repoBirth"] = reposObj[i].created_at.substr(0, 10);
        //repo description property
        repoContent["repoDesc"] = reposObj[i].description;
        //repo's commit message property (all commits messages per repo (5 commits, so 5 messages))
        repoContent["commitMsg"] = [];

        //nested for loop to iterate through the 5 commits for a given repo
        for (let j = 0; j < repoCommits.length; j++) {
          //add each of the 5 commits messages to the commitMsg array in repoContent
          repoContent.commitMsg.push(repoCommits[j].commit.message);
        }

        //finally add each repo content (5 repos) to the repoDetails array
        repoDetails.push(repoContent);
      }
    }

    //catch block to handle error
  } catch (err) {
    //push the error message to repoDetails
    repoDetails.push({ error: err.message });
  }
  //send repoDetails as response
  resp.send(repoDetails);
});

//GETTING GITLAB REPO INFORMATION FOR A GIVEN USER ACCOUNT
app.get("/gitlab/repo/:username", async (req, resp) => {
  //the username param for repo's owner
  let userName = req.params.username;

  //array to store each of the 5 repo's details (details like: name, description, creation-date etc)
  let repoDetails = [];
  const reposPerPage = 5;

  //variable object to store all the repos
  let reposObj;

  try {
    //fetching 5 repos from the specified user
    let repoResponse = await fetch(
      `https://gitlab.com/api/v4/users/${userName}/projects?per_page=${reposPerPage}`
    );

    //store the json repo response
    reposObj = await repoResponse.json();
    //check if our response ok status is false (meaning there's an error)
    if (!repoResponse.ok) {
      throw new Error(`User does not exist ${repoResponse.statusText}`);

      //else if no error
    } else if (reposObj.length === 0) {
      //throw error
      throw new Error("No repository exists for this user");
    } else {
      //looping through each of the 5 repos
      for (let i = 0; i < reposObj.length; i++) {
        //variable for commits of a repo
        let repoCommits;

        //fetching the 5 commits for each repo
        let commitResponse = await fetch(
          `https://gitlab.com/api/v4/projects/${reposObj[i].id}/repository/commits?per_page=5`
        );

        //storing the repo's 5 commits json
        repoCommits = await commitResponse.json();

        // object to store content of each repo fetched
        let repoContent = {};
        //repo's name property
        repoContent["repoName"] = reposObj[i].name;
        //repo's last commit date property
        repoContent["repoLastCommit"] =
          //check if repo has commits
          repoCommits.length > 0 ? repoCommits[0].created_at.substr(0, 10) : "";
        repoContent["repoBirth"] = reposObj[i].created_at.substr(0, 10);
        repoContent["repoDesc"] = reposObj[i].description;
        repoContent["commitMsg"] = [];

        //if repo has no commit
        if (repoCommits.length === 0) {
          //add a blank to the commit message section
          repoContent.commitMsg.push("");
          repoDetails.push(repoContent);

          //else if there is a commit
        } else {
          //nested for loop to iterate through the 5 commits for a given repo
          for (let j = 0; j < repoCommits.length; j++) {
            //add each of the 5 commits messages to the commitMsg array in repoContent
            repoContent.commitMsg.push(repoCommits[j].message);
          }

          //finally add each repo content (5 repos) to the repoDetails array
          repoDetails.push(repoContent);
        }
      }
    }

    //catch block to handle error
  } catch (err) {
    //push the error message to repoDetails
    repoDetails.push({ error: err.message });
  }
  //send repoDetails as response
  resp.send(repoDetails);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "./frontend/build")));
}
app.listen(port, () => console.log(`listening on ${port}`));

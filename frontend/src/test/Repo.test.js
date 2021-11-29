import React from "react";
import renderer from "react-test-renderer";
import Repos from "../components/Repos";

// repo sample to mimic actual repo response
const reposSample = [
  {
    repoName: "name1",
    repoDesc: "description1",
    createdOn: "dd-mm-yy",
    commitMsg: ["msg1", "msg2", "msg3", "msg4", "msg5"],
  },
  {
    repoName: "name2",
    repoDesc: "description2",
    createdOn: "dd-mm-yy",
    commitMsg: ["msg1", "msg2", "msg3", "msg4", "msg5"],
  },
  {
    repoName: "name3",
    repoDesc: "description3",
    createdOn: "dd-mm-yy",
    commitMsg: ["msg1", "msg2", "msg3", "msg4", "msg5"],
  },
  {
    repoName: "name4",
    repoDesc: "description4",
    createdOn: "dd-mm-yy",
    commitMsg: ["msg1", "msg2", "msg3", "msg4", "msg5"],
  },
  {
    repoName: "name5",
    repoDesc: "description5",
    createdOn: "dd-mm-yy",
    commitMsg: ["msg1", "msg2", "msg3", "msg4", "msg5"],
  },
];

// Empty repo sample to mimic when user has no repository
const reposEmptySample = [{ error: "User has no repository" }];

//test for when a complete repo content is returned as response
test("renders repo correctly", () => {
  const tree = renderer.create(<Repos repoContent={reposSample} />).toJSON();
  expect(tree).toMatchSnapshot();
});

//test for when an empty repo content is returned as response
test("renders empty repo correctly", () => {
  const tree = renderer
    .create(<Repos repoContent={reposEmptySample} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

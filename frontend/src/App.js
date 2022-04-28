import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import "./App.css";
import github from "./gitmark.png";
import gitlab from "./gitlab1.png";
import Users from "./components/Users";
import GitProfile from "./components/GitProfile";
import Loading from "./components/Loading";
import ScrollButton from "./ScrollButton";

/**
 * App class to act as main component
 */
const App = () => {
  const [inputName, setInputName] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [chosenVcs, setChosenVcs] = useState(null);
  const [firstLoad, setFirtstLoad] = useState(true);

  //handle function to monitor input value of car ID
  const handleInputChange = (ev) => {
    setInputName(ev.target.value);
  };

  const revealText = () => {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      setTimeout(() => {
        reveals[i].classList.add("active");
      }, 0);
    }
  };
  const revealIcons = () => {
    const reveals = document.querySelectorAll(".revealIcons");

    for (let i = 0; i < reveals.length; i++) {
      setTimeout(() => {
        reveals[i].classList.add("activeIcons");
      }, 0);
    }
  };
  //function to fetch users info
  const fetchUser = async () => {
    try {
      const response = await fetch("/user/" + inputName);
      const data = await response.json();
      setLoading(false);
      setUserDetails(data);
      setIsLoaded(true);
      setFirtstLoad(false);
    } catch (e) {
      console.log(e);
    }
  };

  //handle function for when input form is submitted
  const handleOnSubmit = (ev) => {
    //prevent form from reloading page when submitted
    ev.preventDefault();
    //sets busy loading to true
    setIsLoaded(false);
    setUserDetails(null);
    setChosenVcs(null);
    setLoading(true);

    fetchUser();
  };

  //handle function to set the chosen VCS based on the name clicked on (each name text has an ID attribute, 0 and 1)
  const setVcs = (ev) => {
    if (ev.target.className.includes("github")) {
      setChosenVcs(0);
    } else if (ev.target.className.includes("gitlab")) {
      setChosenVcs(1);
    }
  };

  useEffect(() => {
    revealText();
    revealIcons();
  }, []);

  /**
   * if results haven't loaded yet, we display the search bar and main page
   */
  if (!isLoaded && firstLoad) {
    return (
      <div className="scene">
        <div className="App">
          <div className="heading">
            <h1 className="reveal">
              <i>Git</i>
              <span style={{ color: "rgba(255, 255, 254, 0.644)" }}>
                <i>Book</i>
              </span>
            </h1>
            <div>
              <span>
                <img
                  className="background-img-github revealIcons"
                  src={github}
                  alt="github-logo"
                />
                <img
                  className="background-img-gitlab revealIcons"
                  src={gitlab}
                  alt="gitlab-logo"
                />
              </span>
            </div>
          </div>
          <div className="main-page">
            <div className="search-block reveal">
              <form className="search" onSubmit={handleOnSubmit}>
                <input
                  type="text"
                  required
                  onChange={(ev) => handleInputChange(ev)}
                  name="input"
                  autoComplete="off"
                />
                <button type="submit" className="search-btn">
                  <FaIcons.FaSearch />
                </button>
              </form>
            </div>

            <div className="welcomeDiv reveal">
              <i>
                Connect with <span className="whiteKeyWord">Github </span>
                and <span className="whiteKeyWord">Gitlab</span> coders
              </i>
            </div>

            <div>
              {/**if results are being loaded display the loading animation */}
              {loading ? <Loading /> : null}
            </div>
          </div>
        </div>
        <ScrollButton />
      </div>
    );
  } else if (!isLoaded && !firstLoad) {
    return (
      <div className="scene">
        <div className="App">
          <div className="heading">
            <h1>
              <i>Git</i>
              <span style={{ color: "rgba(255, 255, 254, 0.644)" }}>
                <i>Book</i>
              </span>
            </h1>
            <div>
              <span>
                <img
                  className="background-img-github"
                  src={github}
                  alt="github-logo"
                />
                <img
                  className="background-img-gitlab"
                  src={gitlab}
                  alt="gitlab-logo"
                />
              </span>
            </div>
          </div>
          <div className="main-page">
            <div className="search-block">
              <form className="search" onSubmit={handleOnSubmit}>
                <input
                  type="text"
                  required
                  onChange={(ev) => handleInputChange(ev)}
                  name="input"
                  autoComplete="off"
                />
                <button type="submit" className="search-btn">
                  <FaIcons.FaSearch />
                </button>
              </form>
            </div>

            <div>
              {/**if results are being loaded display the loading animation */}
              {loading ? <Loading /> : null}
            </div>
          </div>
        </div>
        <ScrollButton />
      </div>
    );
    /**
     * else if results are loaded, we display the search bar and mainpage again, with the names found
     * from Users component
     */
  } else {
    return (
      <div className="scene">
        <div className="App">
          <div className="heading">
            <h1>
              <i>Git</i>
              <span style={{ color: "rgba(255, 255, 254, 0.644)" }}>
                <i>Book</i>
              </span>
            </h1>
            <div>
              <span>
                <img
                  className="background-img-github"
                  src={github}
                  alt="github-logo"
                />
                <img
                  className="background-img-gitlab"
                  src={gitlab}
                  alt="gitlab-logo"
                />
              </span>
            </div>
          </div>
          <div className="main-page">
            <div className="search-block">
              <form className="search" onSubmit={handleOnSubmit}>
                <input
                  type="text"
                  required
                  onChange={(ev) => handleInputChange(ev)}
                  name="input"
                />
                <button type="submit" className="search-btn">
                  <FaIcons.FaSearch />
                </button>
              </form>
            </div>

            <Users
              userDetails={userDetails}
              setVcs={setVcs}
              chosenVcs={chosenVcs}
            />
            {/**we mount the GitProfile component only if chosenVCS is 0 or 1 */}
            {chosenVcs === null ? null : (
              <GitProfile userDetails={userDetails} chosenVcs={chosenVcs} />
            )}
          </div>
        </div>
        <ScrollButton />
      </div>
    );
  }
};

export default App;

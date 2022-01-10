import React from "react";
import * as FaIcons from "react-icons/fa";
import "./App.css";
import loadingGif from "./load.gif";
import github from "./github.jpg";
import gitlab from "./gitlab.jpg";
import Users from "./components/Users";
import GitProfile from "./components/GitProfile";

/**
 * App class to act as main component
 */
class App extends React.Component {
  constructor() {
    super();

    //handle function binding
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.getUser = this.getUser.bind(this);
    this.setVcs = this.setVcs.bind(this);

    //states
    this.state = {
      //name inserted for search
      inputName: "",
      //check if data are busy loading
      busyLoading: false,
      //check if data is loaded
      isLoaded: false,
      //response with user results
      userDetails: null,
      //chosen VCS (0 for github, 1 for gitlab)
      chosenVcs: null,
    };
  }

  //handle function to monitor input value of car ID
  handleInputChange(ev) {
    this.setState({
      inputName: ev.target.value,
    });
  }

  //function to fetch users info
  getUser() {
    fetch("https://git-reactapp.herokuapp.com/user/" + this.state.inputName)
      .then((res) => res.json())
      .then((result) => {
        //returns the response
        this.setState({
          //set busy loading to false
          busyLoading: false,
          //is loaded to true (indicates we got a response)
          isLoaded: true,
          //store the response
          userDetails: result,
        });
      })
      //catch errors
      .catch((error) => {
        console.log(error);
      });
  }

  //handle function for when input form is submitted
  handleOnSubmit(ev) {
    //prevent form from reloading page when submitted
    ev.preventDefault();
    //sets busy loading to true
    this.setState({
      busyLoading: true,
      isLoaded: false,
      userDetails: null,
      chosenVcs: null,
    });

    //fetch the user data
    this.getUser();
  }

  //handle function to set the chosen VCS based on the name clicked on (each name text has an ID attribute, 0 and 1)
  setVcs(ev) {
    this.setState({
      chosenVcs: parseInt(ev.target.id),
    });
  }

  render() {
    //states used in render
    const { isLoaded, busyLoading, chosenVcs, userDetails } = this.state;

    /**
     * if results haven't loaded yet, we display the search bar and main page
     */
    if (!isLoaded) {
      return (
        <div className="App">
          <div className="heading">
            <h1>Search Engine</h1>
          </div>
          <div className="main-page">
            <div className="search-block">
              <form
                className="search"
                onSubmit={(ev) => this.handleOnSubmit(ev)}
              >
                <input
                  type="text"
                  required
                  onChange={(ev) => this.handleInputChange(ev)}
                  name="input"
                />
                <button type="submit" className="search-btn">
                  <FaIcons.FaSearch />
                </button>
              </form>
            </div>
            <div>
              <span>
                <img
                  className="background-img"
                  src={github}
                  alt="github-logo"
                />
                <img
                  className="background-img"
                  src={gitlab}
                  alt="gitlab-logo"
                />
              </span>
            </div>

            <div>
              {/**if results are being loaded display the loading animation */}
              {busyLoading ? (
                <img
                  className="loading-img"
                  src={loadingGif}
                  alt="loading gif"
                ></img>
              ) : null}
            </div>
          </div>
        </div>
      );
      /**
       * else if results are loaded, we display the search bar and mainpage again, with the names found
       * from Users component
       */
    } else {
      return (
        <div className="App">
          <div className="heading">
            <h1>Search Engine</h1>
          </div>
          <div className="main-page">
            <div className="search-block">
              <form
                className="search"
                onSubmit={(ev) => this.handleOnSubmit(ev)}
              >
                <input
                  type="text"
                  required
                  onChange={(ev) => this.handleInputChange(ev)}
                  name="input"
                />
                <button type="submit" className="search-btn">
                  <FaIcons.FaSearch />
                </button>
              </form>
            </div>
            <div>
              <span>
                <img
                  className="background-img"
                  src={github}
                  alt="github-logo"
                />
                <img
                  className="background-img"
                  src={gitlab}
                  alt="gitlab-logo"
                />
              </span>
            </div>
            <Users
              userDetails={userDetails}
              setVcs={this.setVcs}
              chosenVcs={chosenVcs}
            />
            {/**we mount the GitProfile component only if chosenVCS is 0 or 1 */}
            {chosenVcs === null ? null : (
              <GitProfile userDetails={userDetails} chosenVcs={chosenVcs} />
            )}
          </div>
        </div>
      );
    }
  }
}

export default App;

# Git-ReactApp
A full-stack app which allows one to search for existing Github or Gitlab users via a search engine.

The app makes calls to the github and gitlab APIs based on the user's input name query, then returns
valid usernames which match the name entered.

Once a username is clicked, the app then displays the user info for that particular account as well
as their repositories info

## Screenshots
### Searching 'ArchKeyTech':
![loading](https://user-images.githubusercontent.com/50621192/165840264-a767ab72-8d13-4e8f-a0b7-7f9fab9751d3.png)

### Found results:
![searchresult](https://user-images.githubusercontent.com/50621192/165840332-8e0f1d0f-636b-4f2e-b800-8d90ef78316a.png)


### User profile:
![profile](https://user-images.githubusercontent.com/50621192/165839810-8529dcf9-25bd-47fe-8d12-734bd80857fe.png)


### Repositories and commits:
![repo](https://user-images.githubusercontent.com/50621192/165840407-9da25f2c-3b0e-4dea-b2c2-532fd9c43146.png)

## How to install the app

Download the ZIP file of the code or Git Clone from your terminal. Then, navigate to the directory of the downloaded file, inside 'Git-ReactApp'. Using your text editor or your terminal, type` npm install`. This will setup the node_modules folder for the backend (make sure you are in the same directory where the package.json file is located). Similarly, navigate to the 'frontend' directory and repeat 'npm install', to setup the node_modules folder for the frontend

## Launching the app

Once the installs are complete, run `npm start` from the 'Git-ReactApp' directory to launch the server, then in a side-tab inside your 'frontend' directory, run `npm start` to launch the react-app in development mode (This will launch the app in the browser with server [http://localhost:3000](http://localhost:3000) )


## Launching via Heroku

Click the link to launch via Heroku - https://git-app-react.herokuapp.com/


## Credit

By [Dan-Samuel Moleka](https://github.com/ArchKeyTechnique)

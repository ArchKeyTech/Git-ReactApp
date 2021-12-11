# Git-ReactApp
A full-stack app which allows one to search for existing Github or Gitlab users via a search engine.

The app makes calls to the github and gitlab APIs based on the user's input name query, then returns
valid usernames which match the name entered.

Once a username is clicked, the app then displays the user info for that particular account as well
as their repositories info

## Screenshots
Searching 'ArchKeyTech':
![Screenshot from 2021-12-11 16-30-52](https://user-images.githubusercontent.com/50621192/145680924-8ab51804-f0a8-4004-8386-7cadf9d5990b.png)

Loading search:
![Screenshot from 2021-12-11 16-40-07](https://user-images.githubusercontent.com/50621192/145680938-f0b2f46c-52f1-4d17-a9cc-7cfd1c12aba4.png)


Found results:
![Screenshot from 2021-12-11 16-44-12](https://user-images.githubusercontent.com/50621192/145680951-a0b29f5d-bd14-49fa-a7ab-83211ad22a41.png)

## How to install the app

Download the ZIP file of the code or Git Clone from your terminal. Then, navigate to the directory of the downloaded file, inside 'Git-ReactApp'. Using your text editor or your terminal, type` npm install`. This will setup the node_modules folder for the backend (make sure you are in the same directory where the package.json file is located). Similarly, navigate to the 'frontend' directory and repeat 'npm install', to setup the node_modules folder for the frontend

## Launching the app

Once the installs are complete, run `npm start` from the 'Git-ReactApp' directory to launch the server, then in a side-tab inside your 'frontend' directory, run `npm start` to launch the react-app in development mode (This will launch the app in the browser with server [http://localhost:3000](http://localhost:3000) )


## Credit

By [Dan-Samuel Moleka](https://github.com/ArchKeyTechnique)

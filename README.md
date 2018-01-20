### DoveBox
React app to display json data in a table, filter the data, add new records ...

### Run instructions
Clone this repo and run `npm install` in the root directory to install required npm packages.Run `npm start` to initialize the dummy API server which will run on port 5000 and will be accessible on `localhost:5000/doves`.
Run `npm run start-dev` to run react-scripts which will run the app on `http://localhost:3000/`

### The React application does the following:

* Displays a table of Doves on pageload, populated by the API
* Has a Search component to query the API for Doves based on the text in last_command property, filters to filter by the state of doves 'Active/Inactive' and by images collected range. The filtered results are displayed in the table.
* Has a form to add new Doves to the database
* Has a remove option in table which deletes the dove from the json-server.

### The app uses Redux to manage state of application

### Files

* The dove related Components like AddNewDove, Filters, DoveList are in the dove folder
* ActionTypes.js, to maintain the strings related to Actions
* Actions.js to dispatch various actions related to retrieving, deleting, adding, filtering doves
* App.js contains all the components DoveList, Filters etc. and communicates the state of the app between redux store and child components inside App.
* reducer.js manipulates state of the app based on the action type that is received.
* MainApp.js, localStorage.js are other miscellaneous components related to managing state of the application.
* fetch.js to exports reusable http methods to call the api

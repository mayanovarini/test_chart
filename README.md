# React Project For Test.ai

An application to display JSON data, built with ReactJS and ChartJS.

## Demo

Access the demo here : https://test-94979.firebaseapp.com/

### Prerequisites to run locally

On your local directory, clone the repo bar repository by running :

```
git clone https://github.com/thegirlfromipanema/test_react
```

then, run :

```
npm install
```

then start the dev/local server :

```
npm start
```

to create the build :

```
npm build
```

### Technical Rationale

- I use ReactJS to modularize every element as a component, for more control over the DOM.

- For better maintainability and reactivity, the data is centralized and imported from the same file in App.js.

- Chart.js is used to display the performance data in a visually appealing design.

- Moment.js is used to format the timestamps.

- I deployed the application to Firebase, as it provides easy deployment and less error-prone compared to Heroku (only appropriate for tiny projects though).


## Built With

* [ReactJS](https://reactjs.org//) - The JS library used to modularize the DOM, centralize the data and make the UI interactive
* [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2) - Used to create the chart
* [MomentJS](https://momentjs.com) - Used to format timestamps
* [Firebase](https://firebase.google.com/) - Used for deployment

## Versioning

1.0.0

## Developer

[Maya Novarini](https://github.com/thegirlfromipanema)

Visit my [portfolio](http://mayanovarini.com)

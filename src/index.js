import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './fetch-setup';

ReactDOM.render(<App />, document.getElementById('root'));


// View render cards of each animal type
    // fetch request via componetDidMount()

    
// Click on 'Find pets' button & see ONLY the type of pet selected
    // App sends Filter needs onClick as a pass through function to get selection type
    // App selects the data based on the selection
    // Sends selected data to PetBrowser via this.state
    // PetBrowser sends props to Pet to render each pet


// User can click on 'Adopt' pet & can not un-adopt pet. (FE only)
    // Pets needs onClick to toggle the state of the pet to adopted ONLY
        // setState in App, sending info back via props?


// Component Tree
    // App - Parent - (Holds the State)
        // Filters
        // PetBrowser
            // Pet


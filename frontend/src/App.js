
import React from 'react';
import QuotesList from './components/QuotesList';
import SearchQuotes from './components/SearchQuotes'; 
import RandomQuote from './components/RandomQuote';

const App = () => {
    return (
        <div>
            <h1>Quote of the Day</h1>
            <RandomQuote />
            <SearchQuotes />
            <QuotesList />
        </div>
    );
};


export default App;

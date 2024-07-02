 
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomQuote = () => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:4000/api/quotes/random')
            .then(response => {
                setQuote(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the random quote!', error);
            });
    }, []);

    return (
        <div>
            <h1><b>Random Quote</b> </h1>
            {quote ? (
                <p>"{quote.text}" - {quote.author}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default RandomQuote;

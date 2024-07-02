 

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuotesList = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/quotes')
            .then(response => {
                setQuotes(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the quotes!', error);
            });
    }, []);

    return (
        <div>
            <h2>Quotes List</h2>
            <ul>
                {quotes.map(quote => (
                    <li key={quote._id}>
                        "{quote.text}" - {quote.author}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuotesList;

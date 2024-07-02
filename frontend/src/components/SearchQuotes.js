 
import React, { useState } from 'react';
import axios from 'axios';

const SearchQuotes = () => {
    const [author, setAuthor] = useState('');
    const [quotes, setQuotes] = useState([]);

    const handleSearch = () => {
        axios.get(`http://localhost:4000/api/quotes/author/${author}`)
            .then(response => {
                setQuotes(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the quotes!', error);
            });
    };

    return (
        <div>
            <h2>Search Quotes by Author</h2>
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Enter author name"
            />
            <button onClick={handleSearch}>Search</button>
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

export default SearchQuotes;

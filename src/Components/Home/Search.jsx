import React from 'react'
import { Link } from 'react-router-dom'

function Search() {
    return (
        <div id='div_search'>
            <Link to="/Usuario"><button id='search'>Seach</button></Link>
        </div>
    )
}

export default Search

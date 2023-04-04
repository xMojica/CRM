import React from 'react'
import { useHistory } from 'react-router-dom'

function Search(props) {
    const history = useHistory();

    function pasar(){
        history.push('/Usuario/' + props.param);
    }

    return (
        <div id='div_search'>
            <button id='search' onClick={pasar}>Seach</button>
        </div>
    )
}

export default Search

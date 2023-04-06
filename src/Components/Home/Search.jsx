import React from 'react'
import { useHistory } from 'react-router-dom'

function Search(props) {
    const history = useHistory();

    function pasar(){
        history.push('/data/' + props.param);
    }

    return (
        <div id='div_search'>
            <button id='search' onClick={pasar}>Search</button>
        </div>
    )
}

export default Search

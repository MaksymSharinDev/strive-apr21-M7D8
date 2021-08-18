import { musicApiResponse , searchBarProps } from './types';
import './SearchBar.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import {useEffect, useState} from "react";



const SearchBar  = ({ callback }:searchBarProps ): JSX.Element => {
    const [ query , setQuery ] = useState('')
    const [inputContent, setInputContent] = useState('')
    useEffect(() => {
        (async () => {
            try{
                let response = await fetch(
                    'https://striveschool-api.herokuapp.com' +
                    `/api/deezer/search?q=${query}`
                )
                let data : musicApiResponse
                data = await response.json()
                callback( data )
            }
            catch(e) {
                //TODO Handle error
            }
        })()
    }, [query]);


    return (
    <div id={'SearchBarComponent'}>
    <div className='search-box'
        onMouseLeave={ () => setQuery( inputContent ) }>
        <input className="search-text" type="text"
               placeholder="Find your song!"
               onChange={ e => setInputContent(e.target.value) }/>
        <a href="#" className="search-btn">
            <FontAwesomeIcon icon={faSearch}/>
        </a>
    </div>
    </div>)
}
export default SearchBar

import './SearchBar.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import {useEffect, useState} from "react";

interface searchBarProps {
    callback : Function
}

interface fetchedArtistObj {
    id: number ,
    name: string,
    link: URL,
    picture : URL
}
interface fetchedAlbumObj
{
    id: number ,
    title: string,
    cover: URL,
}

interface fetchedSongObj {
    id: number,
    title: string,
    link: URL,
    duration: number,
    preview: URL,
    artist : fetchedArtistObj,
    album : fetchedAlbumObj ,
    type: string,
}

type musicApiResponse = {
    data: Array<fetchedSongObj>
}
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

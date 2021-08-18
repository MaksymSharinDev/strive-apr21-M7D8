

export interface fetchedArtistObj {
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

export interface fetchedSongObj {
    id: number,
    title: string,
    link: URL,
    duration: number,
    preview: URL,
    artist : fetchedArtistObj,
    album : fetchedAlbumObj ,
    type: string,
}

export type musicApiResponse = {
    data: Array<fetchedSongObj>
}

export type dataHandOffCallback = ( data: musicApiResponse ) => void ;

export interface searchBarProps {
    callback : dataHandOffCallback
}



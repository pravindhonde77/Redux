import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMusicRecord } from '../Redux/AppReducer/action';
import { useSearchParams, useLocation, Link } from "react-router-dom"
import { useEffect } from "react"
const MusicAlbum = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const musicRecords = useSelector((store) => store.AppReducer.musicRecords)

    const location = useLocation()

    //whenever the filters in FilterSort component changes,
    // the music albums shuld re-render with the same filter

    useEffect(() => {

        if (location || musicRecords.length === 0) {
            const genre = searchParams.getAll("genre")
            const queryParams = {
                params: {
                    genre: genre,
                    _sort: searchParams.get("sortBy") && "year",
                    _order: searchParams.get("sortBy"),
                },
            };
            dispatch(getMusicRecord(queryParams))
        }

    }, [location.search]);
    return (
        <>
            {musicRecords.length > 0 && musicRecords.map(album => {
                return (
                    <div key={album.id}
                        style={{
                            border: "1px solid black",
                            margin: "5px"

                        }}

                    >
                        <div>{album.name}</div>
                        <div>
                            <img src={album.img} alt={album.name} />
                        </div>
                        <div>{album.genre}</div>
                        <div>{album.year}</div>
                        <Link to={`/music/${album.id}/edit`}>
                        <button>Edit</button>
                        </Link>
                        
                    </div>
                )
            })}
        </>
    )
}

export default MusicAlbum
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMusicRecord } from '../Redux/action';
import { useSearchParams, useLocation } from "react-router-dom"
import { useEffect } from "react"
const MusicAlbum = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const musicRecords = useSelector((store) => store.musicRecords)

    const location = useLocation()

    //whenever the filters in FilterSort component changes,
    // the music albums shuld re-render with the same filter

    useEffect(() => {

        if (location || musicRecords.length === 0) {
            const genre = searchParams.getAll("genre")
            const queryParams = {
                params: {
                    genre: genre,
                    _sort:searchParams.get("sortBy") && "year",
                    _order:searchParams.get("sortBy"),
                },
            };
            dispatch(getMusicRecord(queryParams))
        }

    }, [location.search]);
    return (
        <>
            {musicRecords.length > 0 && musicRecords.map(album => {
                return (
                    <div key={album.id}>
                        <div>{album.name}</div>
                        <div>
                            <img src={album.img} alt={album.name} />
                        </div>
                        <div>{album.genre}</div>
                        <div>{album.year}</div>
                    </div>
                )
            })}
        </>
    )
}

export default MusicAlbum
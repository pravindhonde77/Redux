import axios from "axios"
import * as types from "./actionTypes"


const getMusicRecordRequest=()=>{
    return{
        type:types.GET_MUSIC_RECORD_REQUEST
    }
}

const getMusicRecord=(queryParams)=>(dispatch)=>{
    dispatch(getMusicRecordRequest())

    return axios
    .get("http://localhost:8080/albums",queryParams)
    .then((r)=>{
        dispatch({
            type:types.GET_MUSIC_RECORD_SUCCESS,
            payload:r.data
        })
    })
    .catch((e)=>{
        dispatch({type:types.GET_MUSIC_RECORD_FAILURE})
    })
}



export{
    getMusicRecord,
}
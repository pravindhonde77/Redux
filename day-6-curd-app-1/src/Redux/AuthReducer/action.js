import * as types from "./actionTypes"
import axios from "axios";


const postLoginRequest=()=>{
    return {
        type:types.USER_LOGIN_REQUEST
    }
}

const postLoginSuccess=()=>{
    return {
        type:types.USER_LOGIN_SUCCESS
    }
}

const postLoginFailure=()=>{
    return {
        type:types.USER_LOGIN_FAILURE
    }
}

const login=(payload)=>(dispatch)=>{

    dispatch(postLoginRequest())

    return axios({
        method:'post',
        url:'/api/login',
        baseURL:'https://reqres.in',
        data:payload,
    }).then((r)=>{
        return dispatch(postLoginSuccess(r.data.token))
    })
    .catch((e)=>{
        dispatch(postLoginFailure())
    })

}
export{postLoginFailure,postLoginRequest,postLoginSuccess,login}
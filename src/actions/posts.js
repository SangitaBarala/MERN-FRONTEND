import * as api from '../api'
import {CREATE, FETCH_ALL} from "../constants/actionTypes";

export const getPosts = ()=> async (dispatch) =>{
    try{
        const {data} = await api.fetchPosts();
        //dispatch({type: FETCH_ALL, payload: data})
        dispatch({type:FETCH_ALL, payload:data})
    }catch (e) {
        console.log(e.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try{
        const {data} = await api.createPost(post);
        //dispatch({type:CREATE, payload:data});
        dispatch({type:CREATE, payload:data})
    }catch (e) {
        console.log(e.message)
    }
}
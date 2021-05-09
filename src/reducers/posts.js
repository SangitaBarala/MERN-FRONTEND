import { FETCH_ALL, CREATE } from '../constants/actionTypes';

const reducer= (posts = [], action)=>{
    switch (action.type){
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
}
//module.exports = reducer
export default reducer
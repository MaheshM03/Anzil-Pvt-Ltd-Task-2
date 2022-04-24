import axios from 'axios'
const { USER_ADD_REQUEST, USER_ADD_SUCCESS, USER_ADD_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } = require("../constants/user-constant");
 export const userAction = (userData) => async (dispatch)=>{
try {
	dispatch({type: USER_ADD_REQUEST});
	const data = await axios.post("http://localhost:5000/api/user/create", userData);
	dispatch({type: USER_ADD_SUCCESS});
} catch (error) {
	dispatch({type: USER_ADD_FAILURE, payload: error});
}
}

 export const getUserAction = () => async (dispatch)=>{
try {
	dispatch({type: GET_USER_REQUEST});
	const {data} = await axios.get("http://localhost:5000/api/user/get-user");
	dispatch({type: GET_USER_SUCCESS,payload:data.result});
	// console.log(data)
} catch (error) {
	dispatch({type: GET_USER_FAILURE, payload: error});
}
}
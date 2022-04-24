import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, USER_ADD_FAILURE, USER_ADD_REQUEST, USER_ADD_SUCCESS } from "../constants/user-constant";

export const userReducer = (state = {useInfo:{}}, {type,payload}) => {
	switch (type) {
		case USER_ADD_REQUEST:
			return {
				isLoading: true,
			};
		case USER_ADD_SUCCESS:
			return {
				isLoading: false,
				useInfo: payload
			};
		case USER_ADD_FAILURE:
			return {
				isLoading: false,
			};
	
		default: return state;
	}
}

export const getUserReducer = (state = {users:[]}, {type,payload}) => {
	switch (type) {
		case GET_USER_REQUEST:
			return {
				isLoading: true,
			};
		case GET_USER_SUCCESS:
			return {
				isLoading: false,
				users: payload
			};
		case GET_USER_FAILURE:
			return {
				isLoading: false,
			};
	
		default: return state;
	}
}
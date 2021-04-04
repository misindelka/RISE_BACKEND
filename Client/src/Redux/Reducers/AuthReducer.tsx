import { AUTH, LOGOUT } from '../../constants/ActionTypes';

const initialStateValue = { authData: null };

const AuthReducer = (state = initialStateValue, action) => {
	switch (action.type) {
		case AUTH:
			localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
			return { ...state, authData: action?.data };

		case LOGOUT:
			localStorage.clear();
			return { ...state, authData: null };

		default:
	}
	return state;
};

export default AuthReducer;

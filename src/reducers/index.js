import {
	SIGNUP_FAILED,
	SIGNUP_START,
	SIGNUP_SUCCESS,
	LOGOUT_START,
	LOGOUT_SUCCESS
} from '../actions';

const initialState = {
	isAuthenticated: false,
	isAuthenticating: false,
	user: {},
	userConfirmation: false
};

const reducer = (state = initialState, action) => {
	console.log(`REDUCERS :: ACTION TYPE :: ACTION TYPE IS ${action.type}`);

	switch(action.type) {
		case SIGNUP_START:
			console.log(`REDUCERS :: SIGNUP_START :: `);
			return {
				...state,
				error: '',
				isAuthenticated: false,
				isAuthenticating: true
			};
		case SIGNUP_SUCCESS:
			console.log(`REDUCERS :: SIGNUP_SUCCESS :: USER IS ${action.payload.user}`);
			localStorage.setItem('beachName', action.payload.user.homeBeachName);
			localStorage.setItem('htwUser', JSON.stringify(action.payload.user));
			return {
				...state,
				error: '',
				isAuthenticated: true,
				isAuthenticating: false,
				user: action.payload.user
			};
		case SIGNUP_FAILED:
			console.log(`REDUCERS :: SIGNUP_FAILED :: ERROR IS ${action.payload.error}`);
			console.log(`REDUCERS :: SIGNUP_FAILED :: STATE VALUE IS ${JSON.stringify(state)}`);
			console.log(`REDUCERS :: SIGNUP_FAILED :: LOCAL STORAGE VALUE IS ${localStorage.getItem('amplify-signin-with-hostedUI')}`);
			return {
				...state,
				error: action.payload.error,
				isAuthenticated: false,
				isAuthenticating: false,
				user: null
			};
		case LOGOUT_START:
			return {
				...state,
				isAuthenticated: true,
				isAuthenticating: false
			};
		case LOGOUT_SUCCESS:
			return {
				...state,
				isAuthenticated: false,
				isAuthenticating: false,
				isFederatedSignIn: false,
				user: null
			};
		default:
			return state;
	}
};

export default reducer;


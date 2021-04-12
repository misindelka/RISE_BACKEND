import { combineReducers } from 'redux';
import BoxReducer from './reducers/boxReducer';
import ProductsReducer from './reducers/productsReducer';
import AuthReducer from './reducers/authReducer';
import UsersReducer from './reducers/usersReducer';

const rootReducer = combineReducers({
	products: ProductsReducer,
	productsInBox: BoxReducer,
	user: AuthReducer,
	usersData: UsersReducer,
});

export default rootReducer;

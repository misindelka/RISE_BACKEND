import { combineReducers } from 'redux';
import BoxReducer from './Reducers/BoxReducer';
import ProductsReducer from './Reducers/ProductsReducer';
import AuthReducer from './Reducers/AuthReducer';
import UsersReducer from './Reducers/UsersReducer';

const rootReducer = combineReducers({
	products: ProductsReducer,
	productsInBox: BoxReducer,
	user: AuthReducer,
	usersData: UsersReducer
});

export default rootReducer;

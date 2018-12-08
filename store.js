
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialStateModel = {
	_lastUpdate: 0,
    _dataProveedores: [],
    _dataArticulos: [],
};

export const actionsTypes = {
	ADDPROVEEDORES: "ADDPROVEEDORES",
	ADDARTICULOS: "ADDARTICULOS"
};
// REDUCERS
export const reducer = ( state=initialStateModel, action ) => {
	switch(action.type){
		case actionsTypes.ADDARTICULOS:
			return Object.assign({}, state,{ _lastUpdate: action.time, _dataArticulos: action.dataArticulos });
		case actionsTypes.ADDPROVEEDORES:
			return Object.assign({}, state, { _lastUpdate: action.time, _dataProveedores: action.dataProveedores });
		default: 
			return state;
	}
}

// ACTIONS

export const pushDataProveedores = data => dispatch => {
	return dispatch({type: actionsTypes.ADDPROVEEDORES, time: Date.now(), dataProveedores: data })
}
export const pushDataArticulos = data => dispatch => {
	return dispatch({type: actionsTypes.ADDARTICULOS, time: Date.now(), dataArticulos: data })
}

// Initial Store
export const initStore = ( initialState=initialStateModel ) => {
	if ( process.env.NODE_ENV !== "production" ) {
		return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
	}
	return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}
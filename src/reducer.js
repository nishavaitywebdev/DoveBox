import * as types from './ActionTypes';

const initialState = {
    doves: null, 
    status: null, 
    error: null, 
    loading: false
};

export default function doves(state = initialState, action) {
    switch (action.type) {
    	case types.ADD_DOVE:
            return { ...state, status: 'adding dove', loading: true};
        case types.ADD_DOVE_SUCCESS:
            const dovesAfterNewAdded = [...state.doves, action.dove];
            return { ...state, doves: dovesAfterNewAdded, status: 'added', loading: false};
        case types.ADD_DOVE_FAILURE:
            const addError = action.error || {message: action.message};
            return { ...state, status: 'failed', error: addError, loading: false};

        case types.DELETE_DOVE:
            return { ...state, status: 'deleting dove', error: null, loading: true};
        case types.DELETE_DOVE_SUCCESS:
            const dovesAfterDeletion = state.doves.filter(({ id }) => id !== action.dove);
            return { ...state, doves: dovesAfterDeletion, status: 'deleted', loading: false};
        case types.DELETE_DOVE_FAILURE:
            const deleteError = action.error || {message: action.message};
            return { ...state, status: 'failed', error: deleteError, loading: false};
		
        case types.GET_DOVES:
            return { ...state, status: 'retrieving doves', loading: true};
        case types.GET_DOVES_SUCCESS:
            return { ...state, doves: action.doves, status: 'retrieved', loading: false}; 
        case types.GET_DOVES_FAILURE:
            const getError = action.error || {message: action.message};
            return { ...state, doves: null, status: 'error', error: getError, loading: false};

        default:
            return state;
    }
}

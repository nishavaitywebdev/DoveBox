import * as types from './ActionTypes';
import { fetchGet, fetchPost, fetchDelete } from './fetch';

const baseUrl = 'http://localhost:5000/doves';

// To get doves by calling the api
export function getDoves() {
    return dispatch => {
        fetchGet(baseUrl)
        .then((response) => {
            return dispatch(getDovesSuccess(response));
        })
        .catch((error) => {
            return dispatch(getDovesFailure(error));
        });
    };
};

export function getDovesSuccess(doves) {
    return {
        type: types.GET_DOVES_SUCCESS,
        doves
    };
};

export function getDovesFailure(error) {
  return {
    type: types.GET_DOVES_FAILURE,
    error
  };
};

// To add new dove to the list
export function addDove(formValues) {
    return dispatch => {
        fetchPost(baseUrl, formValues)
        .then((response) => {
            return dispatch(addDoveSuccess(response));
        })
        .catch((error) => {
            return dispatch(addDoveFailure(error));
        });
    };
};

export function addDoveSuccess(dove) {
    return {
        type: types.ADD_DOVE_SUCCESS,
        dove
    };
};

export function addDoveFailure(error) {
    return {
        type: types.ADD_DOVE_FAILURE,
        error
    };
};

// To delete a dove from the list
export function deleteDove(formValues) {
    return dispatch => {
        fetchDelete(baseUrl+'/'+formValues)
        .then((response) => {
            return dispatch(deleteDoveSuccess(formValues));
        })
        .catch((error) => {
            return dispatch(deleteDoveFailure(error));
        });
    };
};

export function deleteDoveSuccess(dove) {
    return {
        type: types.DELETE_DOVE_SUCCESS,
        dove
    };
};

export function deleteDoveFailure(error) {
    return {
        type: types.DELETE_DOVE_FAILURE,
        error
    };
};

// To query the api by teh selected filters
export function setFilters(searchText, statusInput, imagesCollectedRange) {
    const lastCommandQuery = searchText === '' ? '': '&last_command_like=' + searchText;
    const statusQuery = statusInput === '' ? '': '&active=' + statusInput;
    const imagesQuery = '?images_collected_gte=' + imagesCollectedRange;
    const url = baseUrl + imagesQuery + statusQuery + lastCommandQuery;
    return dispatch => {
        fetchGet(url)
        .then((response) => {
            return dispatch(getDovesSuccess(response));
        })
        .catch((error) => {
            return dispatch(getDovesFailure(error));
        });
    };
};

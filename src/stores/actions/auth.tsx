import { AuthState } from '../reducers/auth';
import * as actionTypes from './actionTypes';


export const signUpStart = () => ({
    type: actionTypes.SIGN_UP_START
});

export const signUpFail = () => ({
    type: actionTypes.SIGN_UP_FAIL
});

export const signUpSuccess = () => ({
    type: actionTypes.SIGN_UP_SUCCESS
});

export const signUp = (payload: AuthState) => ({
    type: actionTypes.SIGN_UP,
    payload
})
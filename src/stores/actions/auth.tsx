import { AuthState } from '../reducers/auth';
import * as actionTypes from './actionTypes';


export const signUpStart = () => ({
    type: actionTypes.SIGN_UP_START
});

export const signUpFail = (error: unknown) => ({
    type: actionTypes.SIGN_UP_FAIL,
    payload: { error }
});

export const signUpSuccess = () => ({
    type: actionTypes.SIGN_UP_SUCCESS
});

export const signUp = (payload: AuthState) => ({
    type: actionTypes.SIGN_UP,
    payload
})
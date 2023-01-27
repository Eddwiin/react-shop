import { all, takeEvery } from "redux-saga/effects";
import * as actionsTypes from './../actions/actionTypes';
import { signUpSaga } from "./auth";

export function* watchAuth() {
    yield all([
        takeEvery(actionsTypes.SIGN_UP, signUpSaga)
    ])
}
import { Action } from '@reduxjs/toolkit';
import { put } from "redux-saga/effects";
import * as actions from './../actions';

export function* auth(action: Action) {
    yield put(actions.signUpStart());
}
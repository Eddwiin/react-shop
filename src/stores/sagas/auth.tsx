import { put } from "redux-saga/effects";
import { API } from "../../helpers/api/api";
import { UserAPI } from '../../shared/interfaces/user';
import * as actions from './../actions';

type UserForSignUp = Omit<UserAPI, 'id'>;

export function* signUpSaga(action: any) {
    yield put(actions.signUpStart());
    const user: UserForSignUp = {
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        email: action.payload.email,
        phone: action.payload.phone,
        adress: action.payload.adress,
        password: action.payload.password
    }

    try {
        yield API.post('users', JSON.stringify(user))
        yield put(actions.signUpSuccess())

    } catch (e) {
        yield put(actions.signUpFail(e))
    }
}
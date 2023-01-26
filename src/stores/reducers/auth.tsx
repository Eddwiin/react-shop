import { User } from "../../shared/interfaces/user";
import * as actionTypes from './../actions/actionTypes';

export type AuthState = Omit<User, "id"> & { confirmPassword: string };

const initialState: AuthState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.SIGN_UP:
            console.log("action ", action.payload)
            break;
        default:
            return state;

    }
}

export default authReducer;
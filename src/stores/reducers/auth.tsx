import { UserAPI } from "../../shared/interfaces/user";

export type AuthState = Omit<UserAPI, "id">;

const initialState: AuthState = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    adress: '',
    password: ''
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;

    }
}

export default authReducer;
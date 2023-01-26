import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import authReducer from './reducers/auth';

const sagaMiddleware = createSagaMiddleware();
const middleware = (getDefaultMiddleware: any) => [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
    reducer: {
        auth: authReducer
    },
    middleware
})

// sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
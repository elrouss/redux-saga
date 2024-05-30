import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = <T extends object>(preloadedState: T) =>
    createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );

export const store = configureStore({});

sagaMiddleware.run(rootSaga);

export type TAppStore = typeof store;
export type TAppDispatch = TAppStore['dispatch'];
export type TRootState = ReturnType<typeof rootReducer>;

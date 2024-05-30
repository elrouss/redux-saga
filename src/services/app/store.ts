import { createStore, compose } from 'redux';
import rootReducer from './rootReducer';
// import rootSagaMiddleware from './rootSagaMiddleware';

// devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = <T extends object>(preloadedState: T) => createStore(
  rootReducer,
  preloadedState,
  composeEnhancers()
)

export const store = configureStore({});

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
// export type AppThunk<ThunkReturnType = void> = ThunkAction<
//   ThunkReturnType,
//   RootState,
//   unknown,
//   Action
// >;

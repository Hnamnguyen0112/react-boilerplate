/**
 * Combine all reducers in this file and export the combined reducers.
 */
import appReducer from '@containers/App/reducer';
import { combineReducers } from 'redux';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    appState: appReducer,
    ...injectedReducers
  });

  return rootReducer;
}

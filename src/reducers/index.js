import formVisibleReducer from './form-visible-reducer';
import kegControlReducer from './keg-control-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  kegList: kegControlReducer
});

export default rootReducer;
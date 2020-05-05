import formVisibleReducer from './form-visible-reducer';
import kegControlReducer from './keg-control-reducer';
import selectedKegReducer from './selected-keg';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  kegList: kegControlReducer,
  selectedKeg: selectedKegReducer
});

export default rootReducer;
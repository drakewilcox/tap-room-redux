import rootReducer from '../../reducers/index';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import ticketListReducer from '../../reducers/keg-control-reducer';
import { createStore } from 'redux';
// import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      kegList: {},
      formVisibleOnPage: false
    });
  });


})
import kegControlReducer from '../../reducers/keg-control-reducer';

describe('kegControlReducer', () => {

  test ('Should return default state if there is no action passed into the reducer', () => {
      expect(kegControlReducer({}, {type: null })).toEqual({});
    });
  });
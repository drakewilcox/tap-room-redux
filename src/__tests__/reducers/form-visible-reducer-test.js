import formVisibleReducer from '../../reducers/form-visible-reducer';

describe("formVisibleReducer", () => {

  test("Should return default state if no action type is recognized", () => {
    expect(formVisibleReducer(undefined, { type: null })).toEqual(false);
  });
})
import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('ticket control actions', () => {

  const keg = {
    name: "Pilsner", 
    brewery: "Pfriem", 
    abv: "5.0%",
    origin: "OR",
    pintPrice: 6,
    kegLevel: 124,
    id: 1
  }

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg(keg)).toEqual({
      type: c.ADD_KEG, 
      name: "Pilsner", 
      brewery: "Pfriem", 
      abv: "5.0%",
      origin: "OR",
      pintPrice: 6,
      kegLevel: 124,
      id: 1
    });
  });

  it('deleteTicket should create DELETE_TICKET action', () => {
    expect(actions.deleteKeg(keg.id)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });


})

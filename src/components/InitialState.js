import { v4 } from 'uuid';

const id1 = v4();
const id2 = v4();
const id3 = v4();
const id4 = v4();
const id5 = v4();
const id6 = v4();
const id7 = v4();
const id8 = v4();
const id9 = v4();

const InitialState = {
selectedKeg: {
   
    name: "Briney Melon Gose",
    brewery: "AndersonValley",
    abv: "4.2%",
    origin: "CA",
    pintPrice: 6, 
    kegLevel: 124,
    id: id1
    
  },
  kegList: {
    [id1]: {
      name: "Briney Melon Gose",
      brewery: "Anderson Valley",
      abv: "4.2%",
      origin: "CA",
      pintPrice: 6, 
      kegLevel: 124,
      id: id1
    },
    [id2]: {
      name: "Cheap and Cold",
      brewery: "Hamm's",
      abv: "4.7%",
      origin: "USA",
      pintPrice: 3, 
      kegLevel: 124,
      id: id2
    },
    [id3]: {
      name: "Viva La Pineapple Cider",
      brewery: "Reverend Nat's",
      abv: "6%",
      origin: "PDX",
      pintPrice: 6, 
      kegLevel: 124,
      id: id3
    },
    [id4]: {
      name: "Dystopia IPA",
      brewery: "Grains of Wrath",
      abv: "6.7%",
      origin: "WA",
      pintPrice: 6, 
      kegLevel: 124,
      id: id4
    },
    [id5]: {
      name: "FanZine IPA",
      brewery: "Fort George",
      abv: "6.7%",
      origin: "OR",
      pintPrice: 6, 
      kegLevel: 124,
      id: id5
    },
    [id6]: {
      name: "Pilsner",
      brewery: "Chuckanut",
      abv: "5%",
      origin: "WA",
      pintPrice: 5, 
      kegLevel: 124,
      id: id6
    },
    [id7]: {
      name: "Dark Star Coffee Bourbon Stout",
      brewery: "Fremont",
      abv: "14.5%",
      origin: "WA",
      pintPrice: 9, 
      kegLevel: 124,
      id: id7
    },
    [id8]: {
      name: "Pretty Hot Habenero Pils",
      brewery: "Ross Island",
      abv: "4.9%",
      origin: "PDX",
      pintPrice: 5, 
      kegLevel: 124,
      id: id8
    },
    [id9]: {
      name: "Saison Dupont",
      brewery: "Dupont",
      abv: "6.5%",
      origin: "BEL",
      pintPrice: 6, 
      kegLevel: 124,
      id: id9
    }
  }
}

export default InitialState;
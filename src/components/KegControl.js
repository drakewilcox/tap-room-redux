import React from 'react';
import NewKegForm from './KegFormControl/NewKegForm';
import MainHeader from './MainHeader';
import Beer from './KegDetails/Beer';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showHomePage: true,

      kegList: [
        {
          name: "Briney Melon Gose",
          brewery: "Anderson Valley",
          abv: "4.2%",
          origin: "CA",
          pintPrice: 6, 
          kegLevel: 124,
          id: "7707701"
        },
        {
          name: "Cheap and Cold",
          brewery: "Hamm's",
          abv: "4.7%",
          origin: "USA",
          pintPrice: 3, 
          kegLevel: 124,
          id: "7707702"
        },
        {
          name: "Viva La Pineapple Cider",
          brewery: "Reverend Nat's",
          abv: "6%",
          origin: "PDX",
          pintPrice: 6, 
          kegLevel: 124,
          id: "7707703"
        },
        {
          name: "Dystopia IPA",
          brewery: "Grains of Wrath",
          abv: "6.7%",
          origin: "WA",
          pintPrice: 6, 
          kegLevel: 124,
          id: "7707704"
        },
        {
          name: "FanZine IPA",
          brewery: "Fort George",
          abv: "6.7%",
          origin: "OR",
          pintPrice: 6, 
          kegLevel: 124,
          id: "7707705"
        },
        {
          name: "Pilsner",
          brewery: "Chuckanut",
          abv: "5%",
          origin: "WA",
          pintPrice: 5, 
          kegLevel: 124,
          id: "7707706"
        },
        {
          name: "Dark Star Coffee Bourbon Stout",
          brewery: "Fremont",
          abv: "14.5%",
          origin: "WA",
          pintPrice: 9, 
          kegLevel: 124,
          id: "7707707"
        },
        {
          name: "Pretty Hot Habenero Pils",
          brewery: "Ross Island",
          abv: "4.9%",
          origin: "PDX",
          pintPrice: 5, 
          kegLevel: 124,
          id: "7707708"
        },
        {
          name: "Saison Dupont",
          brewery: "Dupont",
          abv: "6.5%",
          origin: "BEL",
          pintPrice: 6, 
          kegLevel: 124,
          id: "7707709"
        },
      ], 
      currentSelectedKeg: {}
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    console.log(newKeg.name);
    const newKegList = this.state.kegList.concat(newKeg);
    this.setState({kegList: newKegList});
    this.setState({showHomePage: true});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.kegList.filter(keg =>keg.id === id)[0];
    this.setState({
      currentSelectedKeg: selectedKeg,
      showHomePage: true
    });
  }

  handleSalesReport = (salesReport) => {
    console.log(salesReport.pintsSold)
    const selectedKeg = this.state.kegList.filter(keg => keg.id === salesReport.id)[0];
    const updatedKeg = {...selectedKeg, kegLevel: salesReport.pintsSold}
    const oldKegs = this.state.kegList.filter(keg => keg.id !== salesReport.id);
    this.setState({
      kegList: [...oldKegs, updatedKeg],
      currentSelectedKeg: updatedKeg
    });
  }

  renderTableData() {
    const sortedKegs = this.state.kegList.sort(function(a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    return sortedKegs.map((keg, index) => {
      const { name, brewery, abv, origin, pintPrice, id } = keg
      return (
        <tr key={id} onClick={() => this.handleChangingSelectedKeg(id)}>
          <td>{name}</td>
          <td>{brewery}</td>
          <td>${pintPrice}</td>
          <td>{abv}</td>
          <td>{origin}</td>
        </tr>
      )
    })
  }

  currentPage = () => {
    if (this.state.showHomePage) {
      return {

        header: <MainHeader/>,
        main: 
        <React.Fragment>
          <main>
            <h3 id='title'>BEER SELECTION</h3>
            <table id='kegList'>
            <tbody>
              <tr id="tableHead">
                <th>Name</th>
                <th>Brewery</th>
                <th>Price (16oz)</th>
                <th>ABV</th>
                <th>Origin</th>
              </tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </main>
        </React.Fragment>,
        sideBar: <Beer
          beer = {this.state.currentSelectedKeg}
          onNewSalesReport = {this.handleSalesReport}
          />,
        footer: <NewKegForm 
        onNewKegFormCreation = {this.handleAddingNewKegToList}/>
      } 
    } else {
      return {
        header: <MainHeader/>,
        body: <Beer
        beer={this.state.currentSelectedKeg}/>
      }
    }
  };

  render() {
    let currentPage = this.currentPage();
    return (
      <React.Fragment>
        <div className='wrapper'>
          <div className='header'>
            {currentPage.header}
          </div>
          <div className='main'>
            {currentPage.main}
          </div>
          <div className='sidebar'>
            {currentPage.sideBar}
          </div>
          <div className='footer'>
            {currentPage.footer}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default KegControl;
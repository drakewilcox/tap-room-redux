import React from 'react';
import NewKegForm from './KegFormControl/NewKegForm';
import MainHeader from './MainHeader';
import Beer from './KegDetails/Beer';
// import KegList from './KegList.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showHomePage: true,

      // kegList: KegList, 
      selectedKeg: {}
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    console.log(newKeg.name);
    const newKegList = this.state.kegList.concat(newKeg);
    this.setState({kegList: newKegList});
    this.setState({showHomePage: true});
  }

  // handleChangingSelectedKeg = (id) => {
  //   const selectedKeg = this.state.kegList.filter(keg =>keg.id === id)[0];
  //   this.setState({
  //     currentSelectedKeg: selectedKeg,
  //     showHomePage: true
  //   });
  // }
  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.kegList.filter(keg => keg.id === id)[0];
    this.setState({
      selectedKeg: selectedKeg, 
      showHomePage: true
    })
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
    const sortedKegs = Object.values(this.props.kegList).sort(function(a, b) {
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
          beer = {this.props.selectedKeg}
          onNewSalesReport = {this.handleSalesReport}
          />,
        footer: <NewKegForm 
        onNewKegFormCreation = {this.handleAddingNewKegToList}/>
      } 
    } else {
      return {
        header: <MainHeader/>,
        body: <Beer
        beer={this.props.selectedKeg}/>
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

KegControl.propTypes = {
  kegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    kegList: state.kegList,
    selectedKeg: state.selectedKeg
  }
}
KegControl = connect(mapStateToProps)(KegControl)
export default KegControl;
import React from 'react';
import NewKegForm from './KegFormControl/NewKegForm';
import TapList from './KegList';
import MainHeader from './MainHeader';
import Beer from './KegDetails/Beer';
// import KegList from './KegList.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as c from './../actions';

function KegControl (props) {


const { dispatch } = props;

const handleAddingNewKegToList = (newKeg) => {
   dispatch(c.addKeg(newKeg));
  }

const handleChangingSelectedKeg = (id) => {
    const kegInfo= props.kegList[id];
    dispatch(c.selectedKeg(kegInfo))
}

const handleSalesReport = (id) => {
  
  const soldKeg = props.kegList[id];
  dispatch(c.salesReport(soldKeg));
    // dispatch(c.selectedKeg(kegInfo));
    };

  return (
      <React.Fragment>
        <div className='wrapper'>
          <div className='header'>
            <MainHeader/>
          </div>
          <div className='main'>
          <TapList
          tapList = {props.kegList}
          changeSelectedKeg = {handleChangingSelectedKeg}
          />,
          </div>
          <div className='sidebar'>
          <Beer
            beer = {props.selectedKeg}
            onNewSalesReport = {handleSalesReport}/>
          </div>
          <div className='footer'>
          <NewKegForm 
          onNewKegFormCreation = {handleAddingNewKegToList}/>
          </div>
        </div>
      </React.Fragment>
    )
  }

KegControl.propTypes = {
  KegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    kegList: state.kegList,
    selectedKeg: state.selectedKeg, 
    formVisibleOnPage: state.formVisibleOnPage
  }
}
// eslint-disable-next-line
KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
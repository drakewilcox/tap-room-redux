import React from 'react';
import NewKegForm from './KegFormControl/NewKegForm';
import TapList from './KegList';
import MainHeader from './MainHeader';
import Beer from './KegDetails/Beer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions/ActionTypes';
import * as c from './../actions';

function KegControl (props) {

const { dispatch } = props;

const handleAddingNewKegToList = (newKeg) => {
   dispatch(c.addKeg(newKeg));
   dispatch(c.toggleForm());
  }

const handleChangingSelectedKeg = (id) => {
    const kegInfo= props.kegList[id];
    dispatch(c.selectedKeg(kegInfo))
}

const handleSalesReport = (props) => {
  const {id, amtSold } = props;
  console.log(amtSold);
  const action ={
    type: a.SALES_REPORT,
    id: id,
    amtSold: amtSold
  }
  dispatch(action);
  handleChangingSelectedKeg(id);
};

const handleToggleForm = () => {
  dispatch(c.toggleForm());
}
if(props.formVisibleOnPage){
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
          <button onClick={handleToggleForm} ></button>
          </div>
        </div>
      </React.Fragment>
    )
  }
else {
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
        onNewSalesReport = {handleSalesReport}
      />
      </div>
      <div className='footer'>
      <button onClick={handleToggleForm} >ADD NEW KEG</button>
      </div>
    </div>
  </React.Fragment>
  )
  
  }
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
import React from 'react';
import PropTypes from 'prop-types';

const Beer = (props) => {

  function handleSalesReport(event) {
    event.preventDefault();
    let newLevel = props.beer.kegLevel - event.target.pintsSold.value;
    if(props.beer.kegLevel === "Sold Out") {
      newLevel = "Sold Out";
    }
    else if(newLevel <= 0) {
      newLevel = "Sold Out";
    }
    props.onNewSalesReport({
      pintsSold: newLevel,
      id: props.beer.id 
    })
  }
 
  return (
  <React.Fragment>
    <div>
      <h3>Beer Details:</h3>
      <p><em>Click on a menu item to view details and make sales reports: </em></p>
      
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Brewery:</strong> {props.brewery}</p>
      <p><strong>ABV:</strong> {props.abv}</p>
      <p><strong>Origin:</strong> {props.origin}</p>
      <p><strong>Pint Price:</strong> {props.pintPrice}</p>
      <p><strong>KegLevel:</strong> {props.kegLevel}</p>
    </div>
    <form onSubmit={ handleSalesReport }>
      <input
        type='text'
        name='pintsSold'
        placeholder='Pints Sold'/>
      <button type='submit'>Report</button>
    </form>
  </React.Fragment>
  )
}

Beer.propTypes = {
  beer: PropTypes.object,
  onNewSalesReport: PropTypes.func
}

export default Beer; 
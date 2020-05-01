import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegFormCreation({
      name: event.target.name.value, 
      brewery: event.target.brewery.value,
      abv: event.target.abv.value, 
      origin: event.target.origin.value,
      pintPrice: event.target.pintPrice.value,
      kegLevel: 124,
      id: v4()
    })
  }

  return (
    <React.Fragment>
      <footer>
        <h3>Add A New Keg:</h3>
        <form onSubmit={ handleNewKegFormSubmission }>
          <input
            type='text'
            name='name'
            placeholder='Beer Name'/>
          <input
            type='text'
            name='brewery'
            placeholder='Brewery'/>
          <input
            type='text'
            name='abv'
            placeholder='ABV'/>
          <input
            type='text'
            name='origin'
            placeholder='Origin'/>
          <input
            type='text'
            name='pintPrice'
            placeholder='Pint Price'/>
          <button type='submit'>ADD NEW KEG</button>        
        </form>
      </footer>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegFormCreation: PropTypes.func
};

export default NewKegForm;


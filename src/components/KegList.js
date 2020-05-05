import React from 'react';
import PropTypes from 'prop-types';

function KegList(props) {

  

  const renderTableData = () => {
    const sortedKegs = Object.values(props.tapList).sort(function(a,b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    return sortedKegs.map((keg, index) => {
      const { name, brewery, abv, origin, pintPrice, id } = keg
      return (
        <tr key={id} onClick={() => props.changeSelectedKeg(id)}>
          <td>{name}</td>
          <td>{brewery}</td>
          <td>${pintPrice}</td>
          <td>{abv}</td>
          <td>{origin}</td>
        </tr>
      )
    })
  }

  return (
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
              {renderTableData()}
            </tbody>
          </table>
        </main>
    </React.Fragment>
  )
}

KegList.propTypes = {
  tapList: PropTypes.object,
  changeSelectedKeg: PropTypes.func
}

export default KegList;
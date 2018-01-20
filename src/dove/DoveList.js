import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeadRow: {
    height: '40px',
    padding: '5px',
    backgroundColor: '#222',
    color: 'white'
  },
  tableRow: {
    backgroundColor: '#eee',
    height: '30px',
    padding: '5px',
    color: 'black'
  },
};

class DoveList extends Component {
  deleteDove(id) {
    this.props.onUserInputDelete(id);
  }

  getTableRows = (doves) => {
    const doveRows = [];
    // for each dove create a table row with its property values
    doves.forEach((dove) => {
      // assign color and state values to dove
      const styleColor = {width: '150px', backgroundColor: `${dove.color}`};
      const active = dove.active ? 'Active': 'Inactive';
      doveRows.push(
        <tr key={dove.id} style={style.tableRow}>
          <td>{dove.id}</td>
          <td style={styleColor}></td>
          <td>{dove.last_command}&nbsp;</td>
          <td>{dove.images_collected}</td>
          <td>{active}</td>
          <td>{dove.deorbit_dt}</td>
          <td>
            <a onClick={() => this.deleteDove(dove.id)}>
              <span className="glyphicon glyphicon-remove"></span>
            </a>
          </td>
        </tr>
      );
    });
    return doveRows;
  }

  render(){
    const doves = this.getTableRows(this.props.doves);
    return(
      <div>
        <table className='list-group' style={style.table}>
          <thead>
            <tr style={style.tableHeadRow}>
              <td>ID</td>
              <td>Color</td>
              <td>Last Command&nbsp;</td>
              <td>Images Collected</td>
              <td>Status</td>
              <td>deorbit_dt</td>
              <td>Delete Dove</td>
            </tr>
          </thead>
          <tbody>
            {
              doves
            }
          </tbody>
        </table>
      </div>
    );
  }
}

DoveList.propTypes = {
  doves: PropTypes.array,
  onUserInputDelete: PropTypes.func,
};

export default DoveList;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DoveList from './dove/DoveList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  getDoves,  
  addDove, 
  deleteDove, 
  setFilters } from './Actions';

import Filters from './dove/Filters';
import AddNewDove from './dove/AddNewDove';

const style = {
  app: {
    textAlign: 'center',
    paddingBottom: '50px',
    position:'relative',
    marginTop: '50px',
  },
  appHeader: {
    position: 'absolute',
    backgroundColor: '#222',
    height: '60px',
    width: '100%',
    textAlign: 'center',
    color: 'white'
  },
  appFooter: {
    backgroundColor: '#222',
    height: '30px',
    padding: '20px',
    color: 'white'
  },
};

class App extends Component {
  
  componentWillMount() {
    this.props.getDoves();
  }

  render() {
    const doves = this.props.doves;
    return (
      <div>
        <header style={style.appHeader}>
          <h1>List of Doves</h1>
        </header>
        <br/>
        <div className='container' style={style.app}>
          <Filters onUserInput={this.props.setFilters} />
          <br />
          <br />
          <AddNewDove onUserInput={this.props.addDove} />
          <DoveList 
            doves={doves} 
            onUserInputDelete={this.props.deleteDove} />
        </div>
        <footer className='navbar-fixed-bottom' style={style.appFooter}>
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  doves: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    doves: state.doves,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getDoves: getDoves,  
    addDove: addDove,
    deleteDove: deleteDove,
    setFilters: setFilters
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

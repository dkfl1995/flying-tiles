import React, { Component } from 'react';
import AppView from './AppView';
import {connect, dispatch} from 'react-redux';
import { toggleTile } from '../../actions/actions';

const mapStateToProps = (state) => {
  return {
    tiles: state.tiles
  };
};

const mapDispatchToProps = (dispatch) => {
  return () => {
    toggle: (name) => (dispatch(toggleTile(name)));
  };
};


class AppContainer extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
    
  }
  componentDidMount(){
    
  }
  render() {
    var tiles = this.props.tiles;
    console.log(tiles);
    return (
      <div>
        <AppView tiles={tiles} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

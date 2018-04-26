import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navbar from '../Navbar/Navbar';
import ContentContainer from '../ContentContainer/ContentContainer';

class Dashboard extends Component {
  state = {
    currentDisplay: 'test'
  }

  componentDidMount() {
    this.state.currentDisplay == 'test' ? 'hey' : 'yo'
  }

  render() {
    return (
      <MuiThemeProvider>
        <Navbar />
        <ContentContainer children={this.state.currentDisplay}/>
        oh hai mark
      </MuiThemeProvider>
    )
  }
}

export default Dashboard;
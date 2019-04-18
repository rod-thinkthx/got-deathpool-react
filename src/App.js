import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'

// const apiUrl = 'http://localhost:3005'

class App extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      isLoading: true,
      characters: {},
    }
  }

  componentWillMount = () => {
    axios.get(`http://localhost:3005/characters`)
      .then(({data}) => {
        console.log('data', data);
        // setTimeout(() => {
          this.setState({
            isLoading: false,
            characters: data,
          })
        // }, 1500)
      })
      .catch(err => console.log('err', err))
  }

  componentDidMount = () => {
    console.log('# componentDidMount');
  }
  
  render() {
    
    console.log('RENDER!!!!!');

    if (this.state.isLoading) {
      return (
        <h1>Loading...</h1>
      );
    } else {
      return (
        <div className="App">
          <table>
              <tr>
                <td>Name</td>
                <td>Is Dead?</td>
                <td>Is WhiteWalker?</td>
              </tr>
          {this.state.characters.map((character) => {
            return (
              <tr key={character.id}>
                <td>{character.fullname}</td>
                <td>{character.is_dead ? 'yes' : 'no'}</td>
                <td>{character.is_whitewalker ? 'yes' : 'no'}</td>
              </tr>
            )
          })}
          </table>
        </div>
      );
    }
  }

}

export default App;

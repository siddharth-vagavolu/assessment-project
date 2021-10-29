// importing essentials
import React, { Component } from 'react';

// importing custom components
import Nav from './Components/Navbar/Nav';
import SearchBox from './Components/SearchBox/SearchBox';
import CardList from './Components/CardList/CardList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: '',
      currentMovie: null
    }
    // tis key is Sid's persoanl use key (TODO: replace with environment variable)
    this.apiKey = "e07ca96108facc423daecfaf911ff712";
  }

  // this is the function that handles the search
  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then (data => {
      console.log(data);
      this.setState({
        movies: [...data.results],
        totalResults: data.total_results
      })
    })
  }

  // this is the function that handles the change
  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render () {
    return (
      <div className="App">
        <Nav />
        <SearchBox handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <CardList movies={this.state.movies}/>
      </div>
    );
  }

}

export default App;

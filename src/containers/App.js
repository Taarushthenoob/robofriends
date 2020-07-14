import React from 'react';

import './App.css';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    // this.state.searchField = event.target.value;
    this.setState({ searchField: event.target.value });
  };

  render() {
    let filteredRobots = [];
    if (this.state.robots.length) {
      filteredRobots = this.state.robots.filter((robot) => {
        return robot.name
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase());
      });
    }
    return !this.state.robots.length ? (
      <h1 className="pa6 tc f1">Loading...</h1>
    ) : (
      <div className="tc bbbb">
        <h1>Robofriends</h1>
        <ErrorBoundary>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

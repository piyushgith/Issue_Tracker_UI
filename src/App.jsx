import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './components/view/About';
import Navbar from './components/view/CustomNavbar';
import Home from './components/view/Home';
import IssueList from './components/view/IssueList';
import Search from './components/view/IssueSearch';
import News from './components/view/News';
import IssueCreate from './components/view/IssueCreate'
import IssueUpdate from './components/view/IssueUpdate'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/issuelist" component={IssueList} />
          <Route path="/search" component={Search} />
          <Route path="/issuecreate" component={IssueCreate} />
          <Route path="/issueupdate/:id" component={IssueUpdate} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
        </div>
      </Router>
    );
  }
}

export default App;

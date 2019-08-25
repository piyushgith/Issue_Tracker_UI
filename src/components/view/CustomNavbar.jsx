import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Issue Tracker</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={6} componentClass={Link} href="/issuecreate" to="/issuecreate">
            Create Issue
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/issuelist" to="/issuelist">
              Issue List
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/search" to="/search">
              Search
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
            {/* <NavItem eventKey={5} componentClass={Link} href="/news" to="/news">
              News
            </NavItem> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

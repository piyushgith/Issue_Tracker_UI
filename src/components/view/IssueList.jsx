import React, { Component } from 'react'
import axios from "axios";
import TableRow from "./TableRow";
//const API_URL1 = "http://jsonplaceholder.typicode.com";
const API_URL = "http://localhost:9999";

class IssueList extends Component {
   
  state = {
    issue: []
  };

  componentDidMount() {
    this.getList()  
  }

  getList() {
    const url = `${API_URL}/getIssues`;
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ issue: data });
        console.log(this.state.issue);
      });
  }

  tabRow() {
    return this.state.issue.map((object, i) => {
      return <TableRow obj={object} key={i} getList={this.getList.bind(this)} />;
    });
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ fontWeight: "bold", fontSize: 40 }}>Defect Details</div>
        <div style={{ fontWeight: "normal", fontSize: 20, color: "red" }}>
          Search Results : {this.state.issue.length}
        </div>
        <br />
        <table
          style={{ width: "100%" }}
          className="table table-bordered table-hover table-striped"
        >
          <thead className="thead-light">
            <tr className="table-primary">
              <th>Ticket Number</th>
              <th>Defect Category</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Change Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default IssueList;
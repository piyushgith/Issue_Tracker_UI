import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

class TableRow extends Component {

  constructor(){
    super();
    this.state = {issue: []}
    this.closeOnSelect = this.closeOnSelect.bind(this);
  }

  closeOnSelect(e){
    //alert(this.props.obj.id);
    var issue = {
      id:this.props.obj.id,
      description: this.props.obj.description,
      category: this.props.obj.category,
      status: this.props.obj.status,
      priority: this.props.obj.priority
    };
    axios
      .put("http://localhost:9999/closeIssue/"+this.props.obj.id, issue)
      .then(response => response.data)
      .then(data => {
        this.setState({ issue: data });
        alert("Issue has been closed with ID: " + this.props.obj.id) ;
        console.log("Issue has been closed with ID: " + this.props.obj.id) ;
      });
  }

  render() {
    return (
      // prettier-ignore
      <tr>
        <td>{this.props.obj.id}</td>
        <td>{this.props.obj.category}</td>
        <td>{this.props.obj.description}</td>
        <td>{this.props.obj.priority}</td>
        <td>{this.props.obj.status}</td>
        <td>
        <Button bsStyle="primary" value={this.props.obj.id} onClick={this.closeOnSelect}> Close Defects</Button>
        </td>
      </tr>
    );
  }
}

export default TableRow;

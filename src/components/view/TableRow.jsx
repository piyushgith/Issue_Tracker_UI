import React, { Component } from "react";

class TableRow extends Component {
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
          <a href={`http://localhost:9999/getIssue/${this.props.obj.id}`} target="_blank" rel="noopener noreferrer">
            Close Defects
          </a>
        </td>
      </tr>
    );
  }
}

export default TableRow;

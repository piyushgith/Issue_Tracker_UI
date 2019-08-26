import React, { Component } from 'react'
import axios from "axios";

export default class IssueUpdate extends Component {
    constructor() {
      super();
      this.state = {
        issue: [],
        id: "",
        category: "",
        description: "",
        status: "",
        priority: ""
      };
      //this.handleSelectChange = this.handleSelectChange.bind(this);
      //this.handleSubmit = this.handleSubmit.bind(this);
      //this.handleTextChange = this.handleTextChange.bind(this);
    }
  
    componentDidMount() {
      axios
        .get("http://localhost:9999/getIssue/" + this.props.match.params.id)
        .then(response => response.data)
        .then(data => {
          this.setState({ issue: data });
          console.log(this.state.issue);
        });
    }
  
    render() {
      return (
        // prettier-ignore
        <React.Fragment>
           <form>
            <div className="form-group">
              <label style={{fontWeight: "bold"}}>Defect Catagories: </label>
              <input style={{ width: "40%" }} type="text" className="form-control"
                value={this.state.issue.category}
                id="defCatagory" placeholder="Enter Defect Catagories" name="defCatagory" onChange={this.handleTextChange}/>
            </div>
  
            <div className="form-group">
              <label style={{fontWeight: "bold"}}>Description:</label>
              <textarea style={{ width: "40%" }} type="text" className="form-control"
                value={this.state.issue.description}
                id="description" placeholder="Enter Description" name="description" onChange={this.handleTextChange}/>
            </div>
  
            <div>
                <label style={{fontWeight: "bold",alignContent:"space-between"}}>Status:</label>
                <select style={{width:"36%",alignSelf:"right"}} name="status"id="status" value={this.state.issue.status} onChange={this.handleSelectChange}>
                    <option value="">Please Select</option>
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Need Clarification">Need Clarification</option>
                    <option value="Close">Close</option>
                </select>
            </div>
  
            <div>
                <label style={{fontWeight: "bold",alignContent:"space-between"}} >Priority:  </label>
                <select style={{width:"35%",alignSelf:"right"}} name="priority"id="priority" value={this.state.issue.priority} onChange={this.handleSelectChange}>
                    <option value="">Please Select {this.state.issue.priority}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
  
            <br></br>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Update Defect</button>
          </form>
        </React.Fragment>
      );
    }
}

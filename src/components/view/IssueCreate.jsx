import React, { Component } from 'react'
import axios from "axios";

class IssueCreate extends Component {
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
      this.handleSelectChange = this.handleSelectChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
    }
    handleSelectChange(e) {
      if (e.target.name === "priority") {
        this.setState({
          priority: e.target.value
        });
      }
      if (e.target.name === "status") {
        this.setState({
          status: e.target.value
        });
      }
    }
    handleTextChange(e) {
      if (e.target.name === "description") {
        this.setState({
          description: e.target.value
        });
      }
      if (e.target.name === "defCatagory") {
        this.setState({
          category: e.target.value
        });
      }
    }
  
    handleSubmit(e) {
      e.preventDefault();
      this.insertNewIssue(this);
    }
  
    insertNewIssue(e) {
      var issue = {
        description: e.state.description,
        category: e.state.category,
        status: e.state.status,
        priority: e.state.priority
      };

      axios
        .post("http://localhost:9999/saveIssue", issue)
        .then(response => response.data)
        .then(data => {
          this.setState({ issue: data });
          console.log(this.state.issue, data);
          this.props.history.push('/issuelist')
          //alert("Issue has been create with ID: " + data.issue.id) ;
        });
       
    }
    //componentDidUpdate() {}
  
    render() {
      return (
        // prettier-ignore
        <React.Fragment>
           <form>
            <div className="form-group">
              <label style={{fontWeight: "bold"}}>Defect Catagories: </label>
              <input style={{ width: "40%" }} type="text" className="form-control"
                //   value={this.state.name}
                id="defCatagory" placeholder="Enter Defect Catagories" name="defCatagory" onChange={this.handleTextChange}/>
            </div>
  
            <div className="form-group">
              <label style={{fontWeight: "bold"}}>Description:</label>
              <textarea style={{ width: "40%" }} type="text" className="form-control"
                //value={this.state.name}
                id="description" placeholder="Enter Description" name="description" onChange={this.handleTextChange}/>
            </div>
  
            <div>
                <label style={{fontWeight: "bold",alignContent:"space-between"}} >Status:  </label>
                <select style={{width:"36%",alignSelf:"right"}} name="status"id="status" onChange={this.handleSelectChange}>
                    <option value="">Please Select</option>
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Need Clarification">Need Clarification</option>
                    <option value="Close">Close</option>
                </select>
            </div>
            <br></br>
            <div>
                <label style={{fontWeight: "bold",alignContent:"space-between"}} >Priority:  </label>
                <select style={{width:"35%",alignSelf:"right"}} name="priority"id="priority" onChange={this.handleSelectChange}>
                    <option value="">Please Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
  
            <br></br>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Create Defect</button>
          </form>
        </React.Fragment>
      );
    }
}

export default IssueCreate;
import React, { Component } from 'react'
import axios from "axios";

export default class IssueUpdate extends Component {
    constructor() {
      super();
      this.state = {
        id: "",
        description: "",
        category: "",
        priority: "",
        status: ""
      };
      this.handleSelectChange = this.handleSelectChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
    }
  
    componentDidMount() {
      axios
        .get("http://localhost:9999/getIssue/" + this.props.match.params.id)
        .then(response => response.data)
        .then(data => {
          this.setState({ 
            id: this.props.match.params.id,
            description: data.description,
            category: data.category,
            priority: data.priority,
            status: data.status            
          });
        });
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

    handleSubmit(e){
      e.preventDefault();
       var issue = {
         id:this.state.id,
         description: this.state.description,
         category: this.state.category,
         status: this.state.status,
         priority: this.state.priority
       };

      axios
        .put("http://localhost:9999/updateIssue/"+this.state.id, issue)
        .then(response => response.data)
        .then(data => {
          this.setState({ issue: data });
          console.log(this.state.issue, data);
         // alert("Issue has been Updated with ID: " + data.issue.id) ;
          this.props.history.push('/issuelist')
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
                value={this.state.category}
                id="defCatagory" placeholder="Enter Defect Catagories" name="defCatagory" onChange={this.handleTextChange}/>
            </div>
  
            <div className="form-group">
              <label style={{fontWeight: "bold"}}>Description:</label>
              <textarea style={{ width: "40%" }} type="text" className="form-control"
                value={this.state.description}
                id="description" placeholder="Enter Description" name="description" onChange={this.handleTextChange}/>
            </div>
  
            <div>
                <label style={{fontWeight: "bold",alignContent:"space-between"}}>Status:</label>
                <select style={{width:"36%",alignSelf:"right"}} name="status"id="status" value={this.state.status} onChange={this.handleSelectChange}>
                    <option value="">Please Select</option>
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Need Clarification">Need Clarification</option>
                    <option value="Close">Close</option>
                </select>
            </div>
  
            <div>
                <label style={{fontWeight: "bold",alignContent:"space-between"}} >Priority:  </label>
                <select style={{width:"35%",alignSelf:"right"}} name="priority"id="priority" value={this.state.priority} onChange={this.handleSelectChange}>
                    <option value="">Please Select</option>
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

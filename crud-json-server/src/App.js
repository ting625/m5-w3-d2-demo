import React from "react";
import Lists from "./Lists"; 
import CreateList from "./CreateList"; 
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        alldata: [],
        singledata: {
          title: "",
          author: ""
        }
      };
    }

    getLists = () => {
      fetch("http://localhost:5001/posts") /* update posts */
      .then(res => res.json())
      .then(result => 
        this.setState ({
          loading: false,
          alldata: result
        })
      )
      .catch(console.log);
    }
    
    render() {
      const listTable = this.state.loading? ( <span>Loading Data.......Please be patience.</span>) : (<Lists alldata ={this.state.alldata} />);
      
      return(
        <div className="container">
          <span className="title-bar">
             <button 
             type="button" 
             className="btn btn-primary"
             onClick={this.getLists}
             >
                Get Lists
             </button>
             <CreateList singledata={this.state.singledata} />
          </span>
          {listTable}
        </div>
      )
    }
  }

export default App;
var React = require("react");

var Search = require("./children/Search");
var Results = require("./children/Results");


var helpers = require("./utils/helpers.js");


var Main = React.createClass({

	getInitialState: function() {
    
    return { userSearch: "",
    		results: "" }

  	this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  },

	componentDidUpdate(prevProps, prevState) {

    if (prevState.userSearch !== this.state.userSearch) {

      	helpers.findNews(this.state.userSearch)
      		.then((data) => {
	        
	        if (data !== this.state.results) {
          		console.log(data);
          		this.setState({ results: data });
	    	}
		});
  	}
  },

	setSearch(userSearch) {
		console.log("setSearch:" + userSearch);
    	this.setState({ userSearch: userSearch });
   
  },

	render: function() {
		return (
			<div className="container">
				<div className = "row">
					<h1 className="text-center">NYT Article Search</h1>
						<p className="text-center">
	              			<em>Enter a search topic and a desired date range to find articles</em>
	            		</p>
	            </div>

	            <div className = "row">
	            	<Search setSearch={this.setSearch} />
	            </div>
	           

	            <div className = "row">
	            	<Results title={this.state.results} />
	            </div>      
	        </div>
		);
	}
});

module.exports =  Main;
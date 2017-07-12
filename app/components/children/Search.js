var React = require("react");
var helpers = require("../utils/helpers");


var Search = React.createClass({
	getInitialState: function() {
    return { userSearch: "" };
  	},

  	handleChange: function(event) {
    this.setState({ userSearch: event.target.value });
  	},

  	handleSubmit: function(event) {
    event.preventDefault();

    console.log(this.state.userSearch);

    this.props.setSearch(this.state.userSearch);

    this.setState({ userSearch: "" });
  	
	  },


	render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search Articles</h3>
        </div>

        <div className="panel-body text-center">

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Topic/Keyword Search</strong>
              </h4>
   
              <input
                value={this.state.userSearch}
                type="text"
                className="form-control text-center"
                id="userSearch"
                onChange={this.handleChange}
                required
              />
              <br />
              <button className="btn btn-primary" type="submit">Submit</button>
            </div>
          </form>

        </div>
      </div>
    );
  }
});


module.exports = Search;
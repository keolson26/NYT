var React = require("react");

var Results = React.createClass({
	render: function() {

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">

          <p>{this.props.title}<button className="btn btn-success" type="submit">Save</button></p>
          
        </div>
      </div>
    );
  }

});


module.exports = Results;

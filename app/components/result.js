var React = require("react");

var Result = React.createClass({
  render: function(){
    return(
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Result</h3>
            </div>
            <div className="panel-body text-center">
              <h3>Result div</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Result;

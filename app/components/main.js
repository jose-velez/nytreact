// Include React
var React = require("react");

// Include the subcomponents
var Search = require("./search");

// Creating the main component

var Main = React.createClass({


  // Render the page

  render: function(){
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>NYT React</h2>
            <p>
              <em>NYT React</em>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Search</h3>
              </div>
              <div className="panel-body text-center">
                <form>
                  <label for="topic">Topic:</label>
                  <input type="text" name="topic" id="topic-name"/>
                  <label for="startYear">Start Year:</label>
                  <input type="text" name="startYear" id="start-year"/>
                  <label for="endYear">End Year:</label>
                  <input type="text" name="endYear" id="end-year"/>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
          <result/>
      </div>
    );
  }
});

module.exports = Main;

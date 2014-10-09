/** @jsx React.DOM */

/* to rename the component, change name of ./component.js and  "dependencies" section of ../../component.js */

//var othercomponent=Require("other"); 
var sutranames=Require("dataset").sutranames; 
var taishonames=Require("dataset").taishonames;

var fromsutra = React.createClass({
  getInitialState: function() {
    return {};
  },
  renderSutraName: function(){
    {this.props.searchSutraName}
  },
  render: function() {
    return (
      <div>
        {this.sutranames.length}
        {this.taishonames.length}
      </div>
    );
  }
});
module.exports=fromsutra;
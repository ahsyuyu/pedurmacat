/** @jsx React.DOM */

/* to rename the component, change name of ./component.js and  "dependencies" section of ../../component.js */

//var othercomponent=Require("other"); 
var fromsutra = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <div>
        Rendering fromsutra
      </div>
    );
  }
});
module.exports=fromsutra;
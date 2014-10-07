/** @jsx React.DOM */

/* to rename the component, change name of ./component.js and  "dependencies" section of ../../component.js */

var searchbar=Require("searchbar"); 
var fromsutra=Require("fromsutra"); 
var corressutras=Require("corressutras"); 
var api=Require("dataset").api; 
var main = React.createClass({
  getInitialState: function() {
    return {};
  },
  search: function(tofind){
    var t=api.search(tofind);
    console.log(t);
  },
  render: function() {
    return (
      <div>
        <searchbar search={this.search} />
        <fromsutra />
        <corressutras />
      </div>
    );
  }
});
module.exports=main;
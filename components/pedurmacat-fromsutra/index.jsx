/** @jsx React.DOM */

/* to rename the component, change name of ./component.js and  "dependencies" section of ../../component.js */

//var othercomponent=Require("other"); 
var sutraimage=Require("sutraimage");
var sutranames=Require("dataset").sutranames; 
var taishonames=Require("dataset").taishonames;

var fromBar = React.createClass({
  searchSutraName:function(KJing){
    for(var i=0; i<sutranames.length; i++){
      if(KJing == sutranames[i][0]) return sutranames[i][1];
      //else return "";
    } 
  },
  render: function(){
    return  (
      <div>       
        Sutra: {this.props.KJing}
        Sutra Name: {this.searchSutraName(this.props.KJing)}
        Taisho Name: 
      </div>
    );
  }
});

var fromsutra = React.createClass({
  getInitialState: function() {
    return {};
  }, 
  render: function() {
    return (
      <div>
        {this.props.fromRecen}       
        <fromBar KJing={this.props.KJing} fromRecen={this.props.fromRecen}/>
        <sutraimage volpage={this.props.volpage} recen={this.props.fromRecen} parseVolPage={this.props.parseVolPage} />
        //recen={this.state.fromRecen} volpage_p={this.state.volpage_p}
      </div>
    );
  }
});
module.exports=fromsutra;
/** @jsx React.DOM */

/* to rename the component, change name of ./component.js and  "dependencies" section of ../../component.js */

var searchbar=Require("searchbar"); 
var fromsutra=Require("fromsutra"); 
var corressutras=Require("corressutras"); 
var dataset=Require("dataset"); //{dataset.hPedurma};
var api=Require("dataset").api;

//var longnames={"J":"Lijiang","D":"Derge","C":"Cone","K":"Pedurma","N":"Narthang","H":"Lhasa","U":"Urga"};
var longnames={"J":"Lijiang","D":"Derge","H":"Lhasa"};
//var mappings={"J":jPedurma,"D":dPedurma,"C":cPedurma,"K":kPedurma,"N":nPedurma,"H":hPedurma,"U":uPedurma};
var mappings={"J":dataset.jPedurma,"D":dataset.dPedurma,"H":dataset.hPedurma};

var main = React.createClass({
  getInitialState: function() {
    return {};
  },
  search: function(volpage,fromRecen){
    for(var to in mappings){
      var res = api.dosearch(volpage,mappings[fromRecen],mappings[to]);
      //res = [版本縮寫,[[經號],[範圍],[對照經號],[對照範圍],[對照行],[K經號]]]     
    };
    this.setState({fromRecen:longnames[fromRecen], KJing:res[1][5]});   
  },
  searchSutraName:function(KJing){
    for(var i=0; i<sutranames.length;i++){
      if(KJing == sutranames[i][0]){
        this.setState({sutranames[i][1]});
      }
    }
  },
  render: function() {
    return (
      <div>
        <searchbar search={this.search} />        
        <fromsutra fromRecen={this.state.fromRecen} KJing={this.state.KJing} searchSutraName={this.searchSutraName}/>
        <corressutras />
      </div>
    );
  }
});
module.exports=main;
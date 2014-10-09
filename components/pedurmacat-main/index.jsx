/** @jsx React.DOM */

/* to rename the component, change name of ./component.js and  "dependencies" section of ../../component.js */

var searchbar=Require("searchbar"); 
var fromsutra=Require("fromsutra"); 
var corressutras=Require("corressutras"); 
var dataset=Require("dataset"); //{dataset.hPedurma};
var api=Require("dataset").api;
var sutraimage=Require("sutraimage");

//var longnames={"J":"Lijiang","D":"Derge","C":"Cone","K":"Pedurma","N":"Narthang","H":"Lhasa","U":"Urga"};
var longnames={"J":"Lijiang","D":"Derge","H":"Lhasa"};
//var mappings={"J":jPedurma,"D":dPedurma,"C":cPedurma,"K":kPedurma,"N":nPedurma,"H":hPedurma,"U":uPedurma};
var mappings={"J":dataset.jPedurma,"D":dataset.dPedurma,"H":dataset.hPedurma};

var main = React.createClass({
  getInitialState: function() {
    return {};
  },
  search: function(volpage,from){
    for(var to in mappings){
      if(mappings[from].rcode != mappings[to].rcode){
        var res = api.dosearch(volpage,mappings[from],mappings[to]);
        //res = [版本縮寫,[[經號],[範圍],[對照經號],[對照範圍],[對照行],[K經號]]]
      }     
    };
    this.setState({volpage:volpage, fromRecen:longnames[from], KJing:res[1][5][0]});   
  },
  parseVolPage: function(str){
    var str=str || "";
    var s=str.match(/(\d+)[@.](\d+)([abcd]*)(\d*)/);
    //var s=str.match(/(\d+)[@.](\d+)([abcd])(\d*)-*(\d*)([abcd]*)(\d*)/);
    if(!s){
      console.log("error!",str);
      return "";
    }
    return {vol:parseInt(s[1]),page:parseInt(s[2]),side:s[3] || "x",line:parseInt(s[4]||"1")};
    //return {vol:parseInt(s[1]),page:parseInt(s[2]),side:s[3],line:parseInt(s[4]||"1"),page2:parseInt(s[5]),side2:s[6],line2:parseInt(s[7]||"1")};
  },
  render: function() {
    return (
      <div>
        <searchbar search={this.search} />        
        <fromsutra volpage={this.state.volpage} fromRecen={this.state.fromRecen} KJing={this.state.KJing} parseVolPage={this.parseVolPage}/>
        <corressutras />
      </div>
    );
  }
});
module.exports=main;
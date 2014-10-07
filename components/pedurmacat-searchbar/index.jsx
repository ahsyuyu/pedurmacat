/** @jsx React.DOM */

/* to rename the component, change name of ./component.js and  "dependencies" section of ../../component.js */

//var othercomponent=Require("other"); 
var searchbar = React.createClass({
  getInitialState: function() {
    return {};
  },
  search: function() {
    var tofind=this.refs.volpage.getDOMNode().value;
    {this.props.search(tofind)}
  },
  render: function() {
    return(
      <div className="row col-lg-offset-4">
        <div className="col-lg-2">  
          <select NAME="form_name" ID="form_name" className="form-control">
          <option NAME="version" VALUE="D">Derge</option>
          <option NAME="version" VALUE="J">Lijiang</option>     
          <option NAME="version" VALUE="C">Cone</option>
          <option NAME="version" VALUE="N">Narthang</option>
          <option NAME="version" VALUE="H">Lhasa</option>
          <option NAME="version" VALUE="U">Urga</option>
          </select>
        </div>      
        <div className="col-lg-3">
          <input className="form-control" type="text" ref="volpage" defaultValue="4.12a2"/>
        </div>
        <button className="btn btn-success" onClick={this.search} >Search</button>
      </div>
    ); 
  }
});
module.exports=searchbar;
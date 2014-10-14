/** @jsx React.DOM */

/* to rename the component, change name of ./component.js and  "dependencies" section of ../../component.js */

//var othercomponent=Require("other"); 
//var longnames={"J":"Lijiang","D":"Derge","C":"Cone","K":"Pedurma","N":"Narthang","H":"Lhasa","U":"Urga"};
var sutraimage = React.createClass({
  getInitialState: function() {
    return {};
  },
  renderImage: function(corresline,to,hasImage){//corresline:對照行(分開成物件的對照行)
    //去掉行數 把vol page side 湊成檔名
    corresline=corresline||"";
    to=to||"";
    var filename=this.id2imageFileName(corresline);//[函號(用來進入該函資料夾),檔名]
    if(hasImage){
      return "http://dharma-treasure.org/kangyur_images/"+to.toLowerCase()+'/'+filename[0]+'/'+filename[1];
    } else return "";
    
  },
  id2imageFileName: function(id){
    var p="00"+id.vol;
    var nameVol=p.substr(p.length-3);
    var q="00"+id.page;
    var namePageSide=q.substr(q.length-3)+id.side;
    var filename=[nameVol,nameVol+"-"+namePageSide+".jpg"];

    return filename;
  },
  render: function() {
    var recen=this.props.recen||"";
    if(recen.match(/[CPNU]/)){
      var hasImage=false;
    } else hasImage=true;
    return (
      <div>
        <img src={this.renderImage(this.props.volpage,this.props.recen,hasImage)}></img>
      </div>
    );
  }
});
module.exports=sutraimage;
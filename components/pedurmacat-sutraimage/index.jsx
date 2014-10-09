/** @jsx React.DOM */

/* to rename the component, change name of ./component.js and  "dependencies" section of ../../component.js */

//var othercomponent=Require("other"); 
//var longnames={"J":"Lijiang","D":"Derge","C":"Cone","K":"Pedurma","N":"Narthang","H":"Lhasa","U":"Urga"};
var longnames={"J":"Lijiang","D":"Derge","H":"Lhasa"};

var sutraimage = React.createClass({
  getInitialState: function() {
    return {};
  },
  showImage: function(corresline,to){//corresline:對照行(分開成物件的對照行)
    //去掉行數 把vol page side 湊成檔名
    var filename=this.id2imageFileName(corresline);//[函號(用來進入該函資料夾),檔名]
    return '<img src="http://dharma-treasure.org/kangyur_images/'+to.toLowerCase()+'/'+filename[0]+'/'+filename[1]+'"></a>';
  },

  id2imageFileName: function(id){
    //var id=parseVolPage(corresline);
    var realpage=this.snap2realpage(id);
    var p="00"+realpage.vol;
    var nameVol=p.substr(p.length-3);
    var q="00"+realpage.page;
    var namePageSide=q.substr(q.length-3)+realpage.side;
    var filename=[nameVol,nameVol+"-"+namePageSide+".jpg"];

    return filename;
  },
  snap2realpage: function(id){
    if(id.side == "c"){
      id.side=id.side.replace("c","b");
    }
    else if(id.side == "d"){
      id.page=id.page+1;
      id.side="a";
    }

    return id;
  },
  render: function() {
    var volpage_p=this.props.parseVolPage(this.props.volpage);
    return (
      <div>
        {this.showImage(volpage_p,this.props.recen)}
      </div>
    );
  }
});
module.exports=sutraimage;
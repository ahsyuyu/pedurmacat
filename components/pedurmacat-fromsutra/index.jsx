/** @jsx React.DOM */

/* to rename the component, change name of ./component.js and  "dependencies" section of ../../component.js */

//var othercomponent=Require("other"); 
var sutraimage=Require("sutraimage");
var sutranames=Require("dataset").sutranames; 
var taishonames=Require("dataset").taishonames;
var pedurma_taisho=Require("dataset").pedurma_taisho;
var fromBar = React.createClass({
  searchSutraName:function(KJing){
    for(var i=0; i<sutranames.length; i++){
      if(KJing == sutranames[i][0]) return sutranames[i][1];
      //else return "";
    } 
  },
  searchNameCh: function(KJing){
    //判斷輸入是J版本還是D版本再依其版本取得K
    //在pedurma_taisho從K值轉換成中文經號
    var result=[];
    for(var i=0;i<pedurma_taisho.length;i++){
      if(KJing==pedurma_taisho[i][0]){
        var taisho=pedurma_taisho[i][1].split(",");  ////對照到中有多個經時

        //回去taishonames找到該項，得到中文經名
        var result=taisho.map(this.taisho2taishoName);//[T01n0001,經名]
        //將中文經名加上超連結
        return result;
      }
    }
  },
  taisho2taishoName: function(taisho){ //把pedurma_taisho裡的taisho號碼轉換為經名
    for(var i=0;i<taishonames.length;i++){
      var taishoNum=parseInt(taishonames[i][0].substr(4,4));//taishonames[i][0].length-4
      if(parseInt(taisho) == taishoNum){
        return this.addLink(taishonames[i]);//[T01n0001,經名]
      }
    }
  },
  addLink: function(taisho){
    var link= taisho[0];
    var name= taisho[1];
    if(link.match(/T0.n0220/)){
      link=link.substr(0,link.length-1);
    }
    return <span><a target="_new" href={"http://tripitaka.cbeta.org/"+link}>{name}</a>、</span>

  },
  render: function(){
    return  (
      <div>
        <span className="recen">{this.props.fromRecen}</span>       
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sutra: {this.props.fromJing}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sutra Name: {this.searchSutraName(this.props.KJing)}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Taisho Name: {this.searchNameCh(this.props.KJing)}
      </div>
    );
  }
});

var fromsutra = React.createClass({
  getInitialState: function() {
    return {recen:""};
  }, 
  render: function() {
    var volpage=this.props.parseVolPage(this.props.volpage);
    return (
      <div>     
        <fromBar KJing={this.props.KJing} fromRecen={this.props.fromRecen} fromJing={this.props.fromJing} />
        <sutraimage volpage={volpage} recen={this.props.fromRecen} />
      </div>
    );
  }
});
module.exports=fromsutra;
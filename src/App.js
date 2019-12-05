import React ,{Component} from 'react';
import logo from './logo.jpg';
import './App.css';
import Note from './components/Note.js';

console.clear();
class App extends Component {

constructor(props){
                  super(props);
                  this.state={
                  inpColCount: '6',
                  noteText: '',
                  nodeList : [],
                  columnArray :[],
                  }
                  }



handleKeyPress = (event) =>{
if(event.key === 'Enter'){
this.processInputXML()

}
}

processInputXML(){
this.state.nodeList=[]
if(this.state.noteText===''){
alert("Blank Input")
return
}

console.log("Input XML is"+this.state.noteText)
let domParser = new DOMParser();
let domXml = domParser.parseFromString(this.state.noteText, 'text/xml');
var rootElement = domXml.documentElement;



         var treeWalker = domXml.createTreeWalker(
           rootElement,
           NodeFilter.SHOW_ELEMENT,
           { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
           false
         );
         //var nodeList = [];

         while(treeWalker.nextNode()){
        var currentEle= treeWalker.currentNode;
         console.log("Current Element is "+currentEle.tagName);
               var attrs = currentEle.attributes;
                var output = "";
                for(var i = attrs.length - 1; i >= 0; i--) {
                  output = attrs[i].name ;
                  console.log(output)
                  this.state.nodeList.push(output);
                  }
         }
         console.log("column set is "+this.state.inpColCount)
         console.log("Atrribute Count "+this.state.nodeList.length);

         this.state.columnArray = this.state.inpColCount.split(",");

             console.log("sadsad "+this.state.columnArray);
this.setState({noteText : ''});
}
updateNoteText(noteText){
 this.setState({ noteText : noteText.target.value})
}

updateCount(inpColCount){
 this.setState({ inpColCount : inpColCount.target.value})

}

deleteMethod() {
console.log("FFFFFFFFFFFFFFFFFFFFFF")

}


render(){
let notes= this.state.nodeList.map((val,key) => {
return <Note key={key} text={val} colArry={this.state.columnArray}/>
})
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div  onClick={this.props.deleteMethod}>
                        <table id='AAAAA'>
                         <tbody>
                         <tr><td>
      <textarea
      	className="inputXMLArea"
      	   value={this.state.noteText}
      	  ref={((inputXML) => {this.textInput123 = inputXML})}
      	  onChange={noteText => this.updateNoteText(noteText)}
      	onKeyPress={this.handleKeyPress.bind(this)}

      	/></td>

                            	<td>
                                      	<div className="btn"  onClick={this.processInputXML.bind(this)}>Convert</div>
                                      </td>
      	</tr>
      	<tr></tr>


      <tr>	</tr>
      	 </tbody>
                          </table>
                          </div>


            <div  onClick={this.props.deleteMethod}>
                  <table id='table_attr' >
                 <th key='1'>Attribute Name</th>
                 <th key='2'>Mandatory / Optional</th>
                 <th key='3'>Type </th>
                 <th key='4'>Max Len.</th>
                 <th key='5'>Definition</th>
                     <tbody>
                        {notes}
                     </tbody>
                  </table>
               </div>
    </div>
  );
  }
}

export default App;

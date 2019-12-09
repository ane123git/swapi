import React ,{Component} from 'react';


class Note extends Component {

render(){
console.log("sadsadsa"+this.props.colArry)
 var attrNameVal=this.props.text;
 var res=attrNameVal.split("=");
  return (


      //<div className='note'>
      <tr><td>{res[0]}</td><td>Mandatory</td><td></td><td></td><td>{res[1]}</td></tr>
      //</div>

  );
  }
}

export default Note;


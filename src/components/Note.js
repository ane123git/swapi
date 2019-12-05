import React ,{Component} from 'react';


class Note extends Component {

render(){
console.log("sadsadsa"+this.props.colArry)
  return (

      //<div className='note'>
      <tr><td>{this.props.text}</td><td></td><td></td><td></td><td></td></tr>
      //</div>

  );
  }
}

export default Note;


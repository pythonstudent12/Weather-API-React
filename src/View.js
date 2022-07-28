import {Component} from 'react';
import {Table} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap'

class View extends Component {

    constructor(props) {
        super(props);
        this.state = {
            field: "",
            
        }
    }
  
  handleUserInput = (e) => {
        const name = e.target.value;
        console.log(name);
       }
    
   render () {
    
    const {lon, lat, weather, country, name} = this.props.res;

      return (
  <>
      <form>  
        <label>Student Name: </label>  
        <input type="text" placeholder="enter student name" onChange={this.handleUserInput}/>  
      </form>  
      <Button variant="primary" type="submit" >
      Submit
    </Button>
      
  <Table striped bordered hover variant="dark">
  
     <thead>
      <tr>
        <th>Широта</th>
        <th>Долгота</th>
        <th>Страна</th>
        <th>Место</th>
        <th>Погода</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{lon}</td>
        <td>{lat}</td>
        <td>{country}</td>
        <td>{name}</td>
        <td>{weather}</td>
      </tr>
    </tbody>
  </Table>
  </>)
   }
}


export default View;
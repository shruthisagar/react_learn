  import './App.css';
import React, {Component} from 'react';
import  {CardList} from './components/card-list/card-list.component'
class App extends Component{
  constructor(){
    super();
    this.state = {
      users: [],
      searchField: "",
      title:''
    };
    // this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(
      users=>this.setState({users:users})
    )
  }
  handleChange = (e) =>{
    this.setState({searchField:e.target.value, title:e.target.value})
  }
  render() {
    const {users, searchField, title} = this.state;
    const filteredUsers = users.filter(user=>user.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        
        <input type="search" onChange={this.handleChange}/>
        <h1>{title}</h1>
        <CardList users={filteredUsers}>
        </CardList>
        
      </div>
    );    
  }
}

export default App;

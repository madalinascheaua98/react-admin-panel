import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import PostList from './components/PostList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      colorText: 'black',
      users: [],
      posts: [],
      display: "users",
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);
        data.forEach(user => {
          user.isGoldClient = false;
        });
        this.setState({users: data});
      })
    
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        data = data.filter(post => post.id < 6);
        this.setState({posts: data});
      })
  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }

  changeColorText(event) {
    this.setState({colorText: event.target.value});
  }

  handleShowPosts(){
    this.setState({
      display: "posts"
    });
  }

  handleShowUsers(){
    this.setState({
    display: "users"
    });
  }

  getMaxId(users) {
    let maxId = 0;
    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  deleteUser = (event, id) => {
    const usersCopy = [...this.state.users];

    const updateUser = usersCopy.filter(user => user.id !== id);

    this.setState({ users: updateUser });
}


  submitAddForm(event, name, email, salariu, imag, isGoldClient) {
    event.preventDefault();
    event.target.reset();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            salariu,
            imag,
            isGoldClient,
          }
        ]
      }
    });
  }

 
  render() {
    return(
      <div className="app" style={{background: this.state.background, color: this.state.colorText}}>
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap" rel="stylesheet"></link>
        <h1>Admin panel - Project 1</h1>
        <UserAddForm submitAddForm={(event, name, email, salariu, imag, isGoldClient) => this.submitAddForm(event, name, email, salariu, imag, isGoldClient)}/>
        {
          this.state.display === "users" 
             ? <UserList users={this.state.users} deleteUser={(event,id) => this.deleteUser(event,id)}/>
             : <PostList posts={this.state.posts}/>
        }
        <link href="https://fonts.googleapis.com/css2?family=Changa:wght@500&display=swap" rel="stylesheet"></link>
        <div className="show">
          <button className="show-btns" onClick={() => this.handleShowUsers()}>Show Users</button>
          <button className="show-btns" onClick={() => this.handleShowPosts()}>Show Posts</button>
        </div>

        <div className="color-btns">
          <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@600&display=swap" rel="stylesheet"></link>
          <div>Background color:   
          <input type="color" onChange={(event) => this.changeColor(event)}/> </div>
          <div/> <div/>
          <div>Text color:
          <input type="color" onChange={(event) => this.changeColorText(event)}/></div>
        </div>
      </div>
    );
  }
}

export default App;

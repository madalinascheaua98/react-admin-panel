import React from 'react';
import './UserAddForm.css';
class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            salariu: '',
            imag: '',
            nameError: '',
            isGoldClient: false,
            //onDelete: false
        };
    }

    updateName(event) {
       // console.log(this.state.name);
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateSalary(event) {
        this.setState({salariu: event.target.value});
    }

    updatePhotoClient(event) {
        this.setState({imag: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

   /* handleValidate(){
        if(!this.state.name){
            this.setState({ nameError:"User must have a name!" })
        }
    }*/

    
    handleValidate(event){
        if (!this.state.name){
          this.setState({
            nameError: "User can't be empty!"
          });
          this.setState({
            isValid: false
          });
        }
    
        else{
          if (!this.state.name){
            this.setState({
              nameError: ""
            });
            this.setState({
              isValid: true
            });
          }
        }
      }

    /*updateDeleteUser(){
        this.deleteUser = true;
      }*/
    
   /* deleteUser(id) {
        this.setState((prevState) => ({
            users: prevState.users.filter(user => user.id !== id),
        }))
    };*/

    //<div style={{color: "red"}}><center>{this.state.nameError}</center></div>

    render() {
        const {name, email, salariu, imag, isGoldClient} = this.state;

        return (
            <form
                className="user-add-form"
                onSubmit={(event) => this.props.submitAddForm(event, name, email, salariu, imag, isGoldClient)}
            >
                <link href="https://fonts.googleapis.com/css2?family=Rowdies:wght@300&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Red+Rose&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap" rel="stylesheet"></link>
                <h2>Register New User:</h2>
                <label htmlFor="name" >Name:</label>
                <input
                    type="text"
                    name="name"
                    onChange={(event) => this.updateName(event)}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    onChange={(event) => this.updateEmail(event)}
                />

                 <label htmlFor="salariu">Salary:</label>
                <input
                    type="text"
                    name="salariu"
                    onChange={(event) => this.updateSalary(event)}
                />

                <label htmlFor="imag">Image:</label>
                <input
                    type="text"
                    name="imag"
                    onChange={(event) => this.updatePhotoClient(event)}
                />

                <label htmlFor="is-gold-client">GOLD client</label>
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />

                <input 
                    type="submit" 
                    className="btnsub" 
                    value="Add New User"
                    //onChange={(event) => this.handleValidate()}
                    />
        
            </form>
        )
    }
}

export default UserAddForm;
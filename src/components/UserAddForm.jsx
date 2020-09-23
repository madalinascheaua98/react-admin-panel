import React from 'react';
import './UserAddForm.css';

const initialState ={
            name: null,
            email: '',
            salariu: '',
            imag: '',
            isGoldClient: false,
            nameError: "",
};

class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    updateName(event) {
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

    valid = () => {
        let nameError = "";

        if(!this.state.name){
            nameError = "User must have a name!";
            this.setState({nameError});
            return false;
        }
        
         return true;
    
    }


    render() {
        const {name, email, salariu, imag, isGoldClient, nameError} = this.state;

        return (
            <form
                className="user-add-form"
                onSubmit={(event) =>
                    {
                    event.preventDefault();
                     if (this.valid()){
                        this.props.submitAddForm(event, name, email, salariu, imag, isGoldClient);
                        this.setState(initialState);
                        }
                    }
                   
                 }
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
                <div className="error">{nameError}</div>

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
                    />
        
            </form>
        )
    }
}

export default UserAddForm;
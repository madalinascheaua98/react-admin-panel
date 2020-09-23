import React from 'react';
import './UserItem.css';

function UserItem(props) {
    const {name, email, salariu, imag, isGoldClient, id} = props;

    return (
        <div className="user-item" >
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Quantico&display=swap" rel="stylesheet"></link>
            <h3> { name } </h3> 
            <p> { email } </p>
            <p> { salariu } </p>
            { imag
                ? <img src={ imag } alt="imagine" width="220" height="200"/>
                : <img src="../assets/images/default.png" alt="imagine" width="200" height="180"/>
            }
            { isGoldClient
                ? <h3>GOLD Client</h3>
                : null
            }
           <button className="delete-btns" onClick={(event) => props.deleteUser(event,id)}>remove</button> 
        </div>
    );
}

export default UserItem;
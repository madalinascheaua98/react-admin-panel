import React from 'react';
import UserItem from './UserItem';
import './UserList.css';


function UserList(props) {
    const { users } = props;
      
    return (
        <div>
            <h2>Users List:</h2>
            <div className="user-list">
            { users.map((user, index) => {
                return <UserItem
                    id={ user.id }
                    name={ user.name }
                    email={ user.email }
                    salariu={ user.salariu }
                    imag={ user.imag }
                    isGoldClient={ user.isGoldClient }
                    deleteUser = { props.deleteUser }
                    key={ index }
                />
            })}
            </div>
        </div>
    );
   

}

export default UserList;
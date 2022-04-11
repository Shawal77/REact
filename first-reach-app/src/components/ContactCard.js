import React from 'react';
import user from '../images/user.jpg'

const CardContact = (props) => {
    const {id, name, email, tel}=props.contact

    return (
        <div className='item' style={{backgroundColor:'purple'}}>
                <img className='ui avatar image' src={user} alt='user'/>
            <div className='content'>
                <div className='header'>{id}.){name}</div>
                <div>{email}</div>
                <div>{tel}</div>
            </div>
            <i className='trash alternate outline icon'
            style={{color:'red', marginTop:'7px'}}
            ></i>
        </div>
    );
};

export default CardContact;
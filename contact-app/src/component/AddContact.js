import React from 'react';

class AddContact extends React.Component { 
    render() {
        return(
            <div>
                <div> Add Contact </div>
                <div>
                    <label>Name</label>
                    <input type='text' name='name' placeholder='Name'></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' name='email' placeholder='Email'></input>
                </div>
                <button type='submit'> Add Contact </button>
            </div>
        )
    }
}

export default AddContact;
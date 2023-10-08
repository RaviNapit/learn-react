import React from 'react';
import { Link } from 'react-router-dom';

class AddContact extends React.Component { 
    state = {
        name:"",
        email:""
    }

    add = (e) => {
        e.preventDefault();
        console.log(this.state)

        if (this.state.name==='' || this.state.email === ''){
            alert("name or email can't be null");
            return;
        }
        this.props.contactHandler(this.state);
        this.setState({name:"", email:""});
    }

    hadleNameChange = (e) => {
        this.setState({name:e.target.value})
    }

    hadleEmailChange = (e) =>{
        this.setState({email:e.target.value})
    }

    render() {
        return(
            <div className='ui main'>
                <h3> Add Contact </h3>
                <form className='ui form' onSubmit={this.add}>              
                    <div>
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Name' value= {this.state.name} onChange={this.hadleNameChange}></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='text' name='email' placeholder='Email' value= {this.state.email} onChange={this.hadleEmailChange}></input>
                    </div>
                <button className='ui button blue'>Add Contact</button>
                <Link to ="/">
                    <button className='ui button green right'>See Conatct</button>
                </Link>
                </form>
            </div>
        )
    }
}

export default AddContact;
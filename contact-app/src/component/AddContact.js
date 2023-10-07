import React from 'react';

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
                <h2> Add Contact </h2>
                <form className='ui form' onSubmit={this.add}>              
                    <div>
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Name' value= {this.state.name} onChange={this.hadleNameChange}></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='text' name='email' placeholder='Email' value= {this.state.email} onChange={this.hadleEmailChange}></input>
                    </div>
                <button type='submit'> Add Contact </button>
                </form>
            </div>
        )
    }
}

export default AddContact;
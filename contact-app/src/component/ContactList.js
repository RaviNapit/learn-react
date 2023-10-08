import ContactCard from "./ContactCard"
import {Link} from 'react-router-dom'

const ContactList = (props) => {
    console.log("ContactCard", props.contacts)
    
    // const contactDeleteHandler = (id) => {
    //     props.contactDeleteHandler(id);
    // }

    const renderContactList = props.contacts.map((contact) => {
        return(
            < ContactCard 
                    contact={contact} 
                    contactDeleteHandler={props.contactDeleteHandler} 
                    key={contact.id}
            />
        )
    })
    
    return (
        <div className="main">
            <h3>Conatct List
                <Link to ="/add" >
                    <button className="ui button blue right">Add Conatct</button>
                </Link>
            </h3>
            <div className="ui celled list"> {renderContactList} </div>   

        </div>
    )
}

export default ContactList
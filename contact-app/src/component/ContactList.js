import ContactCard from "./ContactCard"
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
        <div className="ui celled list"> {renderContactList} </div>   
    )
}

export default ContactList
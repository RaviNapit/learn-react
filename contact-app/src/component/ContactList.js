import ContactCard from "./ContactCard"
const ContactList = (props) => {
    console.log("ContactCard", props.contacts)
    const renderContactList = props.contacts.map((contact) => {
        return(
            < ContactCard contact={contact}/>
        )
    })
    
    return (
        <div className="ui celled list"> {renderContactList} </div>   
    )
}

export default ContactList
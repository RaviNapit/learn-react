const ContactCard = (props) => {
    return(
        <div className = "item">
            <div className="content">
                <div className="header"> {props.contact.name} </div>
                <div> {props.contact.email} </div>
            </div>
            <i className="trash alternate outline icon"></i>
        </div>
    )
}

export default ContactCard
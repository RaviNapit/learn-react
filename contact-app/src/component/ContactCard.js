const ContactCard = (props) => {
    return(
        <div className = "item">
            <div className="content">
                <div className="header"> {props.contact.name} </div>
                <div> {props.contact.email} </div>
            </div>
            <i className="trash alternate outline icon" 
                style={{color:"red",marginTop:"7px"}}
                onClick={()=>{props.contactDeleteHandler(props.contact.id);}}
            ></i>
        </div>
    )
}

export default ContactCard
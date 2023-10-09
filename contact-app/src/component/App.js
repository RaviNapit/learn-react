import { useState, useEffect } from 'react'
import {v4 as uuid} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './Header'
import AddContact from './AddContact'
import ContactList  from './ContactList'
import api from '../api/contacts' 


function App() {
  
  const [contacts, setContacts] = useState([]) 
  const LOCAL_STORAGE_KEY = 'contacts'
  
  const retrieveContacts = async()=>{
    const response  = await api.get("/contacts");
    return response.data;
  }

  const getAllContacts = async() => {
    const allContact = await retrieveContacts();
    if(allContact.length !=0 ) {
      setContacts(allContact);
    }
}

  useEffect(()=>{
    getAllContacts();
  },[])

  useEffect(()=>{
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);

  const contactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, {id:uuid(), ...contact}])
  }

  const contactDeleteHandler = (contactId) => {
    console.log("App.js contact delete handler is called with ", contactId);
    const newContactList = contacts.filter((contact)=>{
      return contact.id != contactId;
    })

    setContacts(newContactList);
  }

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<ContactList contacts={contacts} contactDeleteHandler={contactDeleteHandler}/>}/>
          <Route path ='/add' element={<AddContact contactHandler={contactHandler}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


{/*  */} 

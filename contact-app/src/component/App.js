import { useState, useEffect } from 'react'
import {v4 as uuid} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './Header'
import AddContact from './AddContact'
import ContactList  from './ContactList' 


function App() {
  
  const [contacts, setContacts] = useState([]) 
  const LOCAL_STORAGE_KEY = 'contacts'
  
  useEffect(()=>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log('useEffect', retrieveContacts);
    if(retrieveContacts.length !=0 ) {
      setContacts(retrieveContacts);
    }
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

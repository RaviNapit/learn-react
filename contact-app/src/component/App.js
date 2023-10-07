import { useState } from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList  from './ContactList' 


function App() {
  
  const [contacts, setContacts] = useState([]) 

  const contactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, contact])
  }

  return (
    <div>
      <Header />
      <AddContact contactHandler={contactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;

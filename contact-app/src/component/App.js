import Header from './Header'
import AddContact from './AddContact'
import ContactList  from './ContactList' 


function App() {
  
  const contactList = [
    {
      id:"1",
      name:"Ravi Napit",
      email:"ravi.napit@xecurify.com"
    },
    {
      id:"2",
      name:"Rajesh Biswas ",
      email:"rajesh.biswas@xecurify.com"
    }
  ]

  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={contactList}/>
    </div>
  );
}

export default App;

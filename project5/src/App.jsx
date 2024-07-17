
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundContact from "./components/NotFoundContact";


const App = () => {
const [contacts, setContacts] = useState([]);

const { isOpen, onClose, onOpen } = useDisclouse();

useEffect(() => {
  const getContacts = async () => {
    try {
      const contactsRef = collection (db, "contacts");

onSnapshot(contactsRef, (snapshot) => {
  const contactLists = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
      setContacts(contactLists);
      return contactLists;
})


    } catch (error) {
      console.log(error);
    }
  }
  getContacts();
}, [])

const filterContacts = (e) => {
  const value = e.target.value;
  const contactsRef = collection (db, "contacts");

onSnapshot(contactsRef, (snapshot) => {
  const contactLists = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  const filterContacts = contactLists.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()) )

      setContacts(filterContacts);
      return filterContacts;
});
};

  return  (
    <>
    <div className=' max-w-[370px] mx-auto '>
      <Navbar  />
      <div className='flex gap-2'>
      <div className='items-center relative flex flex-grow'>
        <FiSearch className=' ml-1 absolute  text-3xl text-white' />
        <input onChange={filterContacts} type="text" className=' h-10 flex-grow bg-transparent border border-white rounded-md pl-9 text-white' />
      </div>
      
        <AiFillPlusCircle onClick={onOpen} className='text-5xl text-white cursor-pointer'/>
      
      </div>
      <div className="mt-4 gap-3 flex flex-col">
         {contacts.length <= 0 ? (
          <NotFoundContact />
         ) : ( 
          contacts.map((contact) => (
         <ContactCard key={contact.id} contact={contact} />
        )))}
      </div>
    </div>
   <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
   <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
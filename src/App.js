import './App.css';
import { Routes , Route , Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ContactList from './components/Contacts/Contact list/ContactList';
import AddContact from './components/Contacts/AddContact/AddContact';
import ViewContact from './components/Contacts/ViewContact/ViewContact';
import EditContact from './components/Contacts/EditContact/EditContact';
import Spinner from './components/Spinner/Spinner';


function App() {
  return (
    <>
    <Navbar />
    
    <Routes>
      <Route path={ '/' } element={ <Navigate to={ '/contacts/list' } /> } />
      <Route path={ '/contacts/list' } element={<ContactList />} />
      <Route path={ '/contacts/add' } element={<AddContact />} />
      <Route path={ '/contacts/view/:contactId' } element={<ViewContact />} />
      <Route path={ '/contacts/edit/:contactId' } element={<EditContact />} />
      <Route />
    </Routes>
    </>
  );
}

export default App;
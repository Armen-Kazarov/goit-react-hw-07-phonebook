import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import './App.css';
import ContactList from './Components/ContactList/ContactList';

export default function App() {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

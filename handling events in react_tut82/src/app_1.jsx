import { useState } from 'react';
import './App.css';

function App() {
  // Initialize the form state as an empty object
  const [form, setForm] = useState({});

  // Function to handle changes 2in input fields
  const handleChange = (e) => {
    // Update the state by spreading the existing form state
    // and adding/updating the key-value pair based on the input's name and value
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form); // Logs the form state after each change (may lag due to async state updates)
  };
  
  return (
    <>
      {/* Input field for 'email', controlled by the form state */}
      <input 
        type="text" 
        name="email" 
        value={form.email ? form.email : ""} // Ensures the input is controlled
        onChange={handleChange} // Calls handleChange on input change
      />

      {/* Input field for 'phone', controlled by the form state */}
      <input 
        type="text" 
        name="phone" 
        value={form.phone ? form.phone : ""} // Ensures the input is controlled
        onChange={handleChange} // Calls handleChange on input change
          />
    </>
  );
}

export default App;

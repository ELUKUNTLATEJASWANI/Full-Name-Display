import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [submitted, setSubmitted] = useState(false);



  return (
    <div>
      
      <h1>Full Name Display</h1>
      <form >
        <label htmlFor="firstName">First Name:</label>
        <input 
          type="text" 
          id="firstName" 
          name="firstName" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          required 
        /><br />
        <label htmlFor="lastName">Last Name:</label>
        <input 
          type="text" 
          id="lastName" 
          name="lastName" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          required 
        /><br /><br />
        <button type="submit">Submit</button>
     

      {submitted && (
        <div>
          <h2>Full Name: {fullName}</h2>
          
        </div>
      )}
      </form>
    </div>
  );
}

export default App;

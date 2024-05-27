import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [mobileData, setMobileData] = useState([]);
  const [emailData, setEmailData] = useState([]);
  const [addressData, setAddressData] = useState([]);

  useEffect(() => {
    fetch('/api/usermobile')
      .then(response => response.json())
      .then(data => setMobileData(data));

    fetch('/api/useremail')
      .then(response => response.json())
      .then(data => setEmailData(data));

    fetch('/api/useraddress')
      .then(response => response.json())
      .then(data => setAddressData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data from Backend Services</h1>
        <h2>Mobile Data</h2>
        <ul>
          {mobileData.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <h2>Email Data</h2>
        <ul>
          {emailData.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <h2>Address Data</h2>
        <ul>
          {addressData.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;


import './App.css'

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //importation des composants
import ClientList from './components/ClientsList';
import CreateClient from './components/CreateClient';
import ClientDetails from './components/ClientDetails';
import UpdateClient from './components/UpdateClient';
import 'bootstrap/dist/css/bootstrap.min.css';
 

const App = () => {
 return (
<Router>
  <Routes>
    <Route exact path="/clients" element={<ClientList />} />
    <Route exact path="/clients/create" element={<CreateClient />} />
    <Route exact path="/clients/:id" element={<ClientDetails />} />
    <Route exact path="/clients/:id/update" element={<UpdateClient />} />
  </Routes>
</Router>
 );
};

export default App;

 
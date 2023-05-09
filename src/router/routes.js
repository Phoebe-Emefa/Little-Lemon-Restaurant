import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../pages/home';

const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
       <Route path="/" element={<Home />} />
      
      </Route>
    )
  );

export default routes
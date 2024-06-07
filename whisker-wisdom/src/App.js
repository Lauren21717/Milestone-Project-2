import React from 'react';
import { Route, BrowserRouter as Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Intro from './Components/Intro/Intro';
import Quiz from './Components/Quiz/Quiz'
import Pass from './Components/Pass/Pass';
import Fail from './Components/Fail/Fail'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<LandingPage />} />
      <Route path='Intro' element={<Intro/>} />
      <Route path='quiz' element={<Quiz/>} />
      <Route path='pass' element={<Pass/>} />
      <Route path='fail' element={<Fail/>} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router}>
      <Router />
    </RouterProvider>
  );
}

export default App;
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import About from './About.tsx'
import Events from './Events.tsx'
import Contact from './Contact.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Home",
    element: <App />
  },
  {
    path: "/About",
    element: <About />
  },
  {
    path: "/Events",
    element: <Events />
  },
  {
    path: "/Contact",
    element: <Contact />
  }

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

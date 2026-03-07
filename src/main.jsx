import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import HomePage from './components/HomePage';
import RoomPage from './components/RoomPage';
import BookingPage from './components/BookingPage';
import NavBar from './components/NavBar';

// navbar showing above all routes
// outlet is a placeholder for the routes

const Layout = () => (
  <div>
    <NavBar />
    <Outlet />
  </div>
)

// clientside routing
const router = createBrowserRouter([
  {
    path: `/`,
    element: <Layout />,
    children: [
      {
        path: `/`,
        element: <HomePage />,
      },
      {
        path: `/rooms`,
        element: <RoomPage />
      },
      {
        path: `/bookings`,
        element: <BookingPage />
      }
    ]
  }]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

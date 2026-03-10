import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import HomePage from './components/HomePage';
import RoomPage from './components/RoomPage';
import BookingPage from './components/BookingPage';
import NavBar from './components/NavBar';
import ErrorPage from './components/ErrorPage';

// navbar showing above all routes
// outlet is a placeholder for the routes

const Layout = () => (
  <div>
    <NavBar />
    <main> {/* this is something I found in my Lighthouse */}
      <Outlet />
    </main>
  </div>
)

// clientside routing
const router = createBrowserRouter([
  {
    path: `/`,
    element: <Layout />,
    errorElement: <ErrorPage />,
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

// main.jsx
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

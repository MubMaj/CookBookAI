import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Headers from './components/Header'

function App() {

  const AppLayout = () => {
    return (
      <div className="app">
        <Headers />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],  
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
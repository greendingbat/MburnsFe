import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import BeatLess from "./BeatLess";
import LandingPage from "./LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },

  { path: "/beatless", element: <BeatLess /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

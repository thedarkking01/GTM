import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NavbarComponent from './components/NavbarComponent';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavbarComponent />}></Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;

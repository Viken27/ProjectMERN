//import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import User from './Components/getuser/User';
import Add from './Components/adduser/Add';
import Edit from './Components/updateuser/Edit';


function App() {

  const route  = createBrowserRouter([
    {
      path:"/",
      element:<User/>,
    },
    {
      path:"/add",
      element:<Add/>,
    },
    {
      path:"/edit/:id",
      element:<Edit/>,
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;

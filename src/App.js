import { createBrowserRouter,
  Route, 
  createRoutesFromElements, 
  RouterProvider } 
from "react-router-dom";

import Layout from "./Components/Presentational/Layout";
import Home from "./Components/Presentational/Home";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>} />

    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

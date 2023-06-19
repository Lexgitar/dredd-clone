import { createBrowserRouter,
  Route, 
  createRoutesFromElements, 
  RouterProvider } 
from "react-router-dom";

import Layout from "./Components/Presentational/Layout";
import Home from "./Components/Presentational/Home";
//import Mock from "./Components/Mock";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>} />
      {/* <Route path='/mock' element={<Mock/>} /> */}
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

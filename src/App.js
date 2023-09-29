//Material Ui Congigs 
import MaterialUI from "./SetMaterialUI";

//React-Router-DOM
import { RouterProvider } from "react-router-dom";

//routes
import { router } from "./router";

function App() {
 return (
  <>
   <MaterialUI>
    <RouterProvider router={router} />
   </MaterialUI>
  </>
 );
}

export default App;

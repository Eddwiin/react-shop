import { RouterProvider } from "react-router-dom";
import router from "../configs/router";
import Header from "../layouts/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

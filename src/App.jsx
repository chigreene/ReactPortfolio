// import components here
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// react app function
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

// export app function
export default App;

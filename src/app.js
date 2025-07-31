import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About";
import Error from "./components/Error";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const approuter = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    errorElement: <Error />,
  },
  {
    path: "/about",
    Component: About,
  },
]);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);

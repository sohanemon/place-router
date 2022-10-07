import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Main from "./components/main";
import Photos from "./components/photos";
import Timeline from "./components/timeline";
import Users from "./components/users";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <h1>Sorry</h1>,
    children: [
      {
        path: "",

        element: <Hero />,
      },
      {
        path: "photos",
        loader: async () =>
          fetch("https://jsonplaceholder.typicode.com/photos"),
        element: <Photos />,
      },
      {
        path: "timeline",
        loader: async () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Timeline />,
      },
      {
        path: "users",
        loader: async () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users />,
      },
      {
        path: "about",
        loader: async () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Footer />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Failed from "./components/failed";
import Fallback from "./components/fallback";
import Hero from "./components/hero";
import Main from "./components/main";
const Profile = lazy(() => import("./components/profile.jsx"));
const Todos = lazy(() => import("./components/todos"));
const Footer = lazy(() => import("./components/footer"));
const Photos = lazy(() => import("./components/photos"));
const Users = lazy(() => import("./components/users"));
const Timeline = lazy(() => import("./components/timeline"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Failed />,
    children: [
      {
        path: "",

        element: <Hero />,
      },
      {
        path: "gallery",
        loader: async () =>
          fetch("https://jsonplaceholder.typicode.com/photos"),
        element: (
          <Suspense fallback={<Fallback />}>
            <Photos />
          </Suspense>
        ),
        errorElement: <Failed />,
      },
      {
        path: "timeline",
        loader: async () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: (
          <Suspense fallback={<Fallback />}>
            <Timeline />
          </Suspense>
        ),
        errorElement: <Failed />,
      },
      {
        path: "users",

        children: [
          {
            path: "",
            loader: async () =>
              fetch("https://jsonplaceholder.typicode.com/users"),
            element: (
              <Suspense fallback={<Fallback />}>
                <Users />
              </Suspense>
            ),
          },
          {
            path: ":id/:username/todos",
            loader: async ({ params: { id } }) =>
              fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`),
            element: (
              <Suspense fallback={<Fallback />}>
                <Todos />
              </Suspense>
            ),
            errorElement: <Failed />,
          },
        ],
      },
      {
        path: ":username",
        loader: async ({ params: { username } }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users?username=${username}`
          ),
        element: (
          <Suspense fallback={<Fallback />}>
            <Profile />
          </Suspense>
        ),
        errorElement: <Failed />,
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Fallback />}>
            <Footer />
          </Suspense>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <div className=''>
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;

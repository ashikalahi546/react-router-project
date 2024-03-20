import React, { children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Users from "./components/Users.jsx";
import UserDetails from "./components/UserDetails.jsx";
import Posts from "./Posts.jsx";
import Error from "./Error.jsx";
// import PostDetails from "./PostDetails.jsx";
import Post from "./Post.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/user',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/user/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path:'/post',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:'/post/:postId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<Post></Post>
      }
     
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

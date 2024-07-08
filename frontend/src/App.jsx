import { Button, ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import { useEffect, useState } from 'react';
import BlogContext from './components/context/BlogContext';
import axios from 'axios';
import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/addBlog",
      element: <AddBlog />
    },
    {
      path: "/Blog",
      element: <Blog />
    },
    {
      path: "singleBlog/:id",
      element: <SingleBlog />
    },
    {
      path: "/Blog/singleBlog/:id",
      element: <SingleBlog />
    },

  ]
  )
  const [blogs, setBlog] = useState([])
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://blogging-website-blue-tau.vercel.app/blog");
        setBlog(response.data.data);
        console.log("🚀 ~ fetchData ~ response:", response.data.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData()

  }, [refresh])
  return (
    <>
      <ChakraProvider>

        <BlogContext.Provider value={{ blogs, setBlog , setRefresh }}>
          <RouterProvider router={router} />
        </BlogContext.Provider>
        {/* <Home /> */}
      </ChakraProvider>

    </>
  );
}

export default App;

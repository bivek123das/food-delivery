import React, { lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Restaurant from "./components/Restaurant";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";





const About = lazy(() => import("./components/About"));


export const AppLayout = () => {

  const [userName, setUserName] = useState();

   useEffect(()=>{
      const data = {
        name: 'Bivek Das'
      }
      setUserName(data.name);
    },[])

     return (
         <Provider store={appStore}>
          <UserContext.Provider value={{loggedInUser : userName, setUserName}
          }>
         <div className="app">
            <Header/>
            <Outlet/>
         </div>
         </UserContext.Provider> 
         </Provider>
     )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurant />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;



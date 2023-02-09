import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Parent from "./Parent";
import { ContextProvider } from "./Context/userProfileContext.jsx";
import One from "./One";

function App() {
  const [userProfile, setUserProfile] = useState({});
  const [isAuthDone, setAuthDone] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Parent />,
    },
    {
      path: "/user",
      element: <One />,
    },
  ]);

  return (
    <ContextProvider
      value={{ userProfile, setUserProfile, isAuthDone, setAuthDone }}
    >
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  );
}

export default App;

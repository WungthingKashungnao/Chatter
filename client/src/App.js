import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Dashboard from "./modules/Dashboard/Dashboard";
import Form from "./modules/Form/Form";

//function to protect route
// we have props children because inside the protected function we have a component, which the ProtectedRoute function is protecting
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("user:token") !== null || true;

  // if user is not logged in redirect to sign in page
  if (!isLoggedIn) {
    return <Navigate to={"users/sign_in"} />;
  } else if (
    isLoggedIn &&
    ["/users/sign_in", "/users/sign_up"].includes(window.location.pathname)
  ) {
    // if the user is already logged in, and is in the dashboard page and tries to go, to sign in or sing up page, redirect it to dasboard
    return <Navigate to={"/"} />;
  }

  // children is the component which the function is protecting
  return children;
};

function App() {
  return (
    // className="bg-[#e1edff] h-screen flex justify-center items-center "

    <div className="bg-[#e1edff] h-screen flex justify-center items-center ">
      <Routes>
        <Route
          path="/"
          element={
            // dasboard component is protected only logged in users can access the dasboard component
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* directing to the same form page, only show sign in or sing up based on the isSignInPage prop start*/}
        <Route
          path="/users/sign_in"
          element={
            <ProtectedRoute>
              <Form isSignInPage={true} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users/sign_up"
          element={
            <ProtectedRoute>
              <Form isSignInPage={false} />
            </ProtectedRoute>
          }
        />
        {/* directing to the same form page, only show sign in or sing up based on the isSignInPage prop start*/}
      </Routes>
    </div>
  );
}

export default App;

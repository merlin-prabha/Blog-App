import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/user/auth/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/user/auth/Register";
import VerifyOTP from "./pages/user/auth/VerifyOTP";
import Success from "./pages/user/auth/Success";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import Layout from "./pages/user/layout/Layout";
import { useSelector } from "react-redux";
import Home from "./pages/user/Home";
import Profile from "./pages/user/Profile";
import CreatePost from "./pages/user/CreatePost";
import ProfileById from "./pages/user/ProfileById";
import PostDetails from "./pages/user/PostDetails";
import Settings from "./pages/user/Settings";

function App() {
  // const theme = useSelector((state) => state.theme.theme);
  return (
    // <div className={`${theme === false && "bg-gray-900 text-white"}`}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<VerifyOTP />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/new" element={<CreatePost />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/post/:id" element={<PostDetails />} />
          </Route>
        </Route>
      </Routes>
    // </div>
  );
}

export default App;

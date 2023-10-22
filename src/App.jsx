import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import PlayCourse from "./components/PlayCourse";
import Admin from "./pages/Admin";
import Search from "./components/Search";
import BlogPage from "./components/BlogPage";
import BlogDetail from "./components/BlogDetail";
import Auth from "./pages/Auth"
import Mycourses from "./components/Mycourses";
import StripeWrapper from "./pages/Rewards";
import StripeWrapper1 from "./components/CourseDetail";
import AdminDashboard from "./pages/AdminDashboard";
import AdminBuy from "./pages/AdminBuy";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admindash" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adminbuy" element={<AdminBuy />} />
        <Route path="/explore" element={<Search />} />
        <Route path="/explore/course" element={<StripeWrapper1 />} />
        <Route path="/mycourse" element={<Mycourses />} />
        <Route path="/playcourse" element={<PlayCourse />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/b" element={<BlogDetail />} />
        <Route path="/redeem" element={<StripeWrapper />} />
      </Routes>
    </BrowserRouter></>
  );
}
export default App;

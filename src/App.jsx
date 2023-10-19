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
import CourseDetail from "./components/CourseDetail";
import Search from "./components/Search";
import BlogPage from "./components/BlogPage";
import BlogDetail from "./components/BlogDetail";
import Auth from "./pages/Auth"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore" element={<Search />} />
        <Route path="/explore/course" element={<CourseDetail />} />
        <Route path="/playcourse" element={<PlayCourse />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/b" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter></>
  );
}
export default App;

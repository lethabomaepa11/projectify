import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import AuthLayout from "./layouts/AuthLayout";
import Signup from "./pages/signup/Signup";
import TutorLayout from "./layouts/TutorLayout";
import Tutor from "./pages/tutor/Tutor";
import StudentLayout from "./layouts/StudentLayout";
import Projects from "./pages/projects/Projects";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import withAuth from "./hoc/withAuth";

const ProtectedStudentLayout = withAuth(StudentLayout, "student");
const ProtectedTutorLayout = withAuth(TutorLayout, "tutor");
const ProtectedAuthLayout = withAuth(AuthLayout, "auth");
function MyApp() {
  return (
    <>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<ProtectedAuthLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        {/* Student */}
        <Route path="/projects" element={<ProtectedStudentLayout />}>
          <Route index element={<Projects />} />
          <Route path="mine" element={<Projects />} />
          <Route path="leaderboard" element={<Leaderboard />} />
        </Route>

        {/* Tutor */}
        <Route path="/tutor" element={<ProtectedTutorLayout />}>
          <Route index element={<Tutor />} />
          <Route path="leaderboard" element={<Leaderboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default MyApp;

import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import AuthLayout from "./layouts/AuthLayout";
import Signup from "./pages/signup/Signup";
import EmptyLayout from "./layouts/EmptyLayout";
import Tutor from "./pages/tutor/Tutor";
import StudentLayout from "./layouts/StudentLayout";
import Projects from "./pages/projects/Projects";
import Leaderboard from "./pages/leaderboard/Leaderboard";

function MyApp() {
  return (
    <>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        {/* Student */}
        <Route path="/projects" element={<StudentLayout />}>
          <Route index element={<Projects />} />
          <Route path="mine" element={<Projects />} />
          <Route path="leaderboard" element={<Leaderboard />} />
        </Route>

        {/* Tutor */}
        <Route path="/tutor" element={<EmptyLayout />}>
          <Route index element={<Tutor />} />
        </Route>
      </Routes>
    </>
  );
}

export default MyApp;

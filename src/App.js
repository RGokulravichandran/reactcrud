import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import HideAppBar from "./Components/AppBar";
import Dashboard from "./Components/Dashboard";
import PageNotFound from "./Components/PageNotFound";
import CreateUser from "./Components/CreateUser";
import Profile from "./Components/Profile";
import GetCurrentUserData from "./Components/EditProfile";

function App() {
  return (
    <div>
      <Router>
        <HideAppBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Create-User" element={<CreateUser />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/edit-profile/:id" element={<GetCurrentUserData />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

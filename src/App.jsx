import "./App.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  Outlet,
} from "react-router-dom";
import styles from "./Routes/MyStyles.module.css";
import { About } from "./Routes/About";
import { Home } from "./Routes/Home";
import { Projects } from "./Routes/Projects";

function Navbar() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.Navbar}>
          {" "}
          <Link to="/About">
            <button className={styles.contextBtn}>About me</button>
          </Link>
          <Link to="/">
            <button className={styles.contextBtn}>home</button>
          </Link>
          <Link to="/Projects">
            <button className={styles.contextBtn}>Projects</button>
          </Link>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/Projects" element={<Projects />} />
          <Route path="About" element={<About />} />
          <Route index element={<Home />}></Route>
        </Route>
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

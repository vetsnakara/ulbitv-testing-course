import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <Link data-testid="main-link" to="/">
        MAIN
      </Link>
      <Link data-testid="about-link" to="/about">
        ABOUT
      </Link>
      <Link data-testid="users-link" to="/users">
        USERS
      </Link>
    </div>
  );
};

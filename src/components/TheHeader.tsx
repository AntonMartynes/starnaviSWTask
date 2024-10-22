import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import useGoHome from "../helpers/useGoHome";

const Header = () => {
  const handleGoHome = useGoHome();
  return (
    <AppBar position="static" sx={{ backgroundColor: "#20043ed0" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">
          Welcome to{" "}
          {
            <Link
              color="inherit"
              underline="always"
              sx={{ transition: "color 0.3s", "&:hover": { color: "#a855f7" }, cursor: "pointer" }}
              onClick={() => handleGoHome()}
            >
              StarWars
            </Link>
          }{" "}
          characters!🌠
        </Typography>
        <Typography>
          Test task for{" "}
          <Link
            href="https://www.starnavi.io/"
            target="_blank"
            color="inherit"
            underline="hover"
            sx={{ transition: "color 0.3s", "&:hover": { color: "#a855f7" } }}
          >
            Starnavi
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

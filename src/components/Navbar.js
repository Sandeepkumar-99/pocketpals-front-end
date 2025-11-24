import { AppBar, Toolbar, Typography, IconButton, Avatar, Menu, MenuItem, Box } from "@mui/material";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [anchor, setAnchor] = useState(null);

  const openMenu = (e) => setAnchor(e.currentTarget);
  const closeMenu = () => setAnchor(null);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h6">
          PocketPals
        </Typography>

        <Box display="flex" alignItems="center">
          {user.isAdmin && (
            <Typography
              variant="subtitle2"
              sx={{ mr: 2, bgcolor: "#d32f2f", px: 1, borderRadius: 1, color: "white" }}
            >
              Admin
            </Typography>
          )}

          <Typography sx={{ mr: 1 }}>{user.firstName}</Typography>
          <IconButton onClick={openMenu}>
            <Avatar>{user.firstName[0]}</Avatar>
          </IconButton>

          <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={closeMenu}>
            <MenuItem
              onClick={() => {
                logout();
                closeMenu();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
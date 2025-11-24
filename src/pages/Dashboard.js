import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Avatar, Box } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [anchor, setAnchor] = useState(null);

  const openMenu = (e) => setAnchor(e.currentTarget);
  const closeMenu = () => setAnchor(null);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }} variant="h6">
            PocketPals
          </Typography>

          <IconButton onClick={openMenu}>
            <Avatar>{user.firstName[0]}</Avatar>
          </IconButton>

          <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={closeMenu}>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Box p={3}>
        <Typography variant="h4">Welcome, {user.firstName} 👋</Typography>
        <Typography mt={2}>Your dashboard content will go here...</Typography>
      </Box>
    </>
  );
};

export default Dashboard;
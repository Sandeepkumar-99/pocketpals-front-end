import { Box, Typography, Tabs, Tab, Grid } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import UserCard from "../components/UserCard";
import GroupCard from "../components/GroupCard";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("token");

  const [tabValue, setTabValue] = useState(0);
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTabChange = (e, newValue) => setTabValue(newValue);

  useEffect(() => {
    const fetchAdminData = async () => {
      if (!user.isAdmin) return;
      try {
        setLoading(true);

        const usersRes = await axios.get(`http://localhost:5000/api/admin/users?${user.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(usersRes.data.users);

        const groupsRes = await axios.get(`http://localhost:5000/api/admin/groups?${user.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setGroups(groupsRes.data.groups);
      } catch (err) {
        console.error("Admin dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, [user, token]);

  return (
    <>
      <Navbar />
      <Box p={3}>
        <Typography variant="h4">
          Welcome, {user.firstName} {user.lastName} 👋
        </Typography>

        {user.isAdmin ? (
          <>
            <Tabs value={tabValue} onChange={handleTabChange} sx={{ mt: 3, mb: 2 }}>
              <Tab label="Users" />
              <Tab label="Groups" />
            </Tabs>

            {loading ? (
              <Loader />
            ) : (
              <>
                {tabValue === 0 && (
                  <Grid container spacing={2}>
                    {users.map(u => <UserCard key={u._id} user={u} />)}
                  </Grid>
                )}
                {tabValue === 1 && (
                  <Grid container spacing={2}>
                    {groups.map(g => <GroupCard key={g._id} group={g} token={token} />)}
                  </Grid>
                )}
              </>
            )}
          </>
        ) : (
          <Typography mt={3}>You are not an admin. Regular user view goes here.</Typography>
        )}
      </Box>
    </>
  );
};

export default Dashboard;
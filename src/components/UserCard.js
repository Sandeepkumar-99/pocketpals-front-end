import { Card, CardContent, Typography, Grid } from "@mui/material";

const UserCard = ({ user }) => (
  <Grid item xs={12} md={6} lg={4}>
    <Card>
      <CardContent>
        <Typography variant="h6">{user.firstName} {user.lastName}</Typography>
        <Typography variant="body2">{user.email}</Typography>
        <Typography variant="body2">Admin: {user.isAdmin ? "Yes" : "No"}</Typography>
        <Typography variant="body2">ID: {user._id}</Typography>
        <Typography variant="body2">
          Last Modified: {new Date(user.updatedAt).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default UserCard;
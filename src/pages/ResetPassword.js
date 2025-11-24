import { Card, CardContent, Typography, TextField, Button, Grid } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const ResetPassword = () => {
  const [newPassword, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/auth/reset-password`, {
      token,
      newPassword,
    });
    alert("Password updated!");
  };

  return (
    <Grid container justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ width: 400, padding: 2 }}>
        <CardContent>
          <Typography variant="h5" textAlign="center" mb={2}>
            Set New Password
          </Typography>

          <TextField label="Reset Token" fullWidth margin="normal" onChange={(e) => setToken(e.target.value)} />
          <TextField label="New Password" type="password" fullWidth margin="normal" onChange={(e) => setPassword(e.target.value)} />

          <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
            Update Password
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ResetPassword;
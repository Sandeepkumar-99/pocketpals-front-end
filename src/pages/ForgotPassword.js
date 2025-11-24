import { Card, CardContent, Typography, TextField, Button, Grid } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/auth/forgot-password`, { email });
    alert("Reset email sent!");
  };

  return (
    <Grid container justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ width: 400, padding: 2 }}>
        <CardContent>
          <Typography variant="h5" textAlign="center" mb={2}>
            Reset Password
          </Typography>

          <TextField
            label="Enter your email"
            fullWidth
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
            Send Reset Link
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ForgotPassword;
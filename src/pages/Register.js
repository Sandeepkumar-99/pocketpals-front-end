import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, form);
    alert("Registered! Please log in.");
  };

  return (
    <Grid container justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ width: 400, padding: 2 }}>
        <CardContent>
          <Typography variant="h5" textAlign="center" mb={2}>
            Create Account
          </Typography>

          <TextField label="First Name" fullWidth margin="normal" name="firstName" onChange={handleChange} />
          <TextField label="Last Name" fullWidth margin="normal" name="lastName" onChange={handleChange} />
          <TextField label="Email" fullWidth margin="normal" name="email" onChange={handleChange} />
          <TextField label="Password" type="password" fullWidth margin="normal" name="password" onChange={handleChange} />

          <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
            Register
          </Button>

          <Grid container justifyContent="center" mt={2}>
            <Link href="/login">Already have an account? Login</Link>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Register;
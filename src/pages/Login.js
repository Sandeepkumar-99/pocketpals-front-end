import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  CircularProgress,
} from "@mui/material";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        form
      );

      login(res.data.user, res.data.token);

      // 🔥 FIX: redirect after login
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ width: 400, padding: 2 }}>
        <CardContent>
          <Typography variant="h5" textAlign="center" mb={2}>
            Login
          </Typography>

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            name="email"
            onChange={handleChange}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            name="password"
            onChange={handleChange}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Login"}
          </Button>

          <Grid container justifyContent="space-between" mt={2}>
            <Link href="/forgot-password">Forgot Password?</Link>
            <Link href="/register">Register</Link>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Login;

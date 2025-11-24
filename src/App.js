import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
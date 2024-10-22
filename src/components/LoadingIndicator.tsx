import {Box, CircularProgress} from "@mui/material";
import { Gradients } from "../helpers/gradients";


const LoadingIndicator = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: Gradients.DarkBackground
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingIndicator;
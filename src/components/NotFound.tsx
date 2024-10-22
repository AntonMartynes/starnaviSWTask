import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Gradients } from "../helpers/gradients";
import useGoHome from "../helpers/useGoHome";

const NotFound: React.FC = () => {
  const goHome = useGoHome();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        height: "100vh",
        background: Gradients.DarkBackground,
        backgroundColor: "purple",
      }}
    >
      <Typography variant="h4" color="error">
        404 - Page Not Found
      </Typography>

      <Button variant="outlined" onClick={() => goHome()}>Go Back</Button>
    </Box>
  );
};

export default NotFound;

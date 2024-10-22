import Grid from "@mui/material/Grid2";
import CharacterCard from "./CharacterCard";
import React from "react";
import { ICharListElementProps } from "./types";

const CharListElement: React.FC<ICharListElementProps> = ({ people }) => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {people.map((person) => (
        <Grid
          container
          size={{ xs: 12, sm: 6, md: 4 }}
          key={person.id}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <CharacterCard person={person} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CharListElement;

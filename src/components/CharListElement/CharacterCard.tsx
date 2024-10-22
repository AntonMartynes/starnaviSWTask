import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from "@mui/material";
import React from "react";
import { ICharacterDetail, ICharCardElementProps } from "./types";
import useGoToChar from "../../helpers/useGoToChar";

const CharacterCard: React.FC<ICharCardElementProps> = ({ person }) => {
  const handleGoToChar = useGoToChar();
  return (
    <Card elevation={24} sx={{ maxWidth: 420, width: "100%" }}>
      <CardMedia
        component="img"
        alt={person.name}
        height="240"
        image={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center", fontWeight: "bold" }}>
          {person.name}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <CharacterDetail label="Date of Birth" value={person.birth_year} />
          <CharacterDetail label="Gender" value={person.gender} />
          <CharacterDetail label="Eye Color" value={person.eye_color} />
          <CharacterDetail label="Skin Color" value={person.skin_color} />
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleGoToChar(person.id)}>Learn More</Button>
      </CardActions>
    </Card>
  );
};

const CharacterDetail:React.FC<ICharacterDetail> = ({ label, value }) => {
  return (
    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
      {label}:
      <Typography variant="body1" color="text.primary" component="span" sx={{ ml: 1 }}>
        {value}
      </Typography>
    </Typography>
  );
};

export default CharacterCard;
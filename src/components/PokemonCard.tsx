import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export interface StatsProps {}

export default function PokemonCard(props: {
  id: any;
  name: string;
  image: any;
  types: any;
  color: string;
  height: number;
  weight: number;
  statsNames: string[];
  statsValues: string[];
}) {
  const typeHandler = () => {
    if (props.types && props.types.length > 1) {
      return (
        props.types[0].toUpperCase() + " | " + props.types[1].toUpperCase()
      );
    } else if (props.types && props.types.length === 1) {
      return props.types[0].toUpperCase();
    }
  };

  const colors = props.color === "white" ? "lightgray" : props.color;

  return (
    <Card
      sx={{
        maxWidth: 400,
        maxHeight: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 1,
        position: "relative",
        boxShadow: "2px 2px 2px 2px #ccc",
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          sx={{
            height: 140,
            width: 140,
            backgroundSize: "contain",
            margin: 2,
            zIndex: 1,
          }}
          image={props.image}
          title={props.name.toUpperCase()}
        />
        <CardContent
          sx={{
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 0,
            margin: 0,
            zIndex: 1,
          }}
        >
          <Typography
            gutterBottom
            variant="button"
            component="div"
            fontWeight={600}
          >
            {`${props.id}. ${props.name.toUpperCase()}`}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            fontWeight={500}
            sx={{ paddingBottom: 2 }}
          >
            {typeHandler()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div
        style={{
          background: `linear-gradient(to bottom, ${colors} 0% , transparent 80%)`,
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      ></div>
    </Card>
  );
}

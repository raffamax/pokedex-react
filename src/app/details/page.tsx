"use client";
import { Box, useMediaQuery } from "@mui/material";
import HeaderDetails from "@/components/HeaderDetails";
import PokemonImageDetails from "@/components/PokemonImageDetails";
import PokemonSpecs from "@/components/PokemonSpecs";

interface PokemonProps {
  searchParams: {
    name: string;
    id: string;
    types: any;
    img: string;
    color: string;
    height: number;
    weight: number;
    statsNames: string[];
    statsValues: string[];
  };
}

export default function DetailsPage({
  searchParams: {
    id,
    name,
    img,
    color,
    height,
    weight,
    statsNames,
    statsValues,
    types,
  },
}: PokemonProps) {
  const colors = color === "white" ? "lightgray" : color;

  const isMobile = useMediaQuery("(max-width: 500px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100svw",
        height: isMobile ? "auto" : "100svh",
        alignItems: "center",
        background: `linear-gradient(to bottom, ${colors} 0% , orange ${
          isMobile ? "50%" : "150%"
        })`,
        position: "relative",
      }}
    >
      <HeaderDetails id={id} isMobile={isMobile} name={name} />
      <PokemonImageDetails img={img} isMobile={isMobile} name={name} />
      <PokemonSpecs
        height={height}
        isMobile={isMobile}
        statsNames={statsNames}
        statsValues={statsValues}
        types={types}
        weight={weight}
      />
    </Box>
  );
}

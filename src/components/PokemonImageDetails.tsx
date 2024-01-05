import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

interface PokemonDetailsProps {
  isMobile: boolean;
  img: string;
  name: string;
}

const PokemonImageDetails = ({ isMobile, img, name }: PokemonDetailsProps) => {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        padding: isMobile ? "8px" : "20px",
        position: isMobile ? "relative" : "absolute",
        top: isMobile ? "0svh" : "50px",
        zIndex: 2,
      }}
    >
      <Image
        width={isMobile ? 250 : 380}
        height={isMobile ? 250 : 380}
        src={img}
        title={name}
        alt={name}
      />
    </Box>
  );
};

export default PokemonImageDetails;

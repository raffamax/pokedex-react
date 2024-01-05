import { Box, LinearProgress, Paper, Typography } from "@mui/material";
import ScaleIcon from "@mui/icons-material/Scale";
import StraightenIcon from "@mui/icons-material/Straighten";
import React from "react";

interface PokemonSpecsProps {
  types: any;
  height: number;
  weight: number;
  statsNames: string[];
  statsValues: string[];
  isMobile: boolean;
}

const PokemonSpecs = ({
  isMobile,
  statsNames,
  statsValues,
  types,
  height,
  weight,
}: PokemonSpecsProps) => {
  const typeHandler = () => {
    if ([types][0] && [types][0].length === 2) {
      return [types][0][0].toUpperCase() + " | " + [types][0][1].toUpperCase();
    } else if ([types] && [types].length === 1) {
      return [types][0].toUpperCase();
    }
  };

  const heightBR = height / 10;
  const weightBR = weight / 10;

  const currentValue = statsValues;
  const maxValue = 200;
  const proportionalValues = currentValue.map(
    (value) => (Number(value) / maxValue) * 100
  );

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        width: isMobile ? "100%" : "50%",
        paddingBottom: "16px",
        borderRadius: "8px 8px 0px 0px",
        boxShadow: "2px 2px 8px 1px #000",
        position: isMobile ? "relative" : "absolute",
        bottom: "0px",
        zIndex: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: isMobile ? "0px" : "24px",
          width: "90%",
          marginTop: isMobile ? "16px" : "24px",
        }}
      >
        <Typography
          variant="body1"
          fontWeight={500}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          gap={"4px"}
        >
          <ScaleIcon />
          {`${weightBR} Kg`}
        </Typography>
        <Typography
          variant={isMobile ? "caption" : "body1"}
          fontWeight={500}
          textAlign={"center"}
          alignSelf={"center"}
        >
          {typeHandler()}
        </Typography>
        <Typography
          variant="body1"
          fontWeight={500}
          display={"flex"}
          justifyContent={"end"}
          alignItems={"center"}
          textAlign={"right"}
        >
          <StraightenIcon sx={{ rotate: "-90deg" }} />
          {`${heightBR} m`}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "16px",
          width: "90%",
          marginTop: "16px",
          zIndex: 1,
        }}
      >
        {statsNames.map((statName, index) => (
          <Paper>
            <Box
              sx={{
                display: "flex",
                padding: "8px 8px 0px 8px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                textTransform={"uppercase"}
                variant="body2"
                fontWeight={500}
              >
                {statName}
              </Typography>
              <Typography fontWeight={500}>{statsValues[index]}</Typography>
            </Box>
            <Box sx={{ padding: "8px" }}>
              <LinearProgress
                variant="determinate"
                value={proportionalValues[index]}
                color="inherit"
                sx={{
                  height: 8,
                  borderRadius: 10,
                }}
              />
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default PokemonSpecs;

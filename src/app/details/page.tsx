"use client";
import {
  Button,
  LinearProgress,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import StraightenIcon from "@mui/icons-material/Straighten";
import ScaleIcon from "@mui/icons-material/Scale";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

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
    <div
      style={{
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
      <div
        style={{
          backgroundColor: "#fff",
          width: isMobile ? "100%" : "50%",
          height: isMobile ? "auto" : "10svh",
          padding: isMobile ? "16px 0px 16px" : "0px",
          borderRadius: "0px 0px 8px 8px",
          boxShadow: "2px 2px 8px 1px #000",
          position: "relative",
          zIndex: 0,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Link
            href={{ pathname: "/" }}
            style={{
              color: "black",
              textDecoration: "none",
              position: "relative",
              width: "100px",
            }}
          >
            <Button
              variant="text"
              color="inherit"
              style={{ marginLeft: "8px", paddingLeft: "0px" }}
            >
              <ChevronLeftIcon />
              {"voltar"}
            </Button>
          </Link>
          <Typography
            textTransform={"uppercase"}
            variant={isMobile ? "body1" : "h5"}
            textAlign={"center"}
          >
            {name}
          </Typography>
          <Typography
            fontWeight={500}
            justifySelf={"flex-end"}
            marginRight={"24px"}
          >{`#${id}`}</Typography>
        </div>
      </div>
      <div
        style={{
          borderRadius: "8px",
          padding: isMobile ? 8 : 20,
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
      </div>
      <div
        style={{
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
        <div
          style={{
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
        </div>
        <div
          style={{
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
              <div
                style={{
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
              </div>
              <div style={{ padding: "8px" }}>
                <LinearProgress
                  variant="determinate"
                  value={proportionalValues[index]}
                  color="inherit"
                  sx={{
                    height: 8,
                    borderRadius: 10,
                  }}
                />
              </div>
            </Paper>
          ))}
        </div>
      </div>
    </div>
  );
}

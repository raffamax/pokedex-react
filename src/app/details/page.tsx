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
import { useEffect, useState } from "react";
import axios from "axios";

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
  // const [pokemons, setPokemons] = useState([{}]);
  // const [currentId, setCurrentId] = useState(id);
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

  // const prevId = Number(id) > 1 ? Number(id) - 1 : Number(id);
  // const nextId = Number(id) < 500 ? Number(id) + 1 : Number(id);

  // const getPokemonsDetails = async () => {
  //   // PREVIOUS POKEMON
  //   const prevPokemonData: any =
  //     await axios.get(`https://pokeapi.co/api/v2/pokemon/${prevId}
  //   `);
  //   const prevName = prevPokemonData.data.name;
  //   const prevImage =
  //     prevPokemonData.data.sprites.other.dream_world.front_default;
  //   const promissePrevColor = await axios.get(prevPokemonData.data.species.url);
  //   const prevColor = promissePrevColor.data.color.name;
  //   const prevWeight = prevPokemonData.data.weight;
  //   const prevHeight = prevPokemonData.data.height;
  //   const prevStatsNames = prevPokemonData.data.stats.map(
  //     (stats: any) => stats.stat.name
  //   );
  //   const prevStatsValues = prevPokemonData.data.stats.map(
  //     (stats: any) => stats.base_stat
  //   );
  //   const prevTypes = prevPokemonData.data.types.map(
  //     (types: any) => types.type.name
  //   );

  //   const prevPokemon = {
  //     name: prevName,
  //     image: prevImage,
  //     color: prevColor,
  //     weight: prevWeight,
  //     height: prevHeight,
  //     statsNames: prevStatsNames,
  //     statsValues: prevStatsValues,
  //     types: prevTypes,
  //   };

  //   // CURRENT POKEMON
  //   const currentPokemonData: any =
  //     await axios.get(`https://pokeapi.co/api/v2/pokemon/${currentId}
  //   `);
  //   const currentName = currentPokemonData.data.name;
  //   const currentImage =
  //     currentPokemonData.data.sprites.other.dream_world.front_default;
  //   const promisseCurrentColor = await axios.get(
  //     currentPokemonData.data.species.url
  //   );
  //   const currentColor = promisseCurrentColor.data.color.name;
  //   const currentWeight = currentPokemonData.data.weight;
  //   const currentHeight = currentPokemonData.data.height;
  //   const currentStatsNames = currentPokemonData.data.stats.map(
  //     (stats: any) => stats.stat.name
  //   );
  //   const currentStatsValues = currentPokemonData.data.stats.map(
  //     (stats: any) => stats.base_stat
  //   );
  //   const currentTypes = currentPokemonData.data.types.map(
  //     (types: any) => types.type.name
  //   );

  //   const currentPokemon = {
  //     name: currentName,
  //     image: currentImage,
  //     color: currentColor,
  //     weight: currentWeight,
  //     height: currentHeight,
  //     statsNames: currentStatsNames,
  //     statsValues: currentStatsValues,
  //     types: currentTypes,
  //   };

  //   // NEXT POKEMON
  //   const nextPokemonData: any =
  //     await axios.get(`https://pokeapi.co/api/v2/pokemon/${nextId}
  //   `);
  //   const nextName = nextPokemonData.data.name;
  //   const nextImage =
  //     nextPokemonData.data.sprites.other.dream_world.front_default;
  //   const promisseNextColor = await axios.get(nextPokemonData.data.species.url);
  //   const nextColor = promisseNextColor.data.color.name;
  //   const nextWeight = nextPokemonData.data.weight;
  //   const nextHeight = nextPokemonData.data.height;
  //   const nextStatsNames = nextPokemonData.data.stats.map(
  //     (stats: any) => stats.stat.name
  //   );
  //   const nextStatsValues = nextPokemonData.data.stats.map(
  //     (stats: any) => stats.base_stat
  //   );
  //   const nextTypes = nextPokemonData.data.types.map(
  //     (types: any) => types.type.name
  //   );
  //   const nextPokemon = {
  //     name: nextName,
  //     image: nextImage,
  //     color: nextColor,
  //     weight: nextWeight,
  //     height: nextHeight,
  //     statsNames: nextStatsNames,
  //     statsValues: nextStatsValues,
  //     types: nextTypes,
  //   };

  //   setPokemons([prevPokemon, currentPokemon, nextPokemon]);
  // };

  // useEffect(() => {
  //   getPokemonsDetails();
  // }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100svw",
        height: "100svh",
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
          // background: `linear-gradient(to top, lightgray 0% , white 20%)`,
          width: isMobile ? "100%" : "50%",
          height: isMobile ? "5svh" : "10svh",
          borderRadius: "0px 0px 8px 8px",
          boxShadow: "2px 2px 8px 1px #000",
          position: "absolute",
          top: "0px",
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
            variant="h5"
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
          padding: isMobile ? 0 : 20,
          position: "absolute",
          top: isMobile ? "7svh" : "50px",
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
          // background: `linear-gradient(to bottom, lightgray 0% , white 20%)`,
          width: isMobile ? "100%" : "50%",
          height: isMobile ? "60svh" : "40svh",
          borderRadius: "8px 8px 0px 0px",
          boxShadow: "2px 2px 8px 1px #000",
          position: "absolute",
          bottom: "0px",
          zIndex: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
            variant={isMobile ? "body2" : "body1"}
            fontWeight={500}
            textAlign={"center"}
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

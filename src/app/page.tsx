"use client";

import FloatButton from "@/components/FloatButton";
import NavBar from "@/components/NavBar";
import PokemonCard from "@/components/PokemonCard";
import CircularIndeterminate from "@/components/Progress";
import { Container, Grid } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [pokemons, setPokemons] = useState([{}]);
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  const getPokemons = async () => {
    const response: any = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`
    );
    const pokeApiResults = response.data.results;
    const promises = pokeApiResults.map((result: any) => axios.get(result.url));
    const responses = await Promise.allSettled(promises);
    const pokemonsData = responses.map((names: any) => names.value.data);
    const ids = pokemonsData.map((id: any) => id.id);
    const pokemonName = pokemonsData.map((pokemon: any) => pokemon.name);
    const pokemonTypes = pokemonsData.map((pokemonTypes: any) =>
      pokemonTypes.types.map((info: any) => info.type.name)
    );
    const pokemonImg = pokemonsData.map(
      (pokemon: any) => pokemon.sprites.other.dream_world.front_default
    );
    const promisesColors = pokemonsData.map((pokemon: any) =>
      axios.get(pokemon.species.url)
    );
    const responsesColors = await Promise.allSettled(promisesColors);
    const colors = responsesColors.map(
      (response: any) => response.value.data.color.name
    );
    const height = pokemonsData.map((pokemon) => pokemon.height);
    const statsValues = pokemonsData.map((pokemon) =>
      pokemon.stats.map((stat: any) => stat.base_stat)
    );
    const statsNames = pokemonsData.map((pokemon) =>
      pokemon.stats.map((statName: any) => statName.stat.name)
    );
    const weight = pokemonsData.map((pokemon) => pokemon.weight);

    const newPokemons = ids.map((id, i) => ({
      id: id,
      name: pokemonName[i],
      types: pokemonTypes[i],
      img: pokemonImg[i],
      color: colors[i],
      height: height[i],
      statsValues: statsValues[i],
      statsNames: statsNames[i],
      weight: weight[i],
    }));

    setOffset((offsetInside) => offsetInside + 50);

    setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    if (pokemons.length < 500) {
      setHasMore(true);
    } else setHasMore(false);
  }, [pokemons.length]);

  return (
    <>
      <NavBar searchState={search} setSearchState={setSearch} />
      <Container maxWidth={"xl"} sx={{ marginTop: 10 }}>
        <InfiniteScroll
          dataLength={pokemons.length}
          next={getPokemons}
          hasMore={hasMore}
          loader={""}
          style={{ overflow: "unset", textAlign: "center" }}
        >
          <Grid container spacing={0} id="pokemon-list">
            {pokemons.length === 1 ? (
              <CircularIndeterminate />
            ) : (
              pokemons
                .filter((pokemon: any) =>
                  pokemon?.name?.toLowerCase().includes(search.toLowerCase())
                )
                .map((pokemon: any, key) => (
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    key={key}
                    id={pokemon.id}
                  >
                    <Link
                      href={{
                        pathname: "/details",
                        query: pokemon,
                      }}
                      style={{ textDecoration: "none" }}
                    >
                      <PokemonCard
                        name={pokemon.name}
                        image={pokemon.img}
                        types={pokemon.types}
                        id={pokemon.id}
                        color={pokemon.color}
                        height={pokemon.height}
                        weight={pokemon.weight}
                        statsNames={pokemon.statsNames}
                        statsValues={pokemon.statsValues}
                      />
                    </Link>
                  </Grid>
                ))
            )}
          </Grid>
        </InfiniteScroll>
        <FloatButton />
      </Container>
    </>
  );
}

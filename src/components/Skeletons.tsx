import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Container, Grid } from "@mui/material";

export default function Skeletons() {
  return (
    <Container maxWidth={"xl"} sx={{ marginTop: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Skeleton
            variant="rounded"
            width={210}
            height={120}
            sx={{ marginBottom: 1 }}
          />
          <Skeleton
            variant="rounded"
            width={210}
            height={25}
            sx={{ marginBottom: 1 }}
          />
          <Skeleton
            variant="rounded"
            width={210}
            height={25}
            sx={{ marginBottom: 1 }}
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Skeleton
            variant="rounded"
            width={210}
            height={120}
            sx={{ marginBottom: 1 }}
          />
          <Skeleton
            variant="rounded"
            width={210}
            height={25}
            sx={{ marginBottom: 1 }}
          />
          <Skeleton
            variant="rounded"
            width={210}
            height={25}
            sx={{ marginBottom: 1 }}
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Skeleton
            variant="rounded"
            width={210}
            height={120}
            sx={{ marginBottom: 1 }}
          />
          <Skeleton
            variant="rounded"
            width={210}
            height={25}
            sx={{ marginBottom: 1 }}
          />
          <Skeleton
            variant="rounded"
            width={210}
            height={25}
            sx={{ marginBottom: 1 }}
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Skeleton
            variant="rounded"
            width={210}
            height={120}
            sx={{ marginBottom: 1 }}
          />
          <Skeleton
            variant="rounded"
            width={210}
            height={25}
            sx={{ marginBottom: 1 }}
          />
          <Skeleton
            variant="rounded"
            width={210}
            height={25}
            sx={{ marginBottom: 1 }}
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Skeleton
            variant="rounded"
            width={210}
            height={120}
            sx={{ marginBottom: 1 }}
          />
          <Skeleton
            variant="rounded"
            width={210}
            height={25}
            sx={{ marginBottom: 1 }}
          />
          <Skeleton
            variant="rounded"
            width={210}
            height={25}
            sx={{ marginBottom: 1 }}
          />
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Skeleton
            variant="rounded"
            width={210}
            height={120}
            sx={{ marginBottom: 1 }}
          />
          <Skeleton
            variant="rounded"
            width={210}
            height={25}
            sx={{ marginBottom: 1 }}
          />
          <Skeleton
            variant="rounded"
            width={210}
            height={25}
            sx={{ marginBottom: 1 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

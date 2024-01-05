import { Box, Button, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";
import React from "react";

interface HeaderProps {
  id: string;
  isMobile: boolean;
  name: string;
}

const HeaderDetails = ({ id, isMobile, name }: HeaderProps) => {
  return (
    <Box
      sx={{
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
      <Box
        sx={{
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
      </Box>
    </Box>
  );
};

export default HeaderDetails;

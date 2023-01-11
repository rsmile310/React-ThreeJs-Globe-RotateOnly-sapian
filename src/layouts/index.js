import { Outlet } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
// config
// import { NAVBAR } from "../../config";
//
import Header from "./header";
import Footer from "./footer";
import ScrollToTopBtn from "../components/ScrollToTopBtn";
import { useEffect, useState } from "react";

// ----------------------------------------------------------------------

const MainStyle = styled("main")({
  width: "100%",
});

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [headerBg, setHeaderBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleHeaderBg);
  });
  const handleHeaderBg = () => {
    const position = window.pageYOffset;
    if (position > 100) setHeaderBg(true);
    else setHeaderBg(false);
  };
  return (
    <Box
      sx={{
        display: { lg: "flex" },
        minHeight: { lg: 1 },
      }}
    >
      <Header bg={headerBg} />
      <MainStyle>
        <Outlet />
        <Footer />
      </MainStyle>
      <ScrollToTopBtn />
    </Box>
  );
}

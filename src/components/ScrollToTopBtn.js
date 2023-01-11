import { IconButtonAnimate } from "./animate";
import Iconify from "./Iconify";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

export default function ScrollToTopBtn() {
  const [showButton, setShowButton] = useState(false);
  const scrollTopHandler = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  },);
  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    if (position > 100) setShowButton(true);
    else setShowButton(false);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "64px",
        right: "24px",
        transition: "opacity ease 500ms",
        opacity: `${showButton ? "1" : "0"}`,
        zIndex: "999",
      }}
    >
      <IconButtonAnimate onClick={scrollTopHandler}>
        <Iconify
          icon="bi:arrow-up-circle"
          sx={{ fontSize: "40px", color: "#4900FF" }}
        />
      </IconButtonAnimate>
    </Box>
  );
}

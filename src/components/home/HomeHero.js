import { useEffect, useState } from "react";
import { m } from "framer-motion";

// @mui
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";
// components
import { MotionViewport, varFade } from "../animate";
import useLocales from "../../hooks/useLocales";
import DefautlBtn from "../DefaultBtn";
import * as topojson from "topojson";
import Globe from "../Globe";
import { world } from "../../config";
import Wave from "./Wave";
import Image from "../Image";

// ----------------------------------------------------------------------

const BoxStyle = styled(Box)({
  width: "100%",
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
  // backgroundImage: "url(/assets/images/hero_bg.png)",
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  "& .hero-bg-mask": {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(360deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
    backdropFilter: "blur(1.5px)",
    zIndex: "1",
  },
});

// ----------------------------------------------------------------------

export default function HomeHero() {
  const { translate } = useLocales();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [geoJson, setGeoJson] = useState({});

  useEffect(() => {
    let geoJson = topojson.feature(world, world.objects.land);
    setGeoJson(geoJson);
  }, []);

  return (
    <MotionViewport>
      <BoxStyle>
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%", maxWidth: "1140px", mx: "auto", zIndex: "2" }}
          px={3}
          py={6}
          mt={{ xs: 12, md: 0 }}
        >
          <Box sx={{ maxWidth: "445px", mb: { xs: 5, md: 0 } }}>
            <m.div variants={varFade().inLeft}>
              <Typography
                mb={3}
                variant="h1"
                color="white"
                dangerouslySetInnerHTML={{ __html: translate("hero_title") }}
              />
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography mb={3} variant="body1" color="#ACAAC0">
                {translate("hero_content")}
              </Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <DefautlBtn text="Learn More" href="#about" />
            </m.div>
          </Box>
          <Box>
            <Globe geoJson={geoJson} size={matches ? 500 : 320} />
          </Box>
        </Stack>
        {/* <Box
          sx={{
            position: "absolute",
            top: "0",
            right: "0",
            transform: "translate(50%, -50%)",
          }}
        >
          <Image
            src="/assets/images/radial_gradient_img.png"
            sx={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            left: "0",
            transform: "translate(-50%, 50%)",
          }}
        >
          <Image
            src="/assets/images/radial_gradient_img.png"
            sx={{ width: "70%" }}
          />
        </Box> */}
        <Wave />
      </BoxStyle>
    </MotionViewport>
  );
}

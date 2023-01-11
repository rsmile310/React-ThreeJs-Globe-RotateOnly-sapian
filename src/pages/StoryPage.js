import { m } from "framer-motion";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Image from "../components/Image";
import Page from "../components/Page";
import useLocales from "../hooks/useLocales";
import { MotionViewport, varFade } from "../components/animate";

// ----------------------------------------------------------------------
const HeroStyle = styled(Box)({
  width: "100%",
  height: "324px",
  position: "relative",
  backgroundImage: "url(/assets/images/story_bg.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  "&>div": {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,0)",
  },
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
export default function StoryPage() {
  const { translate } = useLocales();
  return (
    <Page title="Ceo page">
      <MotionViewport>
        <HeroStyle>
          <Box>
            <m.div variants={varFade().in}>
              <Typography variant="h1" color="white">
                Our Story
              </Typography>
            </m.div>
          </Box>
        </HeroStyle>
      </MotionViewport>
      <MotionViewport>
        <Box maxWidth="1188px" mx="auto" px={3} py={6}>
          <m.div variants={varFade().inUp}>
            <Typography variant="h2" mb={6}>
              Our Driving Force - The Origin Of The Project
            </Typography>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography variant="body1" mb={6}>
              {translate("story_desc")}
            </Typography>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Image src="/assets/images/story_img.png" />
          </m.div>
        </Box>
      </MotionViewport>
    </Page>
  );
}

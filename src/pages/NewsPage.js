import { m } from "framer-motion";
import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import Page from "../components/Page";
import { MotionViewport, varFade } from "../components/animate";
import NewsCard from "../components/NewsCard";
import { NewsConfig } from "../config";

// ----------------------------------------------------------------------
const HeroStyle = styled(Box)({
  width: "100%",
  height: "324px",
  position: "relative",
  backgroundImage: "url(/assets/images/hero_bg.png)",
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
export default function NewsPage() {
  
  return (
    <Page title="News page">
      <MotionViewport>
        <HeroStyle>
          <Box>
            <m.div variants={varFade().in}>
              <Typography variant="h1" color="white">
                News and Events
              </Typography>
            </m.div>
          </Box>
        </HeroStyle>
      </MotionViewport>
      <MotionViewport>
        <Box maxWidth="1188px" mx="auto" px={3} py={6}>
          <Grid container spacing={2}>
            {NewsConfig.map((e, index) => (
              <Grid item sm={6} lg={4} key={index}>
                <m.div variants={varFade().inUp}>
                  <NewsCard
                    img={e.img}
                    title={e.title}
                    date={e.date}
                    desc={e.desc}
                    url={e.url}
                  />
                </m.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </MotionViewport>
    </Page>
  );
}

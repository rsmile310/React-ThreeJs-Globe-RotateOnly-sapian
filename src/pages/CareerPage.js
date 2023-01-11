import { m } from "framer-motion";
import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import Image from "../components/Image";
import Page from "../components/Page";
import useLocales from "../hooks/useLocales";
import { MotionViewport, varFade } from "../components/animate";
import DefaultBtn from "../components/DefaultBtn";

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
const StackStyle = styled(Stack)({
  background: "#F6F6F6",
  boxShadow: "0px 10px 48px rgba(0, 0, 0, 0.1)",
  borderRadius: "25px",
  padding: "48px",
});

const CareerData = [
  {
    title: "career_title1",
    desc: "career_desc2",
    img: "/assets/images/Logo_Ollorun_B_01.svg",
    url: "/earlycareer",
  },
  {
    title: "career_title2",
    desc: "career_desc2",
    img: "/assets/images/ELITE_Sapian-01.svg",
    url: "/eliteprogram",
  },
  {
    title: "career_title3",
    desc: "career_desc3",
    img: "/assets/images/noun-world.svg",
    url: "/reimagine",
  },
];
export default function CareerPage() {
  const { translate } = useLocales();
  return (
    <Page title="Ceo page">
      <MotionViewport>
        <HeroStyle>
          <Box>
            <m.div variants={varFade().in}>
              <Typography variant="h1" color="white">
                Career
              </Typography>
            </m.div>
          </Box>
        </HeroStyle>
      </MotionViewport>
      <MotionViewport>
        <Box maxWidth="1188px" mx="auto" px={3} py={6}>
          <MotionViewport>
            {CareerData.map((e, index) => (
              <m.div key={index} variants={varFade().inUp}>
                <StackStyle
                  flexDirection={{ xs: "column", md: "row" }}
                  justifyContent="space-between"
                  mb={3}
                  sx={{
                    width: "100%",
                    maxWidth: "1140px",
                    mx: "auto",
                    zIndex: "2",
                  }}
                >
                  <Stack maxWidth="690px" mb={{ xs: 4, md: 0 }}>
                    <Typography variant="h3" mb={6}>
                      {translate(e.title)}
                    </Typography>
                    <Typography variant="body1" mb={6}>
                      {translate(e.desc)}
                    </Typography>
                    <Box mt="auto">
                      <DefaultBtn text="Read More" href={e.url} />
                    </Box>
                  </Stack>
                  <Box>
                    <Image
                      src={e.img}
                      sx={{ width: "315px", maxWidth: "100%", mx: "auto" }}
                    />
                  </Box>
                </StackStyle>
              </m.div>
            ))}
          </MotionViewport>
        </Box>
      </MotionViewport>
    </Page>
  );
}

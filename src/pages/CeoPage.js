import { m } from "framer-motion";
import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import Image from "../components/Image";
import Page from "../components/Page";
import useLocales from "../hooks/useLocales";
import { MotionViewport, varFade } from "../components/animate";

// ----------------------------------------------------------------------
const HeroStyle = styled(Box)({
  width: "100%",
  height: "324px",
  position: "relative",
  backgroundImage: "url(/assets/images/serge_letter_bg.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  "&>div": {
    position: "absolute",
    left: "50%",
    bottom: "0",
    transform: "translate(-50%, 50%)",
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
export default function CeoPage() {
  const { translate } = useLocales();
  return (
    <Page title="Ceo page">
      <HeroStyle mb="167px">
        <Box>
          <Image src="/assets/images/serge_avatar.png" />
        </Box>
      </HeroStyle>
      <MotionViewport>
        <Box maxWidth="1188px" mx="auto" px={3} pb={6}>
          <m.div variants={varFade().inUp}>
            <Stack direction="row" alignItems="center" mb={{ xs: 6, md: 16 }}>
              <Box mr={2}>
                <Image src="/assets/images/Quote.svg" sx={{ width: "64px" }} />
              </Box>
              <Typography variant="h2">
                A letter from our CEO Serge Maurice Lobréau
              </Typography>
            </Stack>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              variant="body1"
              dangerouslySetInnerHTML={{ __html: translate("serge_letter") }}
            />
          </m.div>
        </Box>
      </MotionViewport>
    </Page>
  );
}

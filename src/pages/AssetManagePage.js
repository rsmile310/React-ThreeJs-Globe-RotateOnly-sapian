import { m } from "framer-motion";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Image from "../components/Image";
import Page from "../components/Page";
import useLocales from "../hooks/useLocales";
import { MotionViewport, varFade, varZoom } from "../components/animate";

// ----------------------------------------------------------------------
const HeroStyle = styled(Box)({
  width: "100%",
  height: "324px",
  position: "relative",
  backgroundImage: "url(/assets/images/assetmanage_bg.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  "&>div:first-of-type": {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,0)",
    zIndex: "2",
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
export default function AssetManagePage() {
  const { translate } = useLocales();
  return (
    <Page title="Asset management page">
      <MotionViewport>
        <HeroStyle>
          <Box>
            <m.div variants={varFade().in}>
              <Typography variant="h1" color="white">
                Assest Management
              </Typography>
            </m.div>
          </Box>
          <Box className="hero-bg-mask" />
        </HeroStyle>
      </MotionViewport>
      <MotionViewport>
        <Box maxWidth="1188px" mx="auto" px={3} py={6}>
          <Box>
            <m.div variants={varFade().inUp}>
              <Image
                src="/assets/images/Sapian_Logo_capital.svg"
                sx={{ width: "240px", mb: 6, mx: "auto" }}
              />
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography variant="body1" mb={6}>
                {translate("asset_manage_desc1")}
              </Typography>
            </m.div>
          </Box>
          <m.div variants={varZoom().in}>
            <Box component="hr" my={{ xs: 6, md: 14 }} />
          </m.div>
          <Box>
            <m.div variants={varFade().inUp}>
              <Image
                src="/assets/images/Sapian_Logo_crypto.svg"
                sx={{ width: "240px", mb: 6, mx: "auto" }}
              />
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography variant="body1" mb={6}>
                {translate("asset_manage_desc2")}
              </Typography>
            </m.div>
          </Box>
        </Box>
      </MotionViewport>
    </Page>
  );
}

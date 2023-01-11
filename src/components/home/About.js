import { m } from "framer-motion";
// @mui
import { Box, Typography } from "@mui/material";
// components
import { MotionViewport, varFade } from "../animate";
import useLocales from "../../hooks/useLocales";
import Image from "../Image";
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function About() {
  const { translate } = useLocales();
  return (
    <Box
      py="48px"
      px="24px"
      id="about"
      position="relative"
      sx={{ overflow: "hidden" }}
    >
      <MotionViewport>
        <Box sx={{ width: "100%", maxWidth: "1140px", mx: "auto" }}>
          <m.div variants={varFade().inUp}>
            <Typography variant="h2" color="white" sx={{ mb: 5 }}>
              {translate("about_title")}
            </Typography>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography
              variant="body1"
              color="white"
              dangerouslySetInnerHTML={{ __html: translate("about_content") }}
            />
          </m.div>
        </Box>
      </MotionViewport>
      {/* <Box
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Image
          src="/assets/images/radial_gradient_img.png"
          sx={{ width: "70%" }}
        />
      </Box> */}
    </Box>
  );
}

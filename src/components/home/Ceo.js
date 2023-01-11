import { m } from "framer-motion";
// @mui
import { Box, Stack, Typography } from "@mui/material";
// components
import { MotionViewport, varFade, varBounce } from "../animate";
import useLocales from "../../hooks/useLocales";
import DefautlBtn from "../DefaultBtn";
import Image from "../Image";
// ----------------------------------------------------------------------

export default function Ceo() {
  const { translate } = useLocales();
  return (
    <Box py="48px" px="24px">
      <MotionViewport>
        <Box sx={{ width: "100%", maxWidth: "1140px", mx: "auto" }}>
          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100%", maxWidth: "1140px", mx: "auto", zIndex: "2" }}
          >
            <Stack flexDirection="row" mb={{ xs: 4, md: 0 }}>
              <m.div variants={varBounce().in}>
                <Box>
                  <Image
                    src="/assets/images/Quote.svg"
                    sx={{ width: "64px", height: "64px", mr: 2, mt: 1 }}
                  />
                </Box>
              </m.div>
              <Box maxWidth="430px">
                <m.div variants={varFade().inUp}>
                  <Typography variant="h2" mb={4}>
                    {translate("ceo_title")}
                  </Typography>
                </m.div>
                <m.div variants={varFade().inUp}>
                  <Typography variant="body1" mb={10}>
                    {translate("ceo_text")}
                  </Typography>
                </m.div>
                <m.div variants={varFade().inUp}>
                  <DefautlBtn text="Read Serge’s Letter" href="/ceo" />
                </m.div>
              </Box>
            </Stack>
            <m.div variants={varFade().inDown}>
              <Image src="/assets/images/Serge.png" />
            </m.div>
          </Stack>
        </Box>
      </MotionViewport>
    </Box>
  );
}

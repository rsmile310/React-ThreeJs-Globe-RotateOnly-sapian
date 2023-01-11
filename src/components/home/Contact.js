import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";
// components
import { MotionViewport, varZoom } from "../animate";
import useLocales from "../../hooks/useLocales";
import DefaultBtn from "../DefaultBtn";
import Image from "../Image";
// ----------------------------------------------------------------------

const StackStyle = styled(Stack)({
  background: "#F6F6F6",
  boxShadow: "0px 10px 48px rgba(0, 0, 0, 0.1)",
  borderRadius: "25px",
  padding: "48px",
});
// ----------------------------------------------------------------------

export default function Contact() {
  const { translate } = useLocales();
  return (
    <Box px="24px" mb={6}>
      <Box sx={{ width: "100%", maxWidth: "1140px", mx: "auto" }}>
        <MotionViewport>
          <m.div variants={varZoom().in}>
            <StackStyle
              flexDirection={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              sx={{
                width: "100%",
                maxWidth: "1140px",
                mx: "auto",
                zIndex: "2",
              }}
            >
              <Stack maxWidth="690px" mb={{ xs: 4, md: 0 }}>
                <Typography variant="h3" mb={6}>
                  {translate("contact_section_title")}
                </Typography>
                <Typography variant="body1" mb={6}>
                  {translate("contact_section_content")}
                </Typography>
                <Box mt="auto">
                  <DefaultBtn text="Contact Us" />
                </Box>
              </Stack>
              <Box>
                <Image
                  src="/assets/images/contact.png"
                  sx={{ width: "315px", maxWidth: "100%", mx: "auto" }}
                />
              </Box>
            </StackStyle>
          </m.div>
        </MotionViewport>
      </Box>
    </Box>
  );
}

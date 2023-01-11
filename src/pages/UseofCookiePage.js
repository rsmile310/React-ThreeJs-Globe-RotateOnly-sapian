import { m } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { MotionContainer, varFade } from "../components/animate";
import useLocales from "../hooks/useLocales";
import Page from "../components/Page";

// @mui
import { styled } from "@mui/material/styles";
// import ScrollUpButton from "react-scroll-up-button";
const BoxStyle = styled(Box)({
  width: "1280px",
  maxWidth: "100%",
  margin: "0 auto",
  padding: "80px 24px 0",
  h4: {
    color: "#fff",
    marginBottom: "24px",
    fontSize: "26px",
  },
  p: {
    color: "#828082",
  },
  ul: {
    paddingInlineStart: "50px",
  },
  li: {
    color: "#828082",
    marginBottom: "16px",
  },
});
// components

// ----------------------------------------------------------------------

export default function UseofCookiePage() {
  const { translate } = useLocales();
  return (
    <Page title="Cookie page">
      <MotionContainer>
        <m.div variants={varFade().in}>
          <BoxStyle sx={{ py: 8 }}>
            <Typography
              variant="h2"
              className="grad_text"
              sx={{
                px: "8px",
              }}
              textAlign="center"
            >
              {translate("UseofCookies")}
            </Typography>
            <Box mt={4} dangerouslySetInnerHTML = {{__html: translate("CookiePageContent")}} />
          </BoxStyle>
        </m.div>
      </MotionContainer>
    </Page>
  );
}

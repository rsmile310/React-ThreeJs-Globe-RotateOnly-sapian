import * as React from "react";
import { m } from "framer-motion";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Page from "../components/Page";
import useLocales from "../hooks/useLocales";
import { MotionViewport, varFade } from "../components/animate";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Iconify from "../components/Iconify";

const FrqConfig = [
  {
    quiz: `faq_quiz1`,
    answere: `faq_answer1`,
  },
  {
    quiz: `faq_quiz1`,
    answere: `faq_answer1`,
  },
  {
    quiz: `faq_quiz1`,
    answere: `faq_answer1`,
  },
  {
    quiz: `faq_quiz1`,
    answere: `faq_answer1`,
  },
  {
    quiz: `faq_quiz1`,
    answere: `faq_answer1`,
  },
  {
    quiz: `faq_quiz1`,
    answere: `faq_answer1`,
  },
  {
    quiz: `faq_quiz1`,
    answere: `faq_answer1`,
  },
];

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  borderBottom: "1px solid rgba(51, 51, 51, 0.2)",
  "&.Mui-expanded": {
    backgroundColor: "#F6F6F6",
    borderRadius: "0",
    boxShadow: "none",
  },
  "&:last-child": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    // expandIcon={
    //   <Iconify
    //     // icon={`${props.expanded}?"ic:baseline-plus":"ic:baseline-minus"`}
    //     icon="ic:baseline-plus"
    //     sx={{ fontSize: "24px" }}
    //   />
    // }
    {...props}
  />
))(({ theme }) => ({
  // flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

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

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("");
  const text = "panel";
  const text1 = "d-header";
  const text2 = "d-content";
  const { translate } = useLocales();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Page title="FAQ page">
      <MotionViewport>
        <HeroStyle>
          <Box>
            <m.div variants={varFade().in}>
              <Typography variant="h1" color="white">
                FAQ
              </Typography>
            </m.div>
          </Box>
        </HeroStyle>
      </MotionViewport>
      <MotionViewport>
        <Box maxWidth="1088px" mx="auto" px={3} py={6}>
          <Box mb={5} textAlign="center">
            <Typography variant="h2" mb={3}>
              Ask us anything
            </Typography>
            <Typography variant="body1">
              Have any questions? We're here to assist you.
            </Typography>
          </Box>
          {FrqConfig.map((e, index) => (
            <Accordion
              key={index}
              expanded={expanded === text + Number(index + 1)}
              onChange={handleChange(`${text + Number(index + 1)}`)}
              sx={{ backgroundColor: `${expanded}?"#F6F6F6":"#fff"` }}
            >
              <AccordionSummary
                aria-controls={text + Number(index + 1) + text2}
                id={text + Number(index + 1) + text1}
                sx={{
                  py: 2,
                }}
              >
                <Box display="flex" my="auto">
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                      fontWeight: "bolder",
                      color: "rgba(51, 51, 51, 0.5)",
                    }}
                    mr={2}
                  >
                    {index + 1}.
                  </Typography>
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{ fontWeight: "lighter" }}
                  >
                    {translate(e.quiz)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    my: "auto",
                    ml: "auto",
                    width: "64px",
                    height: "64px",
                    background: "#FBFBFB",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Iconify
                    icon={
                      expanded === text + Number(index + 1)
                        ? "ic:baseline-minus"
                        : "ic:baseline-plus"
                    }
                    sx={{ fontSize: "24px" }}
                  />
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="p"
                  component="p"
                  sx={{ fontWeight: "lighter" }}
                  dangerouslySetInnerHTML={{ __html: translate(e.answere) }}
                />
              </AccordionDetails>
            </Accordion>
          ))}
          {/* <m.div variants={varFade().inUp}>
            <Image
              src="/assets/images/FlashGroup-NEW.svg"
              sx={{ width: "240px", mb: 6, mx: "auto" }}
            />
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography variant="body1" mb={6}>
              {translate("flash_tech_desc")}
            </Typography>
          </m.div> */}
        </Box>
      </MotionViewport>
    </Page>
  );
}

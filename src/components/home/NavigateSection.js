import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Grid, Stack, Typography } from "@mui/material";
// components
import { MotionViewport, varFlip } from "../animate";
import useLocales from "../../hooks/useLocales";
import DefaultBtn from "../DefaultBtn";
import Image from "../Image";
// ----------------------------------------------------------------------

const StackStyle = styled(Stack)({
  background: "#F6F6F6",
  borderRadius: "25px",
});
const NavigateData = [
  {
    img: "/assets/images/Story.svg",
    title: "Story",
    url: "/story",
  },
  {
    img: "/assets/images/Career.svg",
    title: "Career",
    url: "/career",
  },
  {
    img: "/assets/images/News.svg",
    title: "News",
    url: "/news",
  },
  {
    img: "/assets/images/FAQ.svg",
    title: "FAQ",
    url: "/faq",
  },
];
// ----------------------------------------------------------------------

export default function NavigateSection() {
  const { translate } = useLocales();
  return (
    <Box mb="48px" px="24px">
      <Box sx={{ width: "100%", maxWidth: "1140px", mx: "auto" }}>
        <MotionViewport>
          <Grid container spacing={2} alignItems="center">
            {NavigateData.map((e, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <m.div variants={varFlip().inY}>
                  <StackStyle textAlign="center" py={6} px={3}>
                    <Box mx="auto" mb={5}>
                      <Image src={e.img} sx={{ width: "64px" }} />
                    </Box>
                    <Typography variant="h3" mb={3}>
                      {translate(e.title)}
                    </Typography>
                    <Box>
                      <DefaultBtn text="Read More" href={e.url} />
                    </Box>
                  </StackStyle>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </MotionViewport>
      </Box>
    </Box>
  );
}

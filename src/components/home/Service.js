import { m } from "framer-motion";
// @mui
import { Box, Grid, Stack, Typography } from "@mui/material";
// components
import { MotionViewport, varFade, varFlip, varBounce } from "../animate";
import useLocales from "../../hooks/useLocales";
import DefaultBtn from "../DefaultBtn";
import Image from "../Image";
// ----------------------------------------------------------------------

const serviceData = [
  {
    img: "/assets/images/img1.png",
    num: "/assets/images/num1.png",
    title: "service_title1",
    content: "service_content1",
    url: "/ozeetyblockchain",
  },
  {
    img: "/assets/images/img2.png",
    num: "/assets/images/num2.png",
    title: "service_title2",
    content: "service_content2",
    url: "/assetmanage",
  },
  {
    img: "/assets/images/img3.png",
    num: "/assets/images/num3.png",
    title: "service_title3",
    content: "service_content3",
    url: "/finacetech",
  },
];
// ----------------------------------------------------------------------

export default function Service() {
  const { translate } = useLocales();
  return (
    <Box px="24px">
      <Box sx={{ width: "100%", maxWidth: "1140px", mx: "auto" }}>
        {serviceData.map((e, index) => (
          <MotionViewport key={index}>
            <Grid
              container
              spacing={4}
              flexDirection={index === 1 ? "row-reverse" : "row"}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item md={6}>
                <m.div variants={varFlip().inY}>
                  <Box p={{ xs: 0, md: 5 }}>
                    <Image src={e.img} />
                  </Box>
                </m.div>
              </Grid>
              <Grid item md={6}>
                <Stack flexDirection="row" mb={6}>
                  <m.div variants={varBounce().in}>
                    <Box mr={2}>
                      <Image src={e.num} sx={{ width: "104px" }} />
                    </Box>
                  </m.div>
                  <Box>
                    <m.div variants={varFade().inUp}>
                      <Typography variant="h3" mb={6} mt={3}>
                        {translate(e.title)}
                      </Typography>
                    </m.div>
                    <m.div variants={varFade().inUp}>
                      <Typography
                        variant="body1"
                        dangerouslySetInnerHTML={{
                          __html: translate(e.content),
                        }}
                        mb={7}
                        marginLeft={{ xs: "-120px", sm: "0" }}
                      />
                    </m.div>
                    <m.div variants={varFade().inUp}>
                      <DefaultBtn
                        text="Read More"
                        href={e.url}
                        sx={{ marginLeft: { xs: "-120px", sm: "0" } }}
                      />
                    </m.div>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </MotionViewport>
        ))}
      </Box>
    </Box>
  );
}

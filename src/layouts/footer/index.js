import { Stack, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { IconButtonAnimate } from "../../components/animate";
import Iconify from "../../components/Iconify";
import Logo from "../../components/Logo";
import useLocales from "../../hooks/useLocales";

const FooterStyle = styled("footer")(() => ({
  // background: "#000",
  padding: "40px 24px",
  color: "#838990",
  boxShadow: "none",
  "&>div": {
    maxWidth: "1440px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "0",
  },
}));
const LinkStyle = styled(Link)({
  fontWeight: "lighter",
  color: "#fff",
  fontSize: "14px",
  transition: "all ease 400ms",
  "&:hover": {
    color: "#4900FF",
  },
});

export default function Footer() {
  const { translate } = useLocales();
  const footerData = [
    {
      text: "Term of Use",
      url: "term",
    },
    {
      text: "Privacy Policy",
      url: "policy",
    },
    {
      text: "Use of Cookies",
      url: "cookie",
    },
  ];
  const SocialsData = [
    {
      img: "grommet-icons:instagram",
      url: "https://instagram.com/sapian_group?utm_medium=copy_link/",
    },
    {
      img: "akar-icons:linkedin-fill",
      url: "https://www.linkedin.com/company/sapian-group/",
    },
    {
      img: "akar-icons:facebook-fill",
      url: "https://www.facebook.com/flashmoni.official",
    },
    {
      img: "cib:medium-m",
      url: "https://blog.flashmoni.io/",
    },
    {
      img: "akar-icons:twitter-fill",
      url: "https://twitter.com/Flashmoniltd",
    },
  ];

  return (
    <FooterStyle>
      <Stack
        mx={3}
        mb={5}
        direction={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          sx={{
            textAlign: { xs: "center", lg: "left" },
          }}
          mb={{ xs: 4, lg: 0 }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", lg: "left" },
            }}
            mb={4}
          >
            <Logo type="txt_white" />
          </Box>
          <Stack spacing={2} ml={2}>
            {footerData.map((e, index) => (
              <LinkStyle key={index} href={e.url}>
                {translate(e.text)}
              </LinkStyle>
            ))}
          </Stack>
        </Box>
        <Box mb={{ xs: 4, lg: 0 }}>
          <Box mb={4} display="flex" justifyContent="center">
            <Logo type="img" />
          </Box>
          <Stack direction="row">
            <Box mr={2}>
              <Iconify
                icon="system-uicons:location"
                sx={{ color: "#fff", width: "24px", height: "24px" }}
              />
            </Box>
            <Box maxWidth="410px">
              <Typography variant="body1" color="white">
                {translate("footer_text")}
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Typography variant="body1" color="white" mb={3} ml={1}>
            Follow On:
          </Typography>
          <Stack direction="row">
            {SocialsData.map((e, index) => (
              <IconButtonAnimate key={index} href={e.url} target="_blank">
                <Iconify
                  icon={e.img}
                  width={20}
                  height={20}
                  sx={{ color: "#fff" }}
                />
              </IconButtonAnimate>
            ))}
          </Stack>
        </Box>
      </Stack>
      <Box textAlign="center">
        <Typography variant="body2" color="white">
          {translate("footer_sub_text")}
        </Typography>
      </Box>
    </FooterStyle>
  );
}

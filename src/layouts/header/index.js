import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import Logo from "../../components/Logo";
import useLocales from "../../hooks/useLocales";
import { IconButtonAnimate } from "../../components/animate";
import Iconify from "../../components/Iconify";

const pages = [
  {
    text: "Home",
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.1796 27.6979V23.6209C12.1796 22.5802 13.0295 21.7365 14.0778 21.7365H17.9101C18.4135 21.7365 18.8963 21.935 19.2523 22.2884C19.6083 22.6418 19.8083 23.1211 19.8083 23.6209V27.6979C19.8051 28.1305 19.976 28.5466 20.2831 28.8537C20.5902 29.1607 21.008 29.3334 21.4438 29.3334H24.0584C25.2794 29.3365 26.4516 28.8572 27.3161 28.0012C28.1807 27.1451 28.6666 25.9827 28.6666 24.7705V13.1559C28.6666 12.1767 28.2293 11.2479 27.4727 10.6196L18.5786 3.56791C17.0315 2.3315 14.8147 2.37142 13.3138 3.66272L4.6226 10.6196C3.83024 11.2294 3.35666 12.1609 3.33325 13.1559V24.7587C3.33325 27.2852 5.39643 29.3334 7.94148 29.3334H10.4963C11.4016 29.3334 12.1372 28.6084 12.1438 27.7097L12.1796 27.6979Z" />
    </svg>
    `,
    id: "/",
  },
  {
    text: "Our Story",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.411 21.39l-4.054 2.61-.266-1.053c-.187-.744-.086-1.534.282-2.199l2.617-4.729c.387 1.6.848 3.272 1.421 5.371zm13.215-.642l-2.646-4.784c-.391 1.656-.803 3.22-1.369 5.441l4.032 2.595.266-1.053c.186-.743.085-1.533-.283-2.199zm-3.626-11.592c-.035 3.267-1.166 7.176-2.347 11.844h-5.273c-1.234-4.534-2.38-8.469-2.38-11.809 0-3.703 1.511-6.688 5-9.191 3.559 2.517 5.04 5.425 5 9.156zm-2.114.578c.114-.328.161-1.187-.063-1.708-1.76.213-3.89.213-5.65 0-.223.521-.176 1.38-.061 1.708.687.195 1.786.292 2.887.292 1.099 0 2.198-.097 2.887-.292zm-1.439 14.266h-2.895l-.552-2h4l-.553 2z"/></svg>`,
    id: "/story",
  },
  {
    text: "Career",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.931 10.245l2.021-2.042-2.778-.403-1.223-2.653-1.222 2.653-2.778.402 2.021 2.042-.492 2.903 2.471-1.391 2.472 1.391-.492-2.902zm-9.481 4.518c-.866-1.382-1.374-3.012-1.374-4.763 0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.792-.53 3.458-1.433 4.861-.607-.31-1.228-.585-1.862-.819.812-1.143 1.295-2.536 1.295-4.042 0-3.86-3.141-7-7-7s-7 3.14-7 7c0 1.476.462 2.844 1.244 3.974-.636.225-1.26.488-1.87.789zm15.307 2.45l-2.334 3.322c-1.603-.924-3.448-1.464-5.423-1.473-1.975.009-3.82.549-5.423 1.473l-2.334-3.322c2.266-1.386 4.912-2.202 7.757-2.211 2.845.009 5.491.825 7.757 2.211zm4.243 2.787h-2.359l-.566 3c-.613-1.012-1.388-1.912-2.277-2.68l2.343-3.335c1.088.879 2.052 1.848 2.859 3.015zm-21.14-3.015l2.343 3.335c-.89.769-1.664 1.668-2.277 2.68l-.566-3h-2.36c.807-1.167 1.771-2.136 2.86-3.015z"/></svg>`,
    id: "/career",
  },
  {
    text: "News",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 16h13v1h-13v-1zm13-3h-13v1h13v-1zm0-6h-5v1h5v-1zm0 3h-5v1h5v-1zm-17-8v17.199c0 .771-1 .771-1 0v-15.199h-2v15.98c0 1.115.905 2.02 2.02 2.02h19.958c1.117 0 2.022-.904 2.022-2.02v-17.98h-21zm19 17h-17v-15h17v15zm-9-12h-6v4h6v-4z"/></svg>`,
    id: "/news",
  },
  {
    text: "FAQ",
    icon: `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 24h-17c-1.657 0-3-1.343-3-3v-18c0-1.657 1.343-3 3-3h17v24zm-2-4h-14.505c-1.375 0-1.375 2 0 2h14.505v-2zm0-18h-15v16h15v-16zm-3 3v3h-9v-3h9z"/></svg>`,
    id: "/faq",
  },
];
const ResponsiveAppBar = ({ bg }) => {
  const [navOpen, setNavOpen] = useState("");
  const handleOpenNavMenu = () => {
    setNavOpen(true);
  };
  const handleCloseNavMenu = () => {
    setNavOpen(false);
  };
  const { translate } = useLocales();

  const TypographyStyle = styled(Typography)({
    transition: "color ease 500ms",
    fontSize: "18px",
    margin: "0 12px",
    color: "#fff",
    "& svg": {
      width: "24px",
      height: "24px",
      fill: "#fff",
      transition: "all ease 500ms",
      marginRight: "8px",
    },
    "&:hover": {
      color: "#000",
      "& svg": {
        fill: "#000",
      },
    },
  });

  const OverlayBox = styled("div")({
    position: "fixed",
    left: "0",
    top: "0",
    width: "100vw",
    height: "100vh",
    zIndex: "999",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  });

  return (
    <AppBar
      position="fixed"
      sx={{
        height: "100px",
        backgroundColor: `${bg ? "#000" : "transparent"}`,
        // borderBottom: `${bg? "1px solid #fff" : "0"}`,
        transition: "all ease 300ms",
        boxShadow: "none",
      }}
    >
      <OverlayBox
        sx={{ display: `${navOpen ? "block" : "none"}` }}
        onClick={handleCloseNavMenu}
      />
      <nav className={navOpen ? "navbar active" : "navbar"}>
        <Box
          sx={{
            m: "48px auto 22px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Logo type="txt_white" />
        </Box>
        {pages.map((page, index) => (
          <TypographyStyle
            key={index}
            component="a"
            variant="a"
            href={page.id}
            sx={{
              py: 2,
              px: 1,
              color: "white",
              display: "flex",
              alignItems: "center",
              textTransform: "capitalize",
            }}
            onClick={handleCloseNavMenu}
          >
            {/* <TypographyStyle
              variant="a"
              component="a"
              href={page.id}
              sx={{ display: "flex", alignItems: "center" }}
            > */}
            <Box
              dangerouslySetInnerHTML={{ __html: page.icon }}
              display="flex"
            />
            {translate(page.text)}
            {/* </TypographyStyle> */}
          </TypographyStyle>
        ))}
      </nav>
      <Container maxWidth="xl" sx={{ my: "auto", px: 0 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Box>
              <IconButtonAnimate
                onClick={handleOpenNavMenu}
                sx={{ color: "#fff", fontSize: "36px", padding: "4px" }}
              >
                <Iconify icon="eva:menu-2-fill" />
              </IconButtonAnimate>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Logo type="txt_white" />
          </Box>
          <Box sx={{ width: "44px", height: "44px" }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  type: PropTypes.string,
};

export default function Logo({ disabledLink = false, type }) {
  let data = "";
  if (type === "txt_white") data = "/logo/logo_text_white.svg";
  else if (type === "txt_black") data = "/logo/logo_text_black.svg";
  else if (type === "img") data = "/logo/logo_img.svg";
  const logo = (
    <Box>
      <img src={data} width="180px" height="auto" alt="logo" />
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}

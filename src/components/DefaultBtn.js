import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import useLocales from "../hooks/useLocales";
import Iconify from "./Iconify";

const ButtonStyle = styled(Button)({
  minWidth: "120px",
  backgroundColor: "#3570F5",
  borderRadius: "5px",
  padding: "14px 25px",
  color: "#fff",
  transition: "all 1s ease",

  "&:hover": {
    backgroundColor: "#668fee",
  },
});

export default function DefautlBtn({ text, icon, href, sx }) {
  const { translate } = useLocales();
  return (
    <ButtonStyle href={href} color="default" variant="button" sx={{ ...sx }}>
      <Iconify icon={icon} width={20} height={20} mr={1} />
      {translate(text)}
    </ButtonStyle>
  );
}

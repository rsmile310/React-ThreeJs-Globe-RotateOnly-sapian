// @mui
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
// components
import useLocales from "../hooks/useLocales";
import DefaultBtn from "./DefaultBtn";
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const CardStyle = styled(Box)({
  position: "relative",
  height: "300px",
  overflow: "hidden",
  borderRadius: " 0.5rem",
  boxShadow: "0 0 1rem rgb(0 0 0 / 50%)",
  "&:before": {
    content: "''",
    position: "absolute",
    top: "0",
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 80%)",
    zIndex: "0",
  },
  "& .news-card__text-wrapper": {
    position: "absolute",
    left: "0",
    width: "100%",
    bottom: "0",
    padding: "24px",
    color: "white",
    transition: "background-color 1.5s ease",
  },
  "& .news-card__details-wrapper": {
    maxHeight: 0,
    opacity: 0,
    transition: "max-height 1.5s ease, opacity 1s ease",
  },
  "& .news-card__excerpt": {
    fontSize: "16px",
    fontWeight: "lighter",
    lineHeight: "1.15",
  },
  "& .news-card__post-date": {
    fontSize: "14px",
    marginBottom: "8px",
  },
  "& .news-card__image": {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
    webkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
    position: "relative",
    transition: "transform 3s ease",
  },
  "&:hover": {
    "& .news-card__text-wrapper": {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    "& .news-card__details-wrapper": {
      maxHeight: "20rem",
      opacity: 1,
    },
    "& .news-card__image": {
      transform: "scale(1.2)",
      zIndex: "-1",
    },
  },
});
export default function NewsCard(props) {
  const { translate } = useLocales();
  return (
    <CardStyle>
      <Box component="img" src={props.img} className="news-card__image" />
      <div className="news-card__text-wrapper">
        <h2 className="news-card__title">{translate(props.title)}</h2>
        <div className="news-card__post-date">{props.date}</div>
        <div className="news-card__details-wrapper">
          <Box
            sx={{
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            <p className="news-card__excerpt">{translate(props.desc)}</p>
          </Box>

          <Box display="flex" justifyContent="end" mt={2}>
            <DefaultBtn text="Read More" href={props.url} sx={{ py: "4px" }} />
          </Box>
        </div>
      </div>
    </CardStyle>
  );
}

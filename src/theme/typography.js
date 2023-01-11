import { pxToRem, responsiveFontSizes } from "../utils/getFontValue";

// ----------------------------------------------------------------------

const FONT_PRIMARY = "Montserrat"; // Local Font
// const FONT_SECONDARY = 'Aileron'; // Local Font

const typography = {
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 600,
    lineHeight: 1.2,
    fontSize: pxToRem(34),
    letterSpacing: "-0.02em",
    color: "#000",
    ...responsiveFontSizes({ sm: 34, md: 38, lg: 46 }),
  },
  h2: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: pxToRem(24),
    color: "#000",
    ...responsiveFontSizes({ sm: 24, md: 30, lg: 36 }),
  },
  h3: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 600,
    lineHeight: 1.2,
    fontSize: pxToRem(20),
    color: "#000",
    ...responsiveFontSizes({ sm: 20, md: 23, lg: 26 }),
  },
  h4: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    color: "#000",
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 29 }),
  },
  h5: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(22),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 24 }),
  },
  h6: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    color: "#000",
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  p: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    color: "#000",
    fontSize: pxToRem(20),
  },
  a: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
  },
  span: {
    fontFamily: FONT_PRIMARY,
  },
  subtitle1: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    color: "#000",
  },
  body2: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(14),
    color: "#000",
  },
  caption: {
    fontFamily: FONT_PRIMARY,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: "uppercase",
  },
  button: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 400,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
};

export default typography;

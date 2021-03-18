import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    backgroundColor: "black",
    border: "none",
    borderRadius: "10px",
  },

  linkIcons: {
    justifyContent: "flex-end",
  },
  media: {
    height: 100,
    width: "100%",
    paddingTop: "35%",
    objectFit: "contain",
  },
}));

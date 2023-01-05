import React from "react";
import "@fontsource/ubuntu";

const styles = {
  container: {
    position: "fixed",
    top: 0,
    width: "100vw",
    height: 50,
    padding: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
    marginLeft: 600,
  },
  text: {
    color: "#02B589",
    fontFamily: "Ubuntu",
    fontStyle: "Bold",
    fontSize: 20,
    lineHeight: 23,
    lineHeight: "100%",
    align: "Left",
    verticalAlign: "Top",
  },
  input: {
    width: 200,
    height: 50,
    fontFamily: "Ubuntu",
    fontStyle: "Bold",
    fontSize: 20,
    lineHeight: 23,
    lineHeight: "100%",
    align: "Left",
    verticalAlign: "Top",
    borderRadius: 100,
    border: "none",
    backgroundColor: "#02B589",
    color: "white",
  },
};

export const Header = () => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</p>
      <input style={styles.input} value="НЭВТРЭХ" type="button" />
    </div>
  );
};

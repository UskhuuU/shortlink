import React from "react";
const styles = {
  text: {
    fontFamily: "Ubuntu",
    fontStyle: "Bold",
    fontSize: 16,
    lineHeight: 18,
    lineHeight: "100%",
    align: "Left",
    verticalAlign: "Top",
    position: "fixed",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    opacity: "20%",
  },
};

export const Footer = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <p style={styles.text}>©boginoo.io 2020</p>
    </div>
  );
};

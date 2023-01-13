import React from "react";
import "@fontsource/ubuntu";

const styles = {
  container: {
    width: 500,
    height: 500,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  text: {
    fontFamily: "Ubuntu",
    fontStyle: "Bold",
    fontSize: 16,
    lineHeight: 18,
    lineHeight: "100%",
    align: "Left",
    verticalAlign: "Top",
    opacity: "50%",
  },
  link: {
    fontFamily: "Ubuntu",
    fontStyle: "Bold",
    fontSize: 20,
    lineHeight: 23,
    lineHeight: "100%",
    align: "Left",
    verticalAlign: "Top",
    overflow: "hidden",
  },
  button: {
    width: 100,
    height: 20,
    borderRadius: 100,
    border: "none",
    color: "white",
    backgroundColor: "#02B589",
  },
};

export const Comp = ({ URL, shortURL }) => {
  return (
    <div style={styles.container}>
      <div>
        <p style={styles.text}>Өгөгдсөн холбоос:</p>
        <p style={styles.link}>{URL}</p>
      </div>
      <div>
        <p style={styles.text}>Богино холбоос:</p>
        <div
          style={{
            width: "50vw",
            display: "flex",
            alignItems: "center",
            gap: 30,
          }}
        >
          <p style={styles.link}>{shortURL}</p>
          <button
            style={styles.button}
            onClick={() => {
              navigator.clipboard.writeText(shortURL);
            }}
          >
            Хуулж авах
          </button>
        </div>
      </div>
    </div>
  );
};

export default URL;

import React from "react";
import "@fontsource/ubuntu";
import URL from "./Comp";
const styles = {
  container: {
    width: "50vw",
    height: "10vh",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    width: 100,
    height: 20,
    borderRadius: 100,
    border: "none",
    color: "white",
    backgroundColor: "#02B589",
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
    fontSize: 16,
    lineHeight: 23,
    lineHeight: "100%",
    align: "Left",
    verticalAlign: "Top",
    overflow: "hidden",
  },
  line: {
    width: "50vw",
    border: "1px solid #E2E2E2",
  },
};

export const History = ({ link }) => {
  return (
    <div>
      <div style={styles.container}>
        <div style={{ width: "49%" }}>
          <p style={styles.text}>Өгөгдсөн холбоос:</p>
          <p style={styles.link}>{link.URL}</p>
        </div>
        <div style={{ width: "49%" }}>
          <p style={styles.text}>Богино холбоос:</p>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <p style={styles.link}>{link.shortURL}</p>
            <button
              style={styles.button}
              onClick={() => {
                navigator.clipboard.writeText(link.shortURL);
              }}
            >
              Хуулж авах
            </button>
          </div>
        </div>
      </div>
      <div style={styles.line}></div>
    </div>
  );
};

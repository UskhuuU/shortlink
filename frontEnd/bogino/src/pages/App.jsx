import React, { useRef, useState } from "react";
import { Header } from "../components/Header";
import logo from "../assets/logo.svg";
import "@fontsource/ubuntu";
import { Footer } from "../components/Footer";
import { Comp } from "../components/Comp";
import axios from "axios";
import { useParams } from "react-router-dom";
import { History } from "../components/History";
import { useContext } from "react";
import { HistoryContext } from "../components/HistoryComp";
import { HistoryComp } from "../components/HistoryComp";
import { useHistoryContext } from "../components/HistoryComp";

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
  },
  con: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
  input: {
    borderRadius: 100,
    width: 500,
    height: 46,
    border: "none",
    fontFamily: "Ubuntu",
    fontStyle: "Bold",
    fontSize: 20,
    lineHeight: 23,
    lineHeight: "100%",
    align: "Left",
    verticalAlign: "Top",
    paddingLeft: 20,
    boxShadow: "9px 8px 50px 0px #F0F0F0",
  },
  button: {
    borderRadius: 100,
    height: 50,
    width: 200,
    border: "none",
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
  HistoryContainer: {
    width: "100vw",
    height: "500px",
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};

export const App = () => {
  const { data, setData } = useHistoryContext();
  const { id } = useParams();
  const [URL, setURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const url = useRef("");
  console.log(data);
  const change = (e) => {
    if (e.target.value === "") {
      setURL("");
    }
  };
  const link = () => {
    axios
      .post("http://localhost:8000/links", {
        URL: url.current.value,
      })
      .then(function (response) {
        console.log("LOG: ", response);
        setURL(response.data.data.URL);
        setShortURL("http://localhost:3000/" + response.data.data._id);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const Board = () => {
    return (
      <div style={styles.HistoryContainer}>
        {data.map((el) => {
          return <History />;
        })}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.con}>
        <div>
          <img src={logo} alt="" />
        </div>
        <div style={{ display: "flex", gap: 30 }}>
          <input
            style={styles.input}
            type="text"
            placeholder="https://www.web-huudas.mn"
            ref={url}
            onChange={(e) => change(e)}
          />
          <input
            style={styles.button}
            value="БОГИНОСГОХ"
            type="button"
            onClick={link}
          />
        </div>
        {data && <Board />}
        {/* {data &&
          data.map((links) => {
            <History link={link} />;
          })} */}
        {URL && <Comp URL={URL} shortURL={shortURL} />}
        <Footer />
      </div>
    </div>
  );
};

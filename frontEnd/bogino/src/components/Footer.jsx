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
    left: '49%',
    top: '95%',
  },
  footer:{
    position: 'absolute',
width: '225px',
height: '18px',
left: '47%',
top: '93%',
fontFamily: 'Ubuntu',
fontStyle: 'normal',
fontWeight: '400',
fontSize: '16px',
lineHeight: '18px',
color: '#000000',

  }
};

export const Footer = () => {
  return (
    <div style={styles.footer} >
      <p>Made with ♥️ by Nest Academy</p>
    
    <div
      style={{
        width: "100vw",
        display: "flex",

      }}
    >
      <p style={styles.text}>©boginoo.io 2020</p>
    </div>
    </div>
  );
};

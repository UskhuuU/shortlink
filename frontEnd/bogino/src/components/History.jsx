import React from "react";

const styles = {
  container: {
    width: "500px",
    height: "100px",
    backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
  },
};

export const History = ({ link }) => {
  console.log("history");
  return (
    <div style={styles.container}>
      <div>link</div>
    </div>
    // <div>
    //   <div style={styles.container}>
    //     <div>
    //       <p style={styles.text}>Өгөгдсөн холбоос:</p>
    //       <p style={styles.link}>{link.URL}</p>
    //     </div>
    //     <div>
    //       <p style={styles.text}>Богино холбоос:</p>
    //       <div>
    //         <p style={styles.link}>{link.shortURL}</p>
    //         <button
    //           style={styles.button}
    //           onClick={() => {
    //             navigator.clipboard.writeText();
    //           }}
    //         >
    //           Хуулж авах
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

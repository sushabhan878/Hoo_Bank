import React from "react";
import styles from "./styles";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-primary overflow-hidden w-full">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* Hero */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Hero</div>
      </div>
      {/* Other */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Stats, Business, Bulling, testimonial, Click to action, Footer
        </div>
      </div>
    </div>
  );
};

export default App;

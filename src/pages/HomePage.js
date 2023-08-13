//TODOS: ANIMATIONS, move dashboard to secondary sidebar, possibly make admin only, improve file structure, signup page, add bevel to sidebar, footer length, fix color selector changing theme
import React from "react";
import styles from "../styles/app.module.css";
import TrailsCarousel from "../components/TrailsCarousel";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout title="Home" toolbarHeight={100}>
          {/* trail carousel */}
          <div className={styles.carouselContainer}>
            <TrailsCarousel />
          </div>
    </Layout>
  );
};

export default HomePage;

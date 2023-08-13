//TODOS: ANIMATIONS, move dashboard to secondary sidebar, possibly make admin only, improve file structure, signup page, add bevel to sidebar, footer length, fix color selector changing theme
import React from "react";
import { Toolbar } from "@mui/material";
import styles from "../styles/app.module.css";
import TrailsCarousel from "../components/TrailsCarousel";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout title="Home" toolbarHeight={100}>
          {/* Toolbar adds some padding, I dont think it's useful for anything else
          because the actual toolbar is displayed from AppBarComponent*/}
          <Toolbar sx={{ height: 100 }} />

          {/* trail carousel */}
          <div className={styles.carouselContainer}>
            <TrailsCarousel />
          </div>
    </Layout>
  );
};

export default HomePage;

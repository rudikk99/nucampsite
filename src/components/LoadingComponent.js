import React from 'react';

import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { StyleSheet, css } from "aphrodite";
import { Loader2 } from "../loaders/index";

const styles = StyleSheet.create({
    container: {
      marginTop: "3em",
      marginBottom: "6em",
      fontFamily: `"Helvetica Neue", Helvetica, Arial, sans-serif`,
      fontSize: "16px",
      fontWeight: 300,
      color: "white",
      lineHeight: 1.25,
      letterSpacing: "1px"
    },
    masthead: {
      marginBottom: "2em"
    },
    header: {
      fontWeight: 300
    },
    link: {
      color: "white",
      fontWeight: "500",
      textDecoration: "none",
      ":hover": {
        textDecoration: "underline"
      }
    },
    loadContainer: {
      border: "1px solid hsla(0, 0%, 100%, 0.2)",
      height: "240px",
      overflow: "hidden",
      boxSizing: "border-box"
    }
  });
export const Loading = () => {
    return (
    //    <div className="col">
    //        <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
    //        <p>Loading...</p>
    //    </div>
    
        <div className="Col" xs={12} sm={6} md={3} className={css(styles.loadContainer)}>
            <Loader2/>
        </div   >
    
    );
};
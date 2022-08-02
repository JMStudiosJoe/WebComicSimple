import "./comic-body.css";
import ComicNavButton from "../comic-nav-button/comic-nav-button";
import React, { useState } from "react";
import ComicPage from "../comic-page/comic-page";

import {
  cover,
  introPage1,
  introPage2,
  introPage3,
  introPage4,
  introPage5,
  introPage6,
  introPage7,
  introPage8,
} from "./tflr-image-imports/tflr-image-imports";
import { INTRO_PAGE_MAX } from "../constants.js";
function ComicBody() {
  const [pageState, setPageState] = useState({
    pageNumber: 0,
    intro: 0,
    cover: 0,
  });
  const nextPage = () => {
    if (pageState.pageNumber < INTRO_PAGE_MAX) {
      setPageState({
        ...pageState,
        pageNumber: pageState.pageNumber + 1,
      });
    }
  };
  const previousPage = () => {
    if (pageState.pageNumber > 0) {
      setPageState({
        ...pageState,
        pageNumber: pageState.pageNumber - 1,
      });
    }
  };
  const coverPage = <ComicPage page={cover}></ComicPage>;
  const componentPage1 = <ComicPage page={introPage1}></ComicPage>;
  const componentPage2 = <ComicPage page={introPage2}></ComicPage>;
  const componentPage3 = <ComicPage page={introPage3}></ComicPage>;
  const componentPage4 = <ComicPage page={introPage4}></ComicPage>;
  const componentPage5 = <ComicPage page={introPage5}></ComicPage>;
  const componentPage6 = <ComicPage page={introPage6}></ComicPage>;
  const componentPage7 = <ComicPage page={introPage7}></ComicPage>;
  const componentPage8 = <ComicPage page={introPage8}></ComicPage>;

  const allPages = [
    coverPage,
    componentPage1,
    componentPage2,
    componentPage3,
    componentPage4,
    componentPage5,
    componentPage6,
    componentPage7,
    componentPage8,
  ];
  const displayingPage = allPages[pageState.pageNumber];
  return (
    <div className="comic-body">
      <section className="comic-page-container">{displayingPage}</section>
      <section className="comic-page-nav prev-button">
        <ComicNavButton
          handler={previousPage}
          direction="left"
        ></ComicNavButton>
      </section>
      <section className="comic-page-nav next-button">
        <ComicNavButton handler={nextPage} direction="right"></ComicNavButton>
      </section>
    </div>
  );
}

export default ComicBody;

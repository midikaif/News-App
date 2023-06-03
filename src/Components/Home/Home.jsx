import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../Header/Header";
import HomeContent from "../HomeContent/HomeContent";
import Discover from "../Discover/Discover";
import Footer from "../Footer/Footer";
import NavHeader from "../NavHeader/NavHeader";

export default function Home({ apiKey }) {
  const [articles, setArticles] = useState([])


  useEffect(() => {
    (async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apiKey}`;
      const data = await fetch(url);
      const parsedData = await data.json();
      setArticles(parsedData.articles);
    })()
  })

  return (
    <>
      <NavHeader />
      <Header articles={articles} />
      <HomeContent />
      <Discover />
      <Footer />
    </>
  )
}

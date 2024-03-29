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
    fetch('https://api.newscatcherapi.com/v2/latest_headlines?countries=IN',
      {
        headers: {
          'x-api-key': 'Dzbe9a2RhmUfxBWfGd-w5ByiclQvfO9Q44KCsD1Q49g'
        }
      })
      .then((res) => res.json())
      .then((res) => setArticles(res.articles))
  }, [])

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

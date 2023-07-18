"use client";
import { useState } from "react";
import SideBar from "./components/SideBar";
import Videos from "./components/Videos";
import Navbar from "./components/Navbar";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("New");

  return (
    <>
      <section>
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Navbar />
        <Videos selectedCategory={selectedCategory} />
      </section>
    </>
  );
}

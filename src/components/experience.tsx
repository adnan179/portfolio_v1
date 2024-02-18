"use client";
import React from "react";
import SectionHeading from "./sectionHeading";
import { Chrono } from "react-chrono";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  // Transform data to fit the structure expected by react-chrono
  const items = experiencesData.map((item, index) => ({
    title: item.title,
    cardTitle: item.date,
    cardSubtitle: item.description,
    // Assign "left" or "right" based on index for alternating layout
    position: index % 2 === 0 ? "left" : "right",
    backgroundColor: theme === "light" ? "#F3F4F6" : "#272822",
    contentStyle: {
      boxShadow: "none",
      border: "1px solid rgba(0, 0, 0, 0.05)",
      textAlign: "left",
      padding: "1.3rem 2rem",
    },
  }));

  // Determine the mode based on screen width
  const mode = typeof window !== "undefined" && window.innerWidth < 400 ? "HORIZONTAL" : "VERTICAL_ALTERNATING";

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <Chrono
        className="my-timeline"
        items={items}
        mode={mode}
        theme={{
          primary: mode === "HORIZONTAL" ? "transparent" : "gray", 
          secondary:"blue",
          titleColorActive: "white",
          titleColor:"white",
          cardTitleColor:"black",
        }}
      />
    </section>
  );
}

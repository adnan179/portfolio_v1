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
    cardTitleStyle: {
      fontSize: "1rem", // Adjust the font size as needed
      padding: "0.5rem 1rem", // Adjust the padding as needed
    },
  }));

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      {/* Check if window is defined before rendering Chrono */}
      {typeof window !== "undefined" && (
        <Chrono items={items} mode="VERTICAL_ALTERNATING" />
      )}
    </section>
  );
}

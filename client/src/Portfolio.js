import React from "react";
import ProjectPortfolio from "./ProjectPortfolio";

function Portfolio() {
  const projects = [
    {
      projImgName: "AspireAlly-project.png",
      projLink: "https://aspireally.onrender.com/",
      classname: "project-big",
      details:
        "A mentorship matching platform that connects mentors and mentees based on their skills and interests. It helps users find suitable mentorship opportunities and manage their profiles.",
    },
    {
      projImgName: "FlavorBeat-project.png",
      projLink: "https://flavorbeat.onrender.com/",
      classname: "project-big",
      details:
        "A mood-based recommendation platform for music and cuisines tailored to user emotions and time of the day.",
    },
    {
      projImgName: "NN-project.jpg",
      projLink: "/NovelNote",
      classname: "project-big",
      details:
        "An app for tracking reading history and managing book details. It integrates data from the Google Books API to provide users with book information.",
    },
    {
      projImgName: "BIC-project.jpg",
      projLink: "/BICulture",
      classname: "project-big",
      details:
        "A blogging application focused on global cuisines. It allows users to create and manage posts about food cultures.",
    },
    {
      projImgName: "WorldLit-project.jpg",
      projLink: "/WorldLit",
      classname: "project-big",
      details:
        "An interactive travel tracker that allows users to log and explore countries. It provides an engaging way to track travel history on an interactive map.",
    },
    {
      projImgName: "CineLog-project.jpg",
      projLink: "/CineLog",
      classname: "project-big",
      details:
        "A movie library where users can search, rate, and manage films. It offers a personalized experience to movie enthusiasts.",
    },
    {
      projImgName: "QT-project.jpg",
      projLink: "/TodoList",
      classname: "project-big",
      details:
        "A productivity app designed to help users organize tasks and track progress. It enables users to manage their tasks efficiently.",
    },
    {
      projImgName: "PlanPack-project.jpg",
      projLink: "/PlanPack",
      classname: "project-big",
      details:
        "A packing list manager that helps users organize and track items for trips. It ensures accuracy during the packing process.",
    },

    {
      projImgName: "Eat 'n' Split-project.png",
      projLink: "/EatnSplit",
      classname: "project-small",
      details:
        "A tool for splitting bills among friends and tracking balances. It simplifies group payments and keeps track of shared expenses.",
    },

    {
      projImgName: "DiceGame-project.png",
      projLink: "/DiceGame",
      classname: "project-small",
      details:
        "A DiceGame where two dice are rolled randomly, and the player with the higher number wins.",
    },
    {
      projImgName: "SimonGame-project.png",
      projLink: "/SimonGame",
      classname: "project-small",
      details:
        "SimonGame is a memory challenge where players follow and repeat the game's sequence of lit-up boxes in the correct order.",
    },
  ];
  return (
    <div id="portfolio">
      <div className="portfolio">
        <h2>Portfolio</h2>
      </div>
      <div className="view">
        {projects.map((prj) => (
          <ProjectPortfolio
            projImgName={prj.projImgName}
            projLink={prj.projLink}
            projClassName={prj.classname}
            projDetails={prj.details}
          />
        ))}
      </div>
    </div>
  );
}

// Add key={name} after prfObj={prj}, and update projects array by including the name of every project
export default Portfolio;

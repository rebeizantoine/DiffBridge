import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import DashboardCV from "./DashboardCV";
import DashboardAbout from "./DashboardAbout";
import DashboardExperience from "./DashboardExperience";
import DashboardSkills from "./DashboardSkills";
import DashboardProjects from "./DashboardProjects";
import DashboardHome from "../Components/DashboardHome";
import "./dashboard.css";
import DashboardHome2 from "./DashboardHome2";

function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <DashboardSidebar />
      <div className="main" style={{ marginLeft: "220px", padding: "20px" }}>
        <section id="homepage">
          <DashboardHome />
        </section>
        <section id="featuredpaintings">
          <DashboardHome2 />
        </section>
        <section id="artists">
          {/* Add content for Featured Artists here */}
        </section>
        <section id="exhibitions">
          <DashboardExperience />
        </section>
        <section id="contactus">
          {/* Add content for Contact Us here */}
        </section>
        <section id="aboutus">
          <DashboardAbout />
        </section>
        {/* Uncomment the line below to include DashboardProjects */}
        {/* <section id="projects">
          <DashboardProjects />
        </section> */}
      </div>
    </div>
  );
}

export default Dashboard;

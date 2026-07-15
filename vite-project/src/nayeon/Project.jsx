import { useState } from "react";
import YearButtons from "./YearButtons";
import ProjectList from "./ProjectList";
import projects from "./projects";
import "./Project.css";

const years = ["all", 14, 13, 12, 11];

function Project() {
  const [selectedYear, setSelectedYear] = useState("all");

  const visibleProjects =
    selectedYear === "all"
      ? projects
      : projects.filter((project) => project.year === selectedYear);

  return (
    <main className="project-page">
      <div className="project-page__inner">
        <header className="project-page__header">
          <p className="project-page__eyebrow">LIKELION</p>

          <h1 className="project-page__title">PROJECTS</h1>

          <p className="project-page__count">
            총{" "}
            <strong className="project-page__count-number">
              {visibleProjects.length}건
            </strong>
            의 프로젝트가 있습니다.
          </p>
        </header>

        <section className="project-page__content">
          <YearButtons
            years={years}
            selectedYear={selectedYear}
            onSelectYear={setSelectedYear}
          />

          <ProjectList projects={visibleProjects} selectedYear={selectedYear} />
        </section>
      </div>
    </main>
  );
}

export default Project;

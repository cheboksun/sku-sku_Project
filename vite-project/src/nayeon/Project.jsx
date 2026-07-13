import { useState } from "react";
import YearButtons from "./YearButtons";
import ProjectList from "./ProjectList";
import projects from "./projects";
import "./Project.css";

const years = [14, 13, 12, 11];

function Project() {
  const [selectedYear, setSelectedYear] = useState(14);

  const selectedProjects = projects[selectedYear] ?? [];

  return (
    <main className="project-page">
      <div className="project-page__inner">
        <header className="project-page__header">
          <p className="project-page__eyebrow">SKU PROJECT</p>
          <h1 className="project-page__title">프로젝트</h1>
          <p className="project-page__description">
            서경대학교 멋쟁이사자처럼의 프로젝트를 소개합니다.
          </p>
        </header>

        <section className="project-page__content">
          <YearButtons
            years={years}
            selectedYear={selectedYear}
            onSelectYear={setSelectedYear}
          />

          <div className="project-page__year-title">
            <strong>{selectedYear}기</strong>
            <span>프로젝트</span>
          </div>

          <ProjectList projects={selectedProjects} />
        </section>
      </div>
    </main>
  );
}

export default Project;

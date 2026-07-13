import { useState } from "react";
import YearButtons from "./YearButtons";
import ProjectList from "./ProjectList";
import projects from "./projects";
import "./Project.css";

// 최신 기수부터 오래된 기수 순서
const projectYears = [14, 13, 12, 11];

// 버튼 표시 순서
const filterButtons = ["all", ...projectYears];

function Project() {
  const [selectedYear, setSelectedYear] = useState("all");

  // 전체 선택 시 14기 → 13기 → 12기 → 11기 순서로 합치기
  const allProjects = projectYears.flatMap((year) => projects[year] ?? []);

  const visibleProjects =
    selectedYear === "all" ? allProjects : (projects[selectedYear] ?? []);

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
            years={filterButtons}
            selectedYear={selectedYear}
            onSelectYear={setSelectedYear}
          />

          {selectedYear !== "all" && (
            <div className="project-page__year-title">
              <strong>{selectedYear}기</strong>
              <span>프로젝트</span>
            </div>
          )}

          <ProjectList projects={visibleProjects} />
        </section>
      </div>
    </main>
  );
}

export default Project;

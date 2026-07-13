import ProjectCard from "./ProjectCard";

function ProjectList({ projects, selectedYear }) {
  if (projects.length === 0) {
    return (
      <div className="project-list__empty">
        {selectedYear === 14 ? (
          <>
            <strong className="project-list__empty-title">
              아직 등록된 프로젝트가 없습니다.
            </strong>

            <span className="project-list__empty-text">
              14기 운영진, 아기사자들의 멋진 아이디어가 곧 현실이 될 예정입니다.
              기대해 주세요!
            </span>
          </>
        ) : (
          <strong className="project-list__empty-title">
            등록된 프로젝트가 없습니다.
          </strong>
        )}
      </div>
    );
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;

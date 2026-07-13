function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div
        className="project-card__visual"
        style={{ background: project.background }}
      >
        {project.image ? (
          <img
            className="project-card__image"
            src={project.image}
            alt={`${project.title} 프로젝트 이미지`}
          />
        ) : (
          <span className="project-card__placeholder">{project.team}</span>
        )}
      </div>

      <div className="project-card__info">
        <p className="project-card__team">{project.team}</p>
        <h2 className="project-card__title">{project.title}</h2>
      </div>

      <div className="project-card__overlay">
        <button className="project-card__link" type="button">
          사이트 보러가기
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;

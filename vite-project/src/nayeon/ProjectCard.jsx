function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div
        className="project-card__visual"
        style={
          project.image
            ? undefined
            : {
                background: project.background ?? "#181818",
              }
        }
      >
        {project.image ? (
          <img
            className="project-card__image"
            src={project.image}
            alt={`${project.title} 프로젝트 썸네일`}
          />
        ) : (
          <span className="project-card__placeholder">{project.title}</span>
        )}

        <div className="project-card__overlay">
          {project.url ? (
            <a
              className="project-card__link"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} 사이트 보러가기`}
            >
              사이트 보러가기
            </a>
          ) : (
            <button
              className="project-card__link"
              type="button"
              aria-label={`${project.title} 사이트 보러가기`}
            >
              사이트 보러가기
            </button>
          )}
        </div>
      </div>

      <div className="project-card__info">
        <h2 className="project-card__title">{project.title}</h2>

        <p className="project-card__description">{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;

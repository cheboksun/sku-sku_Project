function YearButtons({ years, selectedYear, onSelectYear }) {
  return (
    <nav className="year-buttons" aria-label="프로젝트 기수 선택">
      {years.map((year) => {
        const isActive = selectedYear === year;
        const label = year === "all" ? "전체" : `${year}기`;

        return (
          <button
            key={year}
            type="button"
            className={`year-button ${isActive ? "year-button--active" : ""}`}
            onClick={() => onSelectYear(year)}
            aria-pressed={isActive}
          >
            {label}
          </button>
        );
      })}
    </nav>
  );
}

export default YearButtons;

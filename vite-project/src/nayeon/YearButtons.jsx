function YearButtons({ years, selectedYear, onSelectYear }) {
  return (
    <div className="year-buttons" aria-label="프로젝트 기수 선택">
      {years.map((year) => (
        <button
          key={year}
          type="button"
          className={`year-button ${
            selectedYear === year ? "year-button--active" : ""
          }`}
          onClick={() => onSelectYear(year)}
          aria-pressed={selectedYear === year}
        >
          {year}기
        </button>
      ))}
    </div>
  );
}

export default YearButtons;

import StatCard from "./StatCard";

const stats = [
  { value: "7", suffix: "+", label: "Years building" },
  { value: "97", label: "Avg a11y score" },
  { value: "2.4", suffix: "s", label: "LCP achieved" },
  { value: "5", suffix: "+", label: "Products shipped" },
];

export default function Stats() {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <ul
        aria-label="Career statistics"
        className="stats-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          listStyle: "none",
        }}
      >
        {stats.map((stat) => (
          <li key={stat.label}>
            <StatCard {...stat} />
          </li>
        ))}
      </ul>
      <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}

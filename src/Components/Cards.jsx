export default function Cards() {
  const data = [
    { title: "BALANCE", value: "₹52,000" },
    { title: "INCOME", value: "₹30,000" },
    { title: "EXPENSE", value: "₹12,000" },
  ];

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {data.map((item, i) => (
        <div
          key={i}
          style={{
            padding: "20px",
            background: "#222",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <p>{item.title}</p>
          <h2>{item.value}</h2>
        </div>
      ))}
    </div>
  );
}
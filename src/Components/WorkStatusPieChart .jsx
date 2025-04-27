// components/WorkStatusPieChart.jsx
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const WorkStatusPieChart = ({ done = 70, remaining = 30 }) => {
  const data = [
    { name: "Cleaned", value: done },
    { name: "Un-Cleaned", value: remaining },
  ];

  const COLORS = ["#198754", "#dc3545"]; // Bootstrap green and red

  return (
    <div className="container my-4">
      <div className="card shadow-sm border-0">
        <div className="card-body text-center">
          <h5 className="card-title text-primary fw-bold">Todays Progress</h5>
          <div style={{ width: "100%", height: 260 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={3}
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "0.75rem",
                    boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.15)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkStatusPieChart;

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 800 },
  { name: "Mar", value: 300 },
];

export default function Charts() {
  return (
    <><div className="bg-red-500 text-white p-4">
      Tailwind Working
    </div><div className="bg-[#020617] p-6 rounded-xl">
        <h3 className="mb-4 text-gray-400">Revenue</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8b5cf6" />
          </LineChart>
        </ResponsiveContainer>
      </div></>
  );
}
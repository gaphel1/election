import React from "react";
// import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip, Cell } from 'recharts'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];
const data1 = [
  { name: "No Data Found", value: 1 },
  { name: "No Data Found", value: 1 },
  { name: "No Data Found", value: 1 }
];
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  console.log(RADIAN);
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  console.log("midAngle", midAngle);
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      {payload.name !== "No Data Found" && (
        <React.Fragment>
          <path
            d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
            stroke={fill}
            fill="none"
          />
          <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
          <text
            x={ex + (cos >= 0 ? 1 : -1) * 12}
            y={ey}
            textAnchor={textAnchor}
            fill="#333"
          >{`PV ${value}`}</text>
          <text
            x={ex + (cos >= 0 ? 1 : -1) * 12}
            y={ey}
            dy={18}
            textAnchor={textAnchor}
            fill="#999"
          >
            {`(Rate ${(percent * 100).toFixed(2)}%)`}
          </text>
        </React.Fragment>
      )}
    </g>
  );
};
const initialState = {
  activeIndex: 0
};
class SimpleLineChart extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    });
  };
  render() {
    return (<ResponsiveContainer>
      <PieChart width={600} height={300}>
        <Pie
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={170}
          cy={190}
          innerRadius={50}
          outerRadius={70}
          onMouseEnter={this.onPieEnter}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default SimpleLineChart;

import React, { useState } from "react"
import styles from './About.module.css'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts"

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc"
          }}
      >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
      </div>
    )
  }
  return null
}

const About = () => {
  const [ color ] = useState(["#8884d8", "#82ca9d", "#FF8042"])
  const [ pieData ] = useState([{
    name: "HTML",
    value: 40
  },
  {
    name: "CSS",
    value: 37
  },
  {
    name: "Javascript & Framework",
    value: 23
  }])

  return (
    <div className={styles.container}>
      <p>Hi! My name is Davin Octavian, and I'm Computer Engineering graduate from Binus University. I like to code and 
        I have experienced more than 6 years in coding, my first experienced in coding as .NET Developer is 1 year 2 months, second as Technical Consultant Associate is 3 months, 
        third as Web Developer is 2 years 8 months and the last as Frontend Engineer is 2 years 5 months</p>
      <div className={styles.chart_container}>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              color="#000000"
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
            >
              {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={color[index % color.length]}
                  />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default About
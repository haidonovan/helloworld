"use client"

import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"

const chartData = [
  { month: "January", desktop: 186, mobile: 80, tablet: 60, smartTV: 20 },
  { month: "February", desktop: 305, mobile: 200, tablet: 75, smartTV: 35 },
  { month: "March", desktop: 237, mobile: 120, tablet: 90, smartTV: 50 },
  { month: "April", desktop: 73, mobile: 190, tablet: 85, smartTV: 42 },
  { month: "May", desktop: 209, mobile: 130, tablet: 95, smartTV: 65 },
  { month: "June", desktop: 214, mobile: 140, tablet: 88, smartTV: 70 },
  { month: "July", desktop: 180, mobile: 160, tablet: 100, smartTV: 90 },
  { month: "August", desktop: 230, mobile: 170, tablet: 110, smartTV: 95 },
  { month: "September", desktop: 210, mobile: 190, tablet: 105, smartTV: 75 },
  { month: "October", desktop: 240, mobile: 200, tablet: 115, smartTV: 85 },
  { month: "November", desktop: 250, mobile: 180, tablet: 120, smartTV: 80 },
  { month: "December", desktop: 300, mobile: 220, tablet: 130, smartTV: 100 },
]

export default function Component() {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} stackOffset="sign">
          <XAxis dataKey="month" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Legend />
          <Bar dataKey="desktop" stackId="a" fill="#2563eb" radius={[4, 4, 0, 0]} />
          <Bar dataKey="mobile" stackId="a" fill="#60a5fa" radius={[4, 4, 0, 0]} />
          <Bar dataKey="tablet" stackId="a" fill="#38bdf8" radius={[4, 4, 0, 0]} />
          <Bar dataKey="smartTV" stackId="a" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} stackOffset="sign">
          <XAxis dataKey="month" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Legend />
          <Bar dataKey="desktop" stackId="a" fill="#2563eb" radius={[4, 4, 0, 0]} />
          <Bar dataKey="mobile" stackId="a" fill="#60a5fa" radius={[4, 4, 0, 0]} />
          <Bar dataKey="tablet" stackId="a" fill="#38bdf8" radius={[4, 4, 0, 0]} />
          <Bar dataKey="smartTV" stackId="a" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} stackOffset="sign">
          <XAxis dataKey="month" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Legend />
          <Bar dataKey="desktop" stackId="a" fill="#2563eb" radius={[4, 4, 0, 0]} />
          <Bar dataKey="mobile" stackId="a" fill="#60a5fa" radius={[4, 4, 0, 0]} />
          <Bar dataKey="tablet" stackId="a" fill="#38bdf8" radius={[4, 4, 0, 0]} />
          <Bar dataKey="smartTV" stackId="a" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} stackOffset="sign">
          <XAxis dataKey="month" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Legend />
          <Bar dataKey="desktop" stackId="a" fill="#2563eb" radius={[4, 4, 0, 0]} />
          <Bar dataKey="mobile" stackId="a" fill="#60a5fa" radius={[4, 4, 0, 0]} />
          <Bar dataKey="tablet" stackId="a" fill="#38bdf8" radius={[4, 4, 0, 0]} />
          <Bar dataKey="smartTV" stackId="a" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} stackOffset="sign">
          <XAxis dataKey="month" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Legend />
          <Bar dataKey="desktop" stackId="a" fill="#2563eb" radius={[4, 4, 0, 0]} />
          <Bar dataKey="mobile" stackId="a" fill="#60a5fa" radius={[4, 4, 0, 0]} />
          <Bar dataKey="tablet" stackId="a" fill="#38bdf8" radius={[4, 4, 0, 0]} />
          <Bar dataKey="smartTV" stackId="a" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

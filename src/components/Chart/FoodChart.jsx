import React from 'react';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Line,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const standards = {
  나트륨: 2000,
  탄수화물: 324,
  당류: 100,
  지방: 54,
  트랜스지방: 2.5,
  포화지방: 15,
  단백질: 55,
};

const convertData = (originalData) => {
  return originalData.map((item) => ({
    nutrient: item.nutrient,
    value: ((item.value / standards[item.nutrient]) * 100).toFixed(2),
    percentage: 100,
  }));
};

const FoodChart = ({ data }) => {
  const convertedData = convertData(data);

  return (
    <ResponsiveContainer>
      <ComposedChart
        layout="vertical"
        data={convertedData}
        margin={{
          top: 15,
          right: 25,
          bottom: 15,
          left: 25,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" tick={{ fontSize: 15 }} />
        <YAxis
          dataKey="nutrient"
          type="category"
          scale="band"
          tick={{ fontSize: 17, fontWeight: 700 }}
        />
        <Tooltip
          content={({ payload }) => (
            <div>
              <p>{payload[0]?.payload.nutrient}</p>
              <p>{payload[0]?.value}%</p>
            </div>
          )}
        />
        <Bar dataKey="value" barSize={40}>
          {convertedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
        <Line dataKey="percentage" stroke="#fff" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default FoodChart;

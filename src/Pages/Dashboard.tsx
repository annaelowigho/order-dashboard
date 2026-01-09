import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
// import Salad from "/images/salad.png";
// import Noodles from "/images/noodles.png";
// import Smoothie from "/images/smoothie.png";
// import Wings from "/images/wings.png";  


// Mock API Functions
const API = {
  getRevenueData: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          total: 7852000,
          change: 2.1,
          period: "1-12 Dec, 2020",
          data: [
            { day: '01', last6days: 450000, lastWeek: 420000 },
            { day: '02', last6days: 520000, lastWeek: 480000 },
            { day: '03', last6days: 580000, lastWeek: 540000 },
            { day: '04', last6days: 490000, lastWeek: 510000 }, // highlighted
            { day: '05', last6days: 750000, lastWeek: 600000 },
            { day: '06', last6days: 680000, lastWeek: 620000 },
            { day: '07', last6days: 720000, lastWeek: 650000 },
            { day: '08', last6days: 550000, lastWeek: 580000 },
            { day: '09', last6days: 620000, lastWeek: 600000 },
            { day: '10', last6days: 590000, lastWeek: 610000 },
            { day: '11', last6days: 850000, lastWeek: 700000 },
            { day: '12', last6days: 780000, lastWeek: 680000 },
          ],
        });
      }, 500);
    });
  },

  getOrderTimeData: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          total: 1890,
          period: "1-6 Dec, 2020",
          breakdown: [
            { name: "Morning", time: "8am - 12pm", value: 1200, color: "#C7CEFF" },
            { name: "Afternoon", time: "1pm - 4pm", value: 1890, color: "#5A6ACF" },
            { name: "Evening", time: "5pm - 8pm", value: 910, color: "#8593ED" },
          ],
        });
      }, 500);
    });
  },

  getRatingsData: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { label: "Hygiene", value: 85, color: "#6463D6", size: 80, position: "top-0 left-16" },
          { label: "Packaging", value: 92, color: "#2FBFDE", position: "top-24 left-0" },
          { label: "Food Taste", value: 74, color: "#F99C30", position: "top-12 left-28" },
        ]);
      }, 500);
    });
  },

  getMostOrderedFoods: async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Fresh Salad Bowl", price: 45.000, image: "/images/salad-bowl.png" },
        { name: "Chicken Noodles", price: 75.000, image: "/images/noodles.png" },
        { name: "Smoothie Fruits", price: 45.000, image: "/images/smoothie.png" },
        { name: "Hot Chicken Wings", price: 45.000, image: "/images/wings.png" },
      ]);
    }, 500);
  });
},

  getOrderTrendData: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          total: 2568,
          change: 2.1,
          period: "1-6 Dec, 2020",
          data: [
            { day: "01", last6days: 280, lastWeek: 350 },
            { day: "02", last6days: 220, lastWeek: 200 },
            { day: "03", last6days: 400, lastWeek: 240 },
            { day: "04", last6days: 250, lastWeek: 260 },
            { day: "05", last6days: 320, lastWeek: 490 },
            { day: "06", last6days: 380, lastWeek: 340 },
          ],
        });
      }, 500);
    });
  },
};

const Dashboard = () => {
  const [revenueData, setRevenueData] = useState(null);
  const [orderTimeData, setOrderTimeData] = useState(null);
  const [ratingsData, setRatingsData] = useState(null);
  const [mostOrderedFoods, setMostOrderedFoods] = useState(null);
  const [orderTrendData, setOrderTrendData] = useState(null);
  const [loading, setLoading] = useState(true);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
        <div className="bg-purple-900 text-white p-3 rounded shadow-lg min-w-[120px]">
            <div className="font-bold">{data.name}</div>
            <div className="text-gray-300 text-xs">{data.time}</div>
            <div className="text-lg font-semibold">{data.value.toLocaleString()} orders</div>
        </div>
        );
    }
    return null;
    };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [revenue, orderTime, ratings, foods, orderTrend] =
          await Promise.all([
            API.getRevenueData(),
            API.getOrderTimeData(),
            API.getRatingsData(),
            API.getMostOrderedFoods(),
            API.getOrderTrendData(),
          ]);

        setRevenueData(revenue);
        setOrderTimeData(orderTime);
        setRatingsData(ratings);
        setMostOrderedFoods(foods);
        setOrderTrendData(orderTrend);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-10">
        <h1 className="text-[16px] lg:text-[18px] text-[#1F384C] font-medium">
            Dashboard
        </h1>
        <div className="pt-6 grid grid-cols-1 lg:grid-cols-3 border-b border-gray-200">
            {/* Revenue Card */}
            <div className="lg:col-span-2 bg-white p-4 border-r border-gray-200">
                <div className="flex justify-between items-start mb-4">
                    <div>
                    <h3 className="text-gray-600 text-sm mb-2">Revenue</h3>
                    <div className="text-[16px] lg:text-[20px] font-medium">
                        IDR {revenueData?.total.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-[#32D16D] mt-2">
                        <IoIosArrowRoundUp className="text-[14px]" />
                        {revenueData?.change}% vs last week
                    </div>
                    <div className="text-[12px] text-gray-500 mt-2">
                        Sales from {revenueData?.period}
                    </div>
                    </div>
                    <div className="bg-[#DDE4F0] px-2.5 py-1 rounded-md inline-block text-[10px] text-[#5A6ACF] cursor-pointer">
                        View Report
                    </div> 
                </div>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={revenueData?.data} barGap={6}>
                        <CartesianGrid strokeDasharray="3 6" vertical={false} />
                        <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                        <YAxis hide />
                        <Tooltip cursor={{ fill: 'transparent' }} />

                        {/* Last Week (gray) */}
                        <Bar
                        dataKey="lastWeek"
                        fill="#5A6ACF"
                        barSize={10} />

                        {/* Last 6 days purple */}
                        <Bar
                        dataKey="last6days"
                        fill="#E6E8EC"
                        barSize={10} />
                    </BarChart>
                </ResponsiveContainer>

                <div className="flex gap-4 mt-4 text-xs">
                    <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#5A6ACF] rounded-full"></div>
                    <span>Last 6 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#E6E8EC] rounded-full"></div>
                    <span>Last Week</span>
                    </div>
                </div>
            </div>

            {/* Order Time */}
            <div className="bg-white rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-gray-600 text-sm mb-2">Order Time</h3>
                        <div className="text-xs text-gray-500">
                            From {orderTimeData?.period}
                        </div>
                    </div>
                    <div className="bg-[#FBFCFE] px-2.5 py-1 rounded-md inline-block text-[10px] text-[#5A6ACF] cursor-pointer">
                        View Report
                    </div>
                </div>
                <div className="flex justify-center mb-4">
                    <div className="relative">
                        <PieChart width={200} height={200}>
                            <Pie
                                data={orderTimeData?.breakdown}
                                cx={100}
                                cy={100}
                                innerRadius={60}
                                outerRadius={80}
                                dataKey="value"
                            >
                                {orderTimeData?.breakdown.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="text-2xl font-bold">{orderTimeData?.total}</div>
                            <div className="text-xs text-gray-500">orders</div>
                        </div>
                    </div>
                </div>
                <div className="pt-10 flex items-center justify-between">
                    {orderTimeData?.breakdown.map((item, index) => (
                        <div key={index} className="flex justify-between gap-2">
                            <div className="w-3 h-3 rounded-full mt-1"
                            style={{ backgroundColor: item.color }}></div>
                            <div className="">
                                <p className="text-[12px]">{item.name}</p>
                                <p className="font-medium text-[14px]">{item.value}%</p>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Your Rating */}
            <div className="bg-white p-4 border-r border-gray-200">
                <h3 className="font-medium mb-2 text-[14px] ">Your Rating</h3>
                <p className="text-[12px] text-gray-500 mb-6">
                    Lorem ipsum dolor sit amet, consectetur
                </p>
                <div className="flex justify-center gap-6">
                    {ratingsData?.map((rating, index) => (
                        <div key={index} className="text-center">
                            <div className="relative w-20 h-20 mx-auto mb-2">
                            <svg className="transform -rotate-90" width="80" height="80">
                                <circle
                                cx="40"
                                cy="40"
                                r="36"
                                stroke="#ffffff"
                                strokeWidth="8"
                                fill={rating.color}
                                />
                                <circle
                                cx="40"
                                cy="40"
                                r="36"
                                stroke={rating.color}
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray={`${rating.value * 2.26} 226`}
                                strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-lg font-bold">{rating.value}%</span>
                            </div>
                            </div>
                            <div className="text-xs text-gray-600">{rating.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Most Ordered Food */}
            <div className="bg-white p-4 border-r border-gray-200">
                <h3 className="font-semibold mb-2">Most Ordered Food</h3>
                <p className="text-xs text-gray-500 mb-4">
                    Adipiscing elit, sed do eiusmod tempor
                </p>
                <div className="space-y-3">
                    {mostOrderedFoods?.map((food, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <img 
                            src={food.image} 
                            alt={food.name}
                            className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-sm">{food.name}</span>
                        </div>
                        <span className="text-sm font-semibold">
                            IDR {food.price.toLocaleString()}
                        </span>
                    </div>
                    ))}
                </div>
            </div>

            {/* Order Trend */}
            <div className="bg-white p-4">
                <div className="flex justify-between items-start mb-4">
                    <div>
                    <h3 className="font-semibold mb-1">Order</h3>
                    <div className="text-2xl font-bold">{orderTrendData?.total}</div>
                    <div className="flex items-center gap-1 text-[10px] text-[#F2383A] mt-2">
                        <IoIosArrowRoundDown className="text-[14px]" />
                        {orderTrendData?.change}% vs last week
                    </div>
                    <div className="text-[12px] text-gray-500 mt-2">
                        Sales from {orderTrendData?.period}
                    </div>
                    </div>
                    <div className="bg-[#FBFCFE] px-2.5 py-1 rounded-md inline-block text-[10px] text-[#5A6ACF] cursor-pointer">
                        View Report
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={orderTrendData?.data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis 
                        dataKey="day" 
                        axisLine={false} 
                        tickLine={false}
                        tick={{ fill: '#d1d5db', fontSize: 12 }}
                        padding={{ left: 10, right: 10 }}
                        />
                        <YAxis hide />
                        <Tooltip />
                        <Line
                        type="monotone"
                        dataKey="lastWeek"
                        stroke="#E6E8EC"
                        strokeWidth={2}
                        dot={false}
                        />
                        <Line
                        type="monotone"
                        dataKey="last6days"
                        stroke="#5A6ACF"
                        strokeWidth={2.5}
                        dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
                <div className="flex gap-4 mt-4 text-xs">
                    <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#5A6ACF] rounded-full"></div>
                    <span>Last 6 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#E6E8EC] rounded-full"></div>
                    <span>Last Week</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;

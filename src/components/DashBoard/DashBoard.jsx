/* eslint-disable react-hooks/purity */
import {
  Activity,
  Bell,
  DollarSign,
  Package,
  User,
  TrendingUp,
  Users,
  ShoppingCart,
} from "lucide-react";
import React, { useContext } from "react";
import { removeCookie } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../routes/path";
import { AuthContext } from "../../context/AuthContext";

const DashBoard = () => {
  const { setAccessToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    removeCookie("email");
    removeCookie("fullname");
    removeCookie("refreshToken");
    removeCookie("role");
    setAccessToken(null);

    navigate(PATH.LOGIN);
  };
  return (
    <>
      <div className="flex-1 bg-gray-50 dark:bg-gray-950 p-6 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Welcome back to your dashboard
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </button>

            <button
              onClick={handleLogOut}
              className="p-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer"
            >
              <p>Log out</p>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
            <h3 className="font-medium text-gray-600 dark:text-gray-400 mb-1">
              Total Sales
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              $2,456,700
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">
              +12% from last month
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
            <h3 className="font-medium text-gray-600 dark:text-gray-400 mb-1">
              Active Users
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              124
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">
              +5% from last week
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <ShoppingCart className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
            <h3 className="font-medium text-gray-600 dark:text-gray-400 mb-1">
              Properties Sold
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              56
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">
              +8% from yesterday
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <Package className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
            <h3 className="font-medium text-gray-600 dark:text-gray-400 mb-1">
              Available Properties
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              89
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">
              +3 new this week
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Recent Property Activity
                </h3>
                <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                  View all
                </button>
              </div>
              <div className="space-y-4">
                {[
                  {
                    icon: DollarSign,
                    title: "Property sold",
                    desc: "12 Smith St, Sydney sold",
                    time: "2 min ago",
                    color: "green",
                  },
                  {
                    icon: User,
                    title: "New listing added",
                    desc: "45 George St listed",
                    time: "5 min ago",
                    color: "blue",
                  },
                  {
                    icon: Package,
                    title: "Price updated",
                    desc: "Apartment in CBD reduced",
                    time: "10 min ago",
                    color: "purple",
                  },
                  {
                    icon: Activity,
                    title: "Inspection scheduled",
                    desc: "Open house booked",
                    time: "1 hour ago",
                    color: "orange",
                  },
                  {
                    icon: Bell,
                    title: "New enquiry received",
                    desc: "Buyer requested info",
                    time: "2 hours ago",
                    color: "red",
                  },
                ].map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        activity.color === "green"
                          ? "bg-green-50 dark:bg-green-900/20"
                          : activity.color === "blue"
                            ? "bg-blue-50 dark:bg-blue-900/20"
                            : activity.color === "purple"
                              ? "bg-purple-50 dark:bg-purple-900/20"
                              : activity.color === "orange"
                                ? "bg-orange-50 dark:bg-orange-900/20"
                                : "bg-red-50 dark:bg-red-900/20"
                      }`}
                    >
                      <activity.icon
                        className={`h-4 w-4 ${
                          activity.color === "green"
                            ? "text-green-600 dark:text-green-400"
                            : activity.color === "blue"
                              ? "text-blue-600 dark:text-blue-400"
                              : activity.color === "purple"
                                ? "text-purple-600 dark:text-purple-400"
                                : activity.color === "orange"
                                  ? "text-orange-600 dark:text-orange-400"
                                  : "text-red-600 dark:text-red-400"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                        {activity.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {activity.desc}
                      </p>
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">
                      {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Market Insights
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Lead to Sale Rate
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    3.2%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "32%" }}
                  ></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Drop-off Rate
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    45%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Property Views
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    8.7k
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "87%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Top Properties
              </h3>
              <div className="space-y-3">
                {[
                  "Luxury Apartment",
                  "Beach House – Bondi",
                  "Family Home – Parramatta",
                  "Studio Apartment – Newtown",
                ].map((product, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2"
                  >
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {product}
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      ${Math.floor(Math.random() * 1001 + 500)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;

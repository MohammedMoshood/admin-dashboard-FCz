import { FaChartPie } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BiBarChartSquare } from "react-icons/bi";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

export const SideBarData  =  [ 
{
  title: "Overview",
  path: "/overview",
  icon: <FaChartPie />,
} ,
{
  title: "Transactions",
  path: "/transactions",
  icon: <FaMoneyBill />,
},

 {
  title: "Loans",
  path: "/loans",
  icon: <FaLightbulb />,
},

 {
  title: "Savings",
  path: "/savings",
  icon: <FaCreditCard />,
},

 {
  title: "Investments",
  path: "/investments",
  icon: <AiOutlineLineChart />,
},

 {
  title: "Accounts",
  path: "/accounts",
  icon: <FaUsers />,
},

{
  title: "Campaigns",
  path: "/campaigns",
  icon: <BiEnvelope />,
},

 {
  title: "Utility",
  path: "/utility",
  icon: <BiBarChartSquare />,
},

{
  title: "Billings",
  path: "/billings",
  icon: <RiBarChartHorizontalFill />,
},

 {
  title: "Wallet",
  path: "/wallet",
  icon: <FaWallet />,
},

{
  title: "Settings",
  path: "/settings",
  icon: <IoSettingsSharp />,
},
]

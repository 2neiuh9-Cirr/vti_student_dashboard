import { FaBookReader } from "react-icons/fa";
import { IoIosSettings, IoMdHome } from "react-icons/io";
import { TiGroup } from "react-icons/ti";

const SideBar = () => {
  return (
    <div className="w-64 flex flex-col bg-gray-800 text-white h-screen p-4">

        <div className="flex items-center mb-4">
            <IoMdHome className="mr-2" />
            Trang chủ
        </div>

        <div className="flex items-center mb-4">
            <TiGroup className="mr-2" />
            Quản lý sinh viên
        </div>
        <div className="flex items-center mb-4">
            <FaBookReader className="mr-2" />
            Quản lý khóa học
        </div>
        <div className="flex items-center mb-4">
            <IoIosSettings className="mr-2" />
            Thiết lập
        </div>

    </div>
  )
}

export default SideBar
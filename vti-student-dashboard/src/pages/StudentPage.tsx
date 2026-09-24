import SideBar from "../components/SideBar";

const StudentPage = () => {
  const students = [
    {
      id: 1,
      name: "Nguyễn Văn An",
      email: "an.nguyen@example.com",
      age: 20,
      major: "IT",
      date: "12/06/2025 10:15",
    },
    {
      id: 2,
      name: "Trần Thị Bình",
      email: "binh.tran@example.com",
      age: 21,
      major: "AI",
      date: "12/06/2025 10:20",
    },
    {
      id: 3,
      name: "Lê Văn Cường",
      email: "cuong.le@example.com",
      age: 19,
      major: "Software Engineering",
      date: "11/06/2025 16:45",
    },
    {
      id: 4,
      name: "Phạm Thị Dung",
      email: "dung.pham@example.com",
      age: 22,
      major: "Data Science",
      date: "11/06/2025 14:32",
    },
    {
      id: 5,
      name: "Hoàng Văn Em",
      email: "em.hoang@example.com",
      age: 20,
      major: "IT",
      date: "10/06/2025 09:12",
    },
    {
      id: 6,
      name: "Vũ Thị Hương",
      email: "huong.vu@example.com",
      age: 21,
      major: "AI",
      date: "09/06/2025 18:20",
    },
    {
      id: 7,
      name: "Đặng Văn Khánh",
      email: "khanh.dang@example.com",
      age: 22,
      major: "Web Development",
      date: "08/06/2025 15:40",
    },
    {
      id: 8,
      name: "Ngô Thị Lan",
      email: "lan.ngo@example.com",
      age: 20,
      major: "Design",
      date: "07/06/2025 11:05",
    },
  ];

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <SideBar />

      {/* Nội dung bên phải */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Khối thêm sinh viên */}
        <div className="mb-6 rounded-xl bg-white p-4 shadow-sm">

          {/* Tiêu đề */}
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              +
            </span>

            <h2 className="text-base font-bold text-gray-800">
              Thêm sinh viên mới
            </h2>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

            {/* Họ tên */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Họ tên <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="Nhập họ tên"
                className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                placeholder="Nhập email"
                className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
              />
            </div>

            {/* Tuổi */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Tuổi <span className="text-red-500">*</span>
              </label>

              <input
                type="number"
                placeholder="Nhập tuổi"
                className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
              />
            </div>

            {/* Chuyên ngành */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Chuyên ngành <span className="text-red-500">*</span>
              </label>

              <select
                className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                defaultValue=""
              >
                <option value="" disabled>
                  Chọn chuyên ngành
                </option>

                <option value="IT">IT</option>
                <option value="AI">AI</option>
                <option value="Software Engineering">
                  Software Engineering
                </option>
                <option value="Data Science">Data Science</option>
                <option value="Web Development">
                  Web Development
                </option>
                <option value="Design">Design</option>
              </select>
            </div>

          </div>

          {/* Nút */}
          <div className="mt-4 flex gap-2">

            <button
              type="button"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              ▣ &nbsp; Lưu sinh viên
            </button>

            <button
              type="button"
              className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              ↻ &nbsp; Đặt lại
            </button>

          </div>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">

          {/* Header */}
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-800">
              Danh sách sinh viên (8)
            </h2>

            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </span>

                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="h-9 w-48 rounded-lg border border-gray-300 pl-9 pr-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              {/* Filter */}
              <button className="h-9 w-10 rounded-lg border border-gray-300 bg-white text-gray-600">
                ⚱
              </button>

              {/* Add student */}
              <button className="h-9 rounded-lg bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700">
                + &nbsp; Thêm sinh viên
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-600">
                  <th className="px-3 py-3 font-semibold">ID</th>
                  <th className="px-4 py-3 font-semibold">Họ tên</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Tuổi</th>
                  <th className="px-4 py-3 font-semibold">
                    Chuyên ngành
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    Ngày tạo
                  </th>
                  <th className="px-4 py-3 text-center font-semibold">
                    Thao tác
                  </th>
                </tr>
              </thead>

              <tbody>
                {students.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    {/* ID */}
                    <td className="px-3 py-3 text-gray-700">
                      {student.id}
                    </td>

                    {/* Name */}
                    <td className="px-4 py-3 font-medium text-gray-800">
                      {student.name}
                    </td>

                    {/* Email */}
                    <td className="px-4 py-3 text-gray-600">
                      {student.email}
                    </td>

                    {/* Age */}
                    <td className="px-4 py-3 text-gray-700">
                      {student.age}
                    </td>

                    {/* Major */}
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          student.major === "IT"
                            ? "bg-cyan-100 text-cyan-700"
                            : student.major === "AI"
                              ? "bg-purple-100 text-purple-700"
                              : student.major === "Software Engineering"
                                ? "bg-green-100 text-green-700"
                                : student.major === "Data Science"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : student.major === "Web Development"
                                    ? "bg-cyan-100 text-cyan-700"
                                    : "bg-pink-100 text-pink-700"
                        }`}
                      >
                        {student.major}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="px-4 py-3 text-gray-600">
                      {student.date}
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3">
                      <div className="flex justify-center gap-2">
                        <button className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700">
                          ✎ &nbsp; Sửa
                        </button>

                        <button className="rounded-lg bg-red-500 px-4 py-2 text-xs font-medium text-white hover:bg-red-600">
                          🗑 &nbsp; Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-gray-500">
              Hiển thị 1 - 8 trong tổng số 8 sinh viên
            </p>

            <div className="flex items-center gap-2">
              <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-500">
                ‹
              </button>

              <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm text-white">
                1
              </button>

              <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-500">
                ›
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudentPage;
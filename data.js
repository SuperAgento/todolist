window.APP_DATA = {
    categories: [
        { name: 'Công việc chính (QII)', color: 'text-rose-700', bg: 'bg-rose-100', dot: 'bg-rose-500' },
        { name: 'Học trên lớp', color: 'text-indigo-700', bg: 'bg-indigo-100', dot: 'bg-indigo-500' },
        { name: 'Học cá nhân', color: 'text-cyan-700', bg: 'bg-cyan-100', dot: 'bg-cyan-500' },
        { name: 'Công việc cá nhân', color: 'text-emerald-700', bg: 'bg-emerald-100', dot: 'bg-emerald-500' },
    ],
    topics: [
        {
            title: "IELTS", desc: "Chinh phục ngôn ngữ", color: "from-blue-500 to-cyan-400",
            subSections: [
                { title: "General", icon: "Globe", links: [{ name: "Tài nguyên lớp", url: "#" }, { name: "Thông tin chung", url: "#" }] },
                { title: "Speaking", icon: "Mic", links: [{ name: "Web Luyện Nói", url: "#" }, { name: "Sheet Tổng Hợp", url: "#" }] },
                { title: "Listening", icon: "Headphones", links: [{ name: "Lớp Luyện Listening", url: "#" }, { name: "Study4 Practice", url: "#" }] },
                { title: "Reading", icon: "BookOpen", links: [{ name: "Lớp Luyện Reading", url: "#" }, { name: "Study4 Practice", url: "#" }] },
                { title: "Writing", icon: "PenTool", links: [{ name: "Task 1 Guide", url: "#" }, { name: "Task 2 Guide", url: "#" }] }
            ]
        },
        {
            title: "Marketing & Social", desc: "Chiến lược nội dung & Thương hiệu", color: "from-teal-500 to-emerald-400",
            links: [{ name: "Khóa học MST", url: "#" }, { name: "Khóa học Nguyễn Cảnh", url: "#" }, { name: "Khóa học Markus", url: "#" }, { name: "Khóa học Tiến Quốc", url: "#" }]
        },
        {
            title: "Business Analysis", desc: "Phân tích dữ liệu & Kinh doanh", color: "from-indigo-500 to-purple-400",
            links: [
                { name: "Tài liệu BA #1", url: "https://drive.google.com/drive/folders/1-MfpCq2TQjPsOheRo7CQKf0EI6sSHZ8r" },
                { name: "Tài liệu BA #2", url: "https://drive.google.com/drive/folders/1zDA5L6Jke7oqxW56HTqS9D1mAsb68ail" },
                { name: "Tài liệu BA #3", url: "https://drive.google.com/drive/folders/1W6KfKoGyKUm5iK12BOJCbAjRqMBWnq6z" },
                { name: "Tài liệu BA #4", url: "https://drive.google.com/drive/folders/11f2Lc_56M5IUKmhCU0hN-YvVtimT0xei" },
                { name: "Tài liệu BA #5", url: "https://drive.google.com/drive/folders/120R5JSabeL_g9oy4DMBzEm4bcLNr5oAI?usp=drive_link" }
            ]
        },
        { title: "ThreeSome", desc: "Học tập cùng nhau tiến bộ", color: "from-pink-500 to-rose-400", isThreeSome: true },
        {
            title: "Lớp học", desc: "Chương trình học trên trường", color: "from-amber-500 to-orange-400",
            isUniContainer: true,
            subjects: ["Kế toán", "Hệ thống thông tin", "Excel", "Lãnh đạo"]
        }
    ]
};

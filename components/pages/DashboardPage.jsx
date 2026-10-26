import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <h2>Dashboard</h2>
            <div className="stat-cards">
                <div className="stat-card-1">
                    <h3>14</h3>
                    <p>Số chủ đề thu thập</p>
                </div>
                <div className="stat-card-2">
                    <h3>6839</h3>
                    <p>Tổng tin thu thập</p>
                </div>
                <div className="stat-card-3">
                    <h3>1002</h3>
                    <p>Số tin có dấu hiệu vi phạm</p>
                </div>
                <div className="stat-card-4">
                    <h3>299</h3>
                    <p>Số tin không tìm được thông tin</p>
                </div>
            </div>
            <div className="stat-board">
                <h2>Bảng thống kê số lượng quảng cáo theo chủ đề</h2>
                <div className="filter">
                    <form action="">
                        {/* <label htmlFor="from-date">Từ ngày</label> */}
                        <input type="from-date" min="2026-10-20" max="2030-10-20" />
                        {/* <label htmlFor="to-date">Đến ngày</label> */}
                        <input type="to-date" />
                        {/* <label htmlFor="topic">Chủ đề</label> */}
                        <select name="topic" id="topic">
                            <option value="Tất cả">Tất cả</option>
                        </select>
                        {/* <label htmlFor="">Người tạo</label> */}
                        <select name="author" id="author">
                            <option value="Tất cả">Tất cả</option>
                        </select>
                        <button className="filter-button">Lọc</button>
                        <button className="export-excel-button">Xuất Excel</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;
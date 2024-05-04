import { Table } from "antd";
import { columns } from "../../description/dashboard.description";
import useDashboard from "../../hook/useDashboard.hook";

const Dashboard = () => {
    const { handleEdit, handleDelete, ticketData } = useDashboard()
    return <Table columns={columns(handleEdit, handleDelete)} dataSource={ticketData} />
}
export default Dashboard;
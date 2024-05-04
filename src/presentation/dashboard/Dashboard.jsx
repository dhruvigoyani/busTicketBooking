import { Table } from "antd";
import { columns, data } from "../../description/dashboard.description";
import useDashboard from "../../hook/useDashboard.hook";

const Dashboard = () => {
    const { reserveTicketData } = useDashboard()
    return <Table columns={columns} dataSource={[...data, ...reserveTicketData]} />
}
export default Dashboard;
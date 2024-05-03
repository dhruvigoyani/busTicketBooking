import { Table } from "antd";
import { columns, data } from "../../description/dashboard.description";

const Dashboard = () => {
    return <Table columns={columns} dataSource={data} />
}
export default Dashboard;
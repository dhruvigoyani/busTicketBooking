import { Table } from "antd";
import { columns } from "../../description/dashboard.description";
import useDashboard from "../../hook/useDashboard.hook";
import ReservationForm from "../../shared/ReservationForm";
import { EDIT_TICKET } from "../../utils/constant";

const Dashboard = () => {
    const {
        handleEdit,
        handleDelete,
        ticketData,
        toggleModal,
        handleCancel,
        onFinish,
        form
    } = useDashboard()
    return <>
        <Table columns={columns(handleEdit, handleDelete)} dataSource={ticketData} />
        <ReservationForm
            {...{
                toggleModal,
                handleCancel,
                title: EDIT_TICKET,
                onFinish,
                form,
                isEdit: true
            }}
        />
    </>
}
export default Dashboard;
import { Popconfirm, Space, } from "antd";
import { DELETE, EDIT } from "../utils/constant";

export const confirmationMsg = 'Are you sure to delete this item?'

export const columns = (handleEdit, handleDelete) => [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Seat Number',
        dataIndex: 'seatNumber',
    },
    {
        title: 'Date of Booking',
        dataIndex: 'dateOfBooking',

    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a onClick={() => handleEdit(record)}>{EDIT}</a>
                <Popconfirm
                    title={confirmationMsg}
                    onConfirm={() => handleDelete(record.key)}
                    okText="Yes"
                    cancelText="No"
                >
                    <a>{DELETE}</a>
                </Popconfirm>
            </Space>
        ),
    },
];
export const data = [
    {
        key: '1',
        name: 'John Brown',
        email: 32,
        seatNumber: 'L1',
        dateOfBooking: '3/3/2022',
    },
    {
        key: '2',
        name: 'Jim Green',
        email: 42,
        seatNumber: 'L2',
        dateOfBooking: '2/3/2022',
    },
];

import { Space, } from "antd";

export const columns = [
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
                <a>Edit</a>
                <a>Delete</a>
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
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { data } from "../description/dashboard.description";
import { Form } from "antd";
import { equal } from "../utils/javascript";

const useDashboard = () => {
    const reserveTicketData = useSelector((state) => state?.form?.reserveTicketData);
    const [form] = Form.useForm();

    const [toggleModal, setToggleModal] = useState(false)
    const [ticketData, setTicketData] = useState([])
    const [key, setKey] = useState(null)
    const handleCancel = () => setToggleModal(false)

    useEffect(() => {
        setTicketData([...data, ...reserveTicketData])
    }, [])

    const handleEdit = (record) => {
        form.setFieldsValue(record);
        setKey(record?.key)
        setToggleModal(true)
    }

    const handleDelete = (key) => {
        const updatedData = ticketData.filter(item => item.key !== key);
        setTicketData(updatedData);
    }

    const onFinish = (values) => {
        const updatedData = ticketData.map(item => {
            if (equal(item?.key, key)) {
                return { ...item, ...values };
            }
            return item;
        });

        setTicketData(updatedData);
        setKey(null)
        handleCancel()
    }

    return {
        handleEdit,
        handleDelete,
        ticketData,
        toggleModal,
        handleCancel,
        onFinish,
        form
    }
}

export default useDashboard
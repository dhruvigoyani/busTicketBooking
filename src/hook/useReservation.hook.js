import { useState } from "react"
import { useDispatch } from "react-redux";
import { RESERVED_TICKET } from "../redux/constant";
import { Form } from "antd";

const useReservation = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const [toggleModal, setToggleModal] = useState(false)

    const handleToggleModal = () => setToggleModal(true)

    const handleCancel = () => setToggleModal(false)

    const onFinish = (values) => {
        dispatch({
            type: RESERVED_TICKET,
            payload: { ...values, key: new Date()?.toISOString() },
        });
        handleCancel()
        form.resetFields();

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return { toggleModal, handleToggleModal, handleCancel, onFinish, onFinishFailed, form }
}
export default useReservation
import { useState } from "react"

const useReservation = () => {
    const [toggleModal, setToggleModal] = useState(false)

    const handleToggleModal = () => setToggleModal(true)

    const handleCancel = () => setToggleModal(false)

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return { toggleModal, handleToggleModal, handleCancel, onFinish, onFinishFailed }
}
export default useReservation
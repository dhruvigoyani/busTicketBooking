import useReservation from "../../hook/useReservation.hook";
import BTBButton from "../../shared/BTBButton";
import ReservationForm from "../../shared/ReservationForm";
import { RESERVE_TICKET_TITLE } from "../../utils/constant";

const Reservation = () => {
    const { toggleModal, handleToggleModal, handleCancel, onFinish, onFinishFailed } = useReservation()


    return <>
        <BTBButton onClick={handleToggleModal}>Book a ticket</BTBButton>
        <ReservationForm {...{ toggleModal, handleCancel, title: RESERVE_TICKET_TITLE, onFinish, onFinishFailed }} />
    </>
}
export default Reservation;
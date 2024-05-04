import useReservation from "../../hook/useReservation.hook";
import BTBButton from "../../shared/BTBButton";
import ReservationForm from "../../shared/ReservationForm";
import { BOOK_TICKET, RESERVE_TICKET_TITLE } from "../../utils/constant";

const Reservation = () => {
    const { toggleModal, handleToggleModal, handleCancel, onFinish, form } = useReservation()


    return <>
        <BTBButton onClick={handleToggleModal}>{BOOK_TICKET}</BTBButton>
        <ReservationForm
            {...{
                toggleModal,
                handleCancel,
                title: RESERVE_TICKET_TITLE,
                onFinish,
                form
            }}
        />
    </>
}
export default Reservation;
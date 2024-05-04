import { Row, Typography } from "antd";
import { seatLayout } from "../../description/seatLayout.description";
import useReservation from "../../hook/useReservation.hook";
import ReservationForm from "../../shared/ReservationForm";
import { RESERVE_TICKET_TITLE } from "../../utils/constant";
import { entries, ternary, upperCase } from "../../utils/javascript";

const { Title } = Typography;
const Reservation = () => {
  const { toggleModal, handleToggleModal, handleCancel, onFinish, form } =
    useReservation();

  return (
    <>
      {entries(seatLayout)?.map(([key, value]) => (
        <>
          <Title level={4}>{upperCase(key)}</Title>
          {entries(value)?.map(([key, value]) => (
            <Row>
              {value?.map((value) => (
                <div
                  style={{
                    width: "80px",
                    margin: "10px",
                    height: "50px",
                    backgroundColor: ternary(
                      value?.isSeatAvailable,
                      "lightGrey",
                      "red"
                    ),
                    pointerEvents: ternary(
                      value?.isSeatAvailable,
                      "auto",
                      "none"
                    ),
                    cursor: ternary(
                      value?.isSeatAvailable,
                      "pointer",
                      "default"
                    ),
                  }}
                  onClick={() => handleToggleModal(value)}
                >
                  {value?.isSeatAvailable && <p>seat available</p>}
                </div>
              ))}
            </Row>
          ))}
        </>
      ))}
      <ReservationForm
        {...{
          toggleModal,
          handleCancel,
          title: RESERVE_TICKET_TITLE,
          onFinish,
          form,
        }}
      />
    </>
  );
};
export default Reservation;

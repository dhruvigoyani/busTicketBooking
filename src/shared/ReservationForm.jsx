import { reservationField } from "../description/reservation.description";
import { SUBMIT } from "../utils/constant";
import { equal, ternary } from "../utils/javascript";
import BTBButton from "./BTBButton";
import BTBForm from "./BTBForm";
import BTBFormItem from "./BTBFormItem";
import BTBInput from "./BTBInput";
import BTBModal from "./BTBModal";

const ReservationForm = ({
  toggleModal,
  handleCancel,
  title,
  onFinish,
  onFinishFailed,
  form,
  isEdit,
}) => (
  <BTBModal {...{ handleCancel, open: toggleModal, title }}>
    <BTBForm {...{ onFinish, onFinishFailed, form }}>
      {reservationField?.map((field) =>
        ternary(
          equal(field?.name, "seatNumber") && !isEdit,
          null,
          <BTBFormItem
            {...field}
            label={ternary(
              equal(field?.name, "seatNumber") && !isEdit,
              null,
              field?.label
            )}
          >
            <BTBInput
              {...field}
              disabled={equal(field?.name, "seatNumber") && isEdit}
            />
          </BTBFormItem>
        )
      )}
      <BTBFormItem
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <BTBButton type="primary" htmlType="submit">
          {SUBMIT}
        </BTBButton>
      </BTBFormItem>
    </BTBForm>
  </BTBModal>
);

export default ReservationForm;

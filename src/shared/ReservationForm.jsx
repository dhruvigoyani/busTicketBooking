import { reservationField } from "../description/reservation.description"
import { SUBMIT } from "../utils/constant"
import { equal, ternary } from "../utils/javascript"
import BTBButton from "./BTBButton"
import BTBForm from "./BTBForm"
import BTBFormItem from "./BTBFormItem"
import BTBInput from "./BTBInput"
import BTBModal from "./BTBModal"
import BTBSelect from "./BTBSelect"

const ReservationForm = ({ toggleModal, handleCancel, title, onFinish, onFinishFailed, form }) =>
    <BTBModal  {...{ handleCancel, open: toggleModal, title }}>
        <BTBForm
            {...{ onFinish, onFinishFailed, form }}
        >
            {reservationField?.map((field) =>
                <BTBFormItem {...field}>
                    {ternary(equal(field?.type, 'select'),
                        <BTBSelect options={[{
                            value: 'jack',
                            label: 'Jack',
                        },
                        {
                            value: 'lucy',
                            label: 'Lucy',
                        },
                        ]} />,
                        <BTBInput {...field} />)}
                </BTBFormItem>
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

export default ReservationForm
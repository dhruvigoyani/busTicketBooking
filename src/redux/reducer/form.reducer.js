import { RESERVED_TICKET } from "../constant";

const initialState = {
    reserveTicketData: []
};

const Form = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case RESERVED_TICKET:
            return {
                ...state,
                reserveTicketData: [...state.reserveTicketData, payload]
            };
        default:
            return state;
    }
}


export default Form;

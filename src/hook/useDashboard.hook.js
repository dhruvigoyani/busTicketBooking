import { useSelector } from "react-redux";

const useDashboard = () => {
    const reserveTicketData = useSelector((state) => state?.form?.reserveTicketData);
    return {
        reserveTicketData
    }
}

export default useDashboard
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { data } from "../description/dashboard.description";

const useDashboard = () => {
    const reserveTicketData = useSelector((state) => state?.form?.reserveTicketData);

    const [ticketData, setTicketData] = useState([])

    useEffect(() => {
        setTicketData([...data, ...reserveTicketData])
    }, [])

    const handleEdit = (record) => {
        console.log('object :>> ', record);
    }

    const handleDelete = (key) => {
        const updatedData = ticketData.filter(item => item.key !== key);
        setTicketData(updatedData);
    }

    return {
        handleEdit, handleDelete, ticketData
    }
}

export default useDashboard
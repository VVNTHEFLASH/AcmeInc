import { BaseURL, salesreportEndpoint } from "../../secret"

const fetchSalesReport = async () => {
    const request = await fetch(`${BaseURL}${salesreportEndpoint}`)
    const response = await request.json()
    return response;
}

export { fetchSalesReport }
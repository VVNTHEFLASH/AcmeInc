import { BaseURL, salesreportEndpoint, CTEndpoint } from "../../secret"

const fetchSalesReport = async () => {
    const request = await fetch(`${BaseURL}${salesreportEndpoint}`)
    const response = await request.json()
    return response;
}

const fetchCT = async () => {
    const request = await fetch(`${BaseURL}${CTEndpoint}`)
    const response = await request.json()
    return response; 
}

export { fetchSalesReport, fetchCT, BaseURL }

import request from "./request";

export const getBillList = (data)=> {
    return request ({
        url: '/api/bill/query',
        method: 'post',
        data
    })
}

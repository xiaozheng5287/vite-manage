
import request from "./request";

export const getBillList = (data)=> {
    return request ({
        url: '/getBillList',
        method: 'post',
        data
    })
}

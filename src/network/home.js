import { request } from "./request";

export function getHomeMultiData(){
    return request ({
        url:'/home/multidata'
    })
}

export function getHomeGoods(type, page){
    return request ({
        url:'/home/data',
        // methods:'GET',
        params: {
            type,
            page
        }
             
    })
}
import require from "../utils/require"

export const getTopics = (page,limit) => {
    return require({
        url:"/topics",
        method:"GET",
        params:{
            page,
            limit
        }
    })
}

export const fun2 = () => {
    console.log(123);
    
}

import require from "../utils/require"

export const getTopics = (page,limit,tab) => {
    return require({
        url:"/topics",
        method:"GET",
        params:{
            page,
            tab,
            limit,
            mdrender:"false"
        }
    })
}


import axios from "axios"


export const createlike = async(postlike)=>{
    
    let response = await axios.post(process.env.VUE_APP_APIURL+"like/",postlike)
    return (response)

}

export const deletelike = async (postlike) => {
    let response = await axios.delete(process.env.VUE_APP_APIURL+"like/",{data : postlike})
    return response
}
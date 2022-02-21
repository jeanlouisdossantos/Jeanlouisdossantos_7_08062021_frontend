import axios from "axios"


export const createlike = async(postlike,token)=>{

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    let response = await axios.post(process.env.VUE_APP_APIURL+"like/",postlike)
    return (response)

}

export const deletelike = async (postlike, token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    let response = await axios.delete(process.env.VUE_APP_APIURL+"like/",{data : postlike})
    return response
}

export const getlikes = async (postid, token) =>{
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    let response = await axios.get(process.env.VUE_APP_APIURL+"like/"+postid)
    return response
}
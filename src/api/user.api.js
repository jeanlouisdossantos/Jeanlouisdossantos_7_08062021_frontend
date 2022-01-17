import axios from "axios"

export const getUserDetails = async (token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    let response = await axios.get(process.env.VUE_APP_APIURL+"user/")
    
    return (response)
}

export const updateUserDetails = async (token, user) =>{
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    let response = await axios.put(process.env.VUE_APP_APIURL+"user/", user)
    return response
}
import axios from "axios"

/**
 * 
 */
export const signup = async userobjet => {
    let response = await axios.post(process.env.VUE_APP_APIURL+"user/signin",userobjet)
console.log(response)
return (response)
}

export const login = async userlogin => {
    return (await axios.post(process.env.VUE_APP_APIURL+"user/login",userlogin))
}
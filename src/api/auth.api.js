// import axios ICI

export const signup = async userobjet => {
return (await axios.post(process.env.VUE_APP_APIURL+"user/signup") 
)
// mon code ici avec axios

}
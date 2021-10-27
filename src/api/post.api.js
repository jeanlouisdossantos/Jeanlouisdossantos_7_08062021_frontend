import axios from "axios";

export const getAllPost = async () => {
  let response = await axios.get(process.env.VUE_APP_APIURL + "post");
  return response;
};
export const createOnePost = async (postobject, token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  let header = {};

  // modifier le header si fichier ou pas
  if (postobject.file) {
    header = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
  }

  // {"Content-Type" : "multipart/form-data"}

  let response = await axios.post(
    process.env.VUE_APP_APIURL + "post/",
    postobject,
    header
  );
  return response;
};

export const createOneComment = async (postobject, token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  let response = await axios.post(
    process.env.VUE_APP_APIURL + "post/comment",
    postobject
  );
  return response;
};

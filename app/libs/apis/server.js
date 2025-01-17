import { api } from "../api";

export const loginUser = async (loginData) => {
  //console.log(loginData);
    const response = await fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      body: JSON.stringify({
        email: loginData?.email,
        password: loginData?.password,
      }),
   });
 };
export const getMovies = async() => {
  try {
    const movieRes =await api.get("movies");

    if(movieRes.ok){
      return movieRes.json();
    }else{
      return{error: true, message:"something went wrong"};
    }

  } catch (error) {
    console.log("MOVIE Response",error);
    if (error) {
      const status = error?.response?.status;
      const responseBody = await error?.response?.json();

      console.log("HTTP ERROR :", status, responseBody);
    } else {
      console.log("Unknown Error");
    }
    return undefined;
  }
};


import { SignInForm } from "@/components/Login/Login.tsx";
import axios from "axios";
import { API } from "./API";

const headers = {
  "Content-Type": "application/json",
};

export const fetchAuth = async ({
  email,
  password,
}: SignInForm): Promise<number | { error: string }> => {
  try {
    const res = await axios.post<SignInForm>(
      `${API.baseUrl}/${API.login}`,
      {
        email,
        password,
      },
      { headers },
    );
    if (!res.data) {
      throw new Error("Something went wrong");
    }
    console.log(res);

    return res.status;
  } catch (error) {
    console.log(error);
    return {
      error: JSON.stringify(error),
    };
  }
};

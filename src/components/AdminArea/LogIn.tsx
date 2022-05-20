import { useEffect, useState } from "react";

import { requestLoginAccess } from "../../services/emails";
import styles from "./LogIn.module.scss";
interface Credentials {
  email: string;
  password: string;
}
interface ResponseServer {
  LOGIN_ANSWER: string;
}
const Login = () => {
  const [userCredentials, setuserCredentials] = useState<Credentials>({ email: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const requestAccess = async () => {
    try {
      await requestLoginAccess(userCredentials.email, userCredentials.password).then((dataResponse) => {
        dataResponse.json().then((jsonResponse: ResponseServer) => {
          if (jsonResponse.LOGIN_ANSWER === "SUCCESS") {
            setLoggedIn(true);
          } else {
            console.log("Here is the result:", jsonResponse.LOGIN_ANSWER);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmitLogin = () => {
    requestAccess();
  };

  const inputHandler = (data: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = data.target;
    setuserCredentials((userCredentials) => ({ ...userCredentials, [name]: value }));
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCardBoard}>
        <div className={styles.logo}>
          <img
            className={styles.loginLogo}
            src="https://firebasestorage.googleapis.com/v0/b/sapunmontan.appspot.com/o/logo%2Fmontanair.png?alt=media&token=f42ebf81-1205-44d2-806b-7130100adda7"
          />
        </div>

        <h3 className={styles.textInside}>{"Login Admin"}</h3>
        <div className={styles.inputFields}>
          <label className="admin" htmlFor="email">
            {"Email:"}
          </label>
          <input name="email" type={"email"} onChange={inputHandler}></input>
          <label className="admin" htmlFor="email">
            {"Parola:"}
          </label>
          <input name="password" type={"password"} onChange={inputHandler}></input>
          <input type="submit" value="Submit" onClick={onSubmitLogin} />
        </div>
        {loggedIn && <p className={styles.centerP}>{"Logat!"}</p>}
      </div>
    </div>
  );
};
export default Login;

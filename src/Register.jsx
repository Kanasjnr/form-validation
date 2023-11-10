import { useRef, useEffect, useState } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "./api/axios";

const USER_REGEX = /^[A-Z][a-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "./Register.jsx";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    useRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [user, matchPwd]);
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  return (
    <>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <form>
        <label htmlFor="username">
          username:
          <FontAwesomeIcon
            icon={faCheck}
            className={validMatch && matchPwd ? "valid" : "hide"}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validMatch || matchPwd ? "hide" : "invalid"}
          />
        </label>
        <input
          type="text"
          id="uesername"
          ref={userRef}
          onChange={(e) => setUser(e.target.value)}
          placeholder="username"
          value={user}
          autoComplete="off"
          required
          aria-invalid={validMatch ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />

        <p id="uidnote" className={userFocus && user && !validName ? "instruction" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircles} />
            8-24 characters.<br/> Must include UpperCase and LowerCase Letters, a number and a Special character. <br/> 

        </p>
      </form>
    </>
  );
};

export default Register;

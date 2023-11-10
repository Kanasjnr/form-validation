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
  
    const [matchPwd, setMatchPwd] = useState("")
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)
  
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        useRef.current.focus()
    },[])

    useEffect(() => {
      setValidName(USER_REGEX.test(user))
    },[user])
    useEffect(() => {
      setValidPwd(USER_REGEX.test(pwd))
    },[user])
    useEffect(() => {
      setValidName(USER_REGEX.test(user))
    },[user])



};

export default Register;

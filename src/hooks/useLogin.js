import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDataAPI } from '../libs/api/getDataAPI';
import userStorage from '../libs/utils/userStorage';
import useValidation from './useValidation';

export default function useLogin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const email = emailRef?.current?.value;
  const password = passwordRef?.current?.value;
  const [userList, setUserList] = useState([]);

  const { onCheckEmail, onCheckPw, isValidated } = useValidation();

  useEffect(() => {
    const getData = async () => {
      const data = await getDataAPI('user');
      setUserList(data);
    };
    getData();
  }, []);

  const onLogin = (event) => {
    event.preventDefault();
    try {
      const result = userList.filter(
        (user) => user.userName === email && user.password === password
        );
        if (shouldStoreUser(result)) {
          userStorage.set(email);
        } else throw new Error('등록되지 않은 이메일 또는 비밀번호입니다.');
        navigate('/feed');
      } catch (error) {
        alert(error);
      }
    };

  const shouldStoreUser = (result) => result.length !== 0;

  return {
    emailRef,
    passwordRef,
    onLogin,
    isValidated,
    onCheckEmail,
    onCheckPw,
  };
}

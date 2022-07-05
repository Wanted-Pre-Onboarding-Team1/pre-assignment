import { useState } from 'react';

function useValidation() {
  const [isValidated, setIsValidated] = useState({
    email: true,
    pw: true,
  });

  const onCheckEmail = (event) => {
    const value = event.target.value;
    const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!isInputValid(emailRegex, value)) {
      setIsValidated({ ...isValidated, email: false });
      return;
    }
    setIsValidated({ ...isValidated, email: true });
    return;
  };

  const onCheckPw = (event) => {
    const value = event.target.value;
    const pwRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    if (!isInputValid(pwRegex, value)) {
      setIsValidated({ ...isValidated, pw: false });
      return;
    }
    setIsValidated({ ...isValidated, pw: true });
    return;
  };

  const isInputValid = (regex, value) => regex.test(value);

  return { onCheckEmail, onCheckPw, isValidated };
}

export default useValidation;

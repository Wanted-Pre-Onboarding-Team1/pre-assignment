import React, { useCallback, useEffect, useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import userStorage from '../../libs/utils/userStorage';

const UserIcon = () => {
  const [user, setUser] = useState({ email: '' });
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    userStorage.remove();
    setUser({ email: '' });
  }, []);

  useEffect(() => {
    const userParser = userStorage.get();
    setUser(userParser);
    userParser ? navigate('/feed') : navigate('/');
  }, [user]);

  return <FaRegUserCircle size={20} onClick={onLogout} />;
};

export default UserIcon;

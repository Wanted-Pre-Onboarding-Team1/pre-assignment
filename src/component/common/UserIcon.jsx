import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import userStorage from '../../libs/utils/userStorage';

const UserIcon = () => {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    userStorage.remove();
    setUser('');
  }, []);

  useEffect(() => {
    const parsedUser = userStorage.get();
    setUser(parsedUser);
    parsedUser ? navigate('/feed') : navigate('/');
  }, [user]);

  return <FaRegUserCircle size={20} onClick={onLogout} />;
};

export default UserIcon;

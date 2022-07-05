import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexRow } from '../../styles/commonComponents';

function RegisterBox() {
  return (
    <FlexRow>
      <RegisterGuide>계정이 없으신가요?</RegisterGuide>
      <RegisterLink to={'/'}>가입하기</RegisterLink>
    </FlexRow>
  );
}

export const RegisterGuide = styled.h3`
  font-size: 13px;
  color: #777777;
  font-weight: 600;
  margin: 20px 6px 20px 0;
`;
const RegisterLink = styled(Link)`
  color: #27a3f6;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
`;

export default React.memo(RegisterBox);

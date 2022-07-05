import React from 'react';
import styled from 'styled-components';
import { FlexRow } from '../../styles/commomComponents';
import { AiFillFacebook } from 'react-icons/ai';

function SubLoginBox() {
  return (
    <>
      <FlexRow>
        <HalfHr />
        <CloudyString>또는</CloudyString>
        <HalfHr />
      </FlexRow>
      <AltLogin>
        <FackbookLogo />
        Facebook으로 로그인
      </AltLogin>
      <FindPassword>비밀번호를 잊으셨나요?</FindPassword>
    </>
  );
}

const HalfHr = styled.hr`
  height: 1px;
  background-color: #e5e5e5;
  width: 30%;
`;

const CloudyString = styled.p`
  font-size: 13px;
  color: #777777;
`;
const AltLogin = styled.h3`
  color: #385185;
  font-size: 13px;
  font-weight: 700;
  margin-top: 12px;
`;
const FindPassword = styled.div`
  color: #183d8c;
  font-size: 11px;
  font-weight: 600;
  margin: 16px 0;
`;
const FackbookLogo = styled(AiFillFacebook)`
  margin-right: 4px;
`;

export default React.memo(SubLoginBox);

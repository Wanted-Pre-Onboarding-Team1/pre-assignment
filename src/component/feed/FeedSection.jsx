import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import styled from 'styled-components';
import useLazyCheck from '../../hooks/useLazyCheck';
import { GLOBAL_COLOR } from '../../styles/constans';
import { FlexRow } from '../../styles/commonComponents';
import Img from '../common/Image';
import FeedCommentSection from './FeedCommentSection';

const FeedSection = (props) => {
  const { userName, img, likes, comments } = props.feedData;
  const { isFeedimg, isUserImg, onChangeLoading } = useLazyCheck();

  return (
    <FeedContainer isLoading={isFeedimg || isUserImg}>
      <WriterInfo>
        <FlexRow>
          <ElementBox>
            <Img
              name="userImg"
              src="https://source.unsplash.com/random/32x32"
              alt="유저 이미지"
              onCheckLazy={onChangeLoading}
            />
          </ElementBox>
          <NickName>{userName}</NickName>
        </FlexRow>
        <ElementBox>
          <FiMoreHorizontal size={24} />
        </ElementBox>
      </WriterInfo>
      <div>
        <Img
          name="feedImg"
          src={img}
          alt="피드 이미지"
          onCheckLazy={onChangeLoading}
        />
      </div>
      <FeedCommentSection comments={comments} likes={likes} />
    </FeedContainer>
  );
};

const ElementBox = styled.div`
  margin: 10px;
`;
export const NickName = styled.p`
  color: ${GLOBAL_COLOR.GRAY_3};
  margin: 4px 10px;
  font-weight: 800;
`;
const WriterInfo = styled(FlexRow)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  align-items: center;
`;
const FeedContainer = styled.section`
  margin-top: 20px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: ${GLOBAL_COLOR.WHITE};
  display: ${({ isLoading }) => (isLoading ? 'none' : 'block')};
`;

export default React.memo(FeedSection);

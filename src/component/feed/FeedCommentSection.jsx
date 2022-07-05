import React from 'react';
import styled from 'styled-components';
import { AiOutlineSmile } from 'react-icons/ai';
import { FiSave } from 'react-icons/fi';
import { GLOBAL_COLOR } from '../../styles/constans';
import useCommentForm from '../../hooks/useCommentForm';
import { COMMENT_ICONS } from '../../libs/constans';
import { FlexRow } from '../../styles/commonComponents';
import { NickName } from './FeedSection';

const FeedCommentSection = (props) => {
  const { likes, comments } = props;
  const { commentList, nowComment, onChangeCommnet, onSubmitComment } =
    useCommentForm(comments);

  return (
    <CommentContainer>
      <CommentIconSection>
        <FlexRow>
          {COMMENT_ICONS.map(({ icon }, index) => (
            <div key={`${icon}_${index}`}>
              <CommentIcon>{icon}</CommentIcon>
            </div>
          ))}
        </FlexRow>
        <CommentIcon>
          <FiSave size={24} />
        </CommentIcon>
      </CommentIconSection>
      <LikeCount>좋아요 {likes}개</LikeCount>
      {commentList?.map(({ id, userName, text }, index) => (
        <CommentList key={`${id}_${index}`}>
          <NickName>{userName}</NickName>
          <div>{text}</div>
        </CommentList>
      ))}
      <CommentPostBox onSubmit={onSubmitComment}>
        <AiOutlineSmile size={24} />
        <CommentInput
          name="text"
          onChange={onChangeCommnet}
          value={nowComment.text}
          placeholder="댓글달기..."
        />
        <CommentSubmitBtn type="submit" value="게시" />
      </CommentPostBox>
    </CommentContainer>
  );
};

const CommentIconSection = styled.section`
  display: flex;
  justify-content: space-between;
`;
const CommentIcon = styled.div`
  padding-right: 16px;
`;
const CommentContainer = styled.div`
  padding: 8px 8px 0px 8px;
`;
const LikeCount = styled.p`
  padding: 16px 0 32px 0;
  color: ${GLOBAL_COLOR.GRAY_3};
  font-weight: 700;
  font-size: 14px;
`;
const CommentList = styled.div`
  display: flex;
  font-size: 14px;
  align-items: center;
`;
const CommentSubmitBtn = styled.input`
  width: 32px;
  font-weight: bold;
  color: #6495ed;
  background-color: inherit;
  cursor: pointer;
`;
const CommentPostBox = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  border-top: 1px solid #dbdbdb;
  margin-top: 10px;
`;
const CommentInput = styled.input`
  width: 80%;
  ::placeholder {
    color: #9e9e9e;
    font-size: 12px;
  }
`;

export default React.memo(FeedCommentSection);

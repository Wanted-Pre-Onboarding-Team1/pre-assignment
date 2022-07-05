import { useState } from 'react';
import { INITIAL_COMMENT_STATE } from '../libs/constans';

function useCommentForm(initailCommentList) {
  const [commentList, setCommentList] = useState(initailCommentList);
  const [nowComment, setNowComment] = useState(INITIAL_COMMENT_STATE);

  const onChangeComment = ({ target: { name, value } }) =>
    setNowComment({ ...nowComment, [name]: value });

  const onSubmitComment = (event) => {
    event.preventDefault();
    if (shouldChangeCmtState(nowComment)) return;
    setCommentList([...commentList, nowComment]);
    setNowComment(INITIAL_COMMENT_STATE);
  };

  const shouldChangeCmtState = (condition) => condition.text === '';

  return { nowComment, onChangeComment, onSubmitComment, commentList };
}

export default useCommentForm;

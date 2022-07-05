import { useState } from 'react';
import { INITIAL_COMMENT_STATE } from '../libs/constans';

function useCommentForm(initailCommentList) {
  const [commentList, setCommentList] = useState(initailCommentList);
  const [nowComment, setNowComment] = useState(INITIAL_COMMENT_STATE);

  const onChangeCommnet = (event) => {
    const { name, value } = event.target;
    setNowComment({ ...nowComment, [name]: value });
  };

  const onSubmitComment = (event) => {
    event.preventDefault();
    if (nowComment.text === '') return;
    setCommentList([...commentList, nowComment]);
    setNowComment(INITIAL_COMMENT_STATE);
  };

  return { nowComment, onChangeCommnet, onSubmitComment, commentList };
}

export default useCommentForm;

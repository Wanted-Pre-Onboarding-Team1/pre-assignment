import React from 'react';
import styled from 'styled-components';
import useFeedLoad from '../hooks/useFeedLoad';
import FeedSection from '../component/feed/FeedSection';

const FeedPage = () => {
  const { feeds } = useFeedLoad();

  const feedArr = feeds?.map((feed, index) => (
    <FeedSection feedData={feed} key={`${feed.id}_${index}`} />
  ));

  return <FeedsWrapper>{feedArr}</FeedsWrapper>;
};

const FeedsWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

export default FeedPage;

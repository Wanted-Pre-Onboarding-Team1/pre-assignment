import React, { useEffect, useState } from 'react';
import { getFeedsAPI } from '../libs/api/feedAPI';

function useFeedLoad() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const getFeeds = async () => {
      try {
        const response = await getFeedsAPI();
        setFeeds(response.data);
      } catch (error) {
        alert('피드를 불러오는데 실패했습니다.');
      }
    };
    getFeeds();
  }, []);

  return { feeds };
}

export default useFeedLoad;

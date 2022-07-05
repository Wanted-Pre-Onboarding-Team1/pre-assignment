import { useEffect, useState } from 'react';
import { getDataAPI } from '../libs/api/getDataAPI';

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

  const getFeeds = async () => {
    const response = await getDataAPI('feed');
    setFeeds(response);
  };

  return { feeds };
}

export default useFeedLoad;

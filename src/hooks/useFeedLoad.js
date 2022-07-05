import { useEffect, useState } from 'react';
import { getDataAPI } from '../libs/api/getDataAPI';

function useFeedLoad() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    getFeeds();
  }, []);

  const getFeeds = async () => {
    const response = await getDataAPI('feed');
    setFeeds(response);
  };

  return { feeds };
}

export default useFeedLoad;

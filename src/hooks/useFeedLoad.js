import { useEffect, useState } from 'react';
import { getDataAPI } from '../libs/api/getDataAPI';

function useFeedLoad() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const getFeeds = async () => {
      const response = await getDataAPI('feed');
      setFeeds(response);
    };
    getFeeds();
  }, []);

  return { feeds };
}

export default useFeedLoad;

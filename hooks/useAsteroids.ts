import useSWR from 'swr';
import fetch from '../libs/fetch';

type Data = {
  data?: Record<string, any>;
  error?: any;
};

function useAsteroids(date: Date) {
  const reqDate = new Date(date).toISOString().split('T')[0];
  const { data, error }: Data = useSWR(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${reqDate}&api_key=v3nWcnCDTXls5Q4HvYcDIbCM91ygb5NJphV91sQ8`,
    fetch,
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useAsteroids;

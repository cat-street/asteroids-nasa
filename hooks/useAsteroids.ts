import useSWR from 'swr';
import fetch from '../utils/fetch';

type Data = {
  data?: Record<string, any>;
  error?: any;
};

const options = {
}

function useAsteroids(date: Date) {
  const startDate = new Date(date).toISOString().split('T')[0];
  const rawEndDate = new Date(date);
  rawEndDate.setDate(date.getDate() + 6);
  const endDate = rawEndDate.toISOString().split('T')[0];
  const { data, error }: Data = useSWR(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=v3nWcnCDTXls5Q4HvYcDIbCM91ygb5NJphV91sQ8`,
    fetch,
    options,
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useAsteroids;

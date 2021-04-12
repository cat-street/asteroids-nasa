import useSWR from 'swr';
import fetch from '../utils/fetch';

type Data = {
  data?: Record<string, any>;
  error?: any;
};

function useAsteroid(id: string): Record<string, any> {
  const { data, error }: Data = useSWR(
    `https://www.neowsapp.com/rest/v1/neo/${id}?api_key=v3nWcnCDTXls5Q4HvYcDIbCM91ygb5NJphV91sQ8`,
    fetch,
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useAsteroid;

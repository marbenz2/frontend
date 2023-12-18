import { useEffect, useState } from "react";
import axios from "axios";
import { ErrorType } from "@/types/types";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<ErrorType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data.docs);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};

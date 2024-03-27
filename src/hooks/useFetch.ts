import { useCallback, useEffect, useState } from "react";

export const useFetch = <T>(
  fetcher: () => Promise<T>,
  deps?: unknown[],
  initialValue: T | null = null,
  disable?: boolean,
) => {
  const [data, setData] = useState(initialValue);
  const [status, setStatus] = useState<
    "loading" | "error" | "success" | "idle"
  >("idle");
  const [error, setError] = useState<unknown | null>(null);

  const _fetcher = useCallback(fetcher, deps ?? []);

  const callApi = async () => {
    if (disable) {
      return;
    }

    try {
      setStatus("loading");
      const res = await _fetcher();
      setData(res);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(error);
    }
  };

  useEffect(() => {
    (async () => {
      await callApi();
    })();
  }, [_fetcher, error]);
  return { status, data, error, refetch: () => callApi() };
};

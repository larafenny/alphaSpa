import useSWR from "swr";
import axios from "axios";

const useGet = (url) => {
    const fetcher = async () => {
        const result = await axios
            .get(url);
        return result.data;
    };

    const { data, error } = useSWR(url, fetcher);

    return {
        result: data,
        isLoading: !data && !error,
        error: error
    }
}

export { useGet };
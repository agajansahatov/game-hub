import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/APIClient";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: {count: genres.length, next: null, results: genres}
});

export default useGenres;
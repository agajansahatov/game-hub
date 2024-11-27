import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import APIClient, { FetchResponse } from "../services/APIClient";
import ms from "ms";
import useGameQueryStore from "../store";

export interface Game {
	id: number;
	name: string;
    background_image: string;
	parent_platforms:  { platform: Platform } [];
	metacritic: number;
	rating_top: number;
}

const apiClient = new APIClient<Game>('/games');

const useGames = () => {
	const gameQueryParams = useGameQueryStore(s => s.gameQuery);

	return useInfiniteQuery<FetchResponse<Game>, Error>({
		queryKey: ['games', gameQueryParams],
		queryFn: ({pageParam = 1}) => 
			apiClient.getAll({
				params: {
					genres: gameQueryParams.genreId, 
					parent_platforms: gameQueryParams.platformId,
					ordering: gameQueryParams.sortOrder,
					search: gameQueryParams.searchText,
					page: pageParam
				}
			}),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
		staleTime: ms('24h')
	})
};

export default useGames;
import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/APIClient";
import ms from "ms";
import useGameQueryStore from "../store";
import Game from "../entities/Game";

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
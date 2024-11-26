import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import APIClient, { FetchResponse } from "../services/APIClient";

export interface Game {
	id: number;
	name: string;
    background_image: string;
	parent_platforms:  { platform: Platform } [];
	metacritic: number;
	rating_top: number;
}

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQueryParams: GameQuery) => 
	useQuery<FetchResponse<Game>, Error>({
		queryKey: ['games', gameQueryParams],
		queryFn: () => 
			apiClient.getAll({
				params: {
					genres: gameQueryParams.genre?.id, 
					parent_platforms: gameQueryParams.platform?.id,
					ordering: gameQueryParams.sortOrder,
					search: gameQueryParams.searchText
				}
			})
	});

export default useGames;
import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
    background_image: string;
	parent_platforms:  { platform: Platform } [];
	metacritic: number;
	rating_top: number;
}

const useGames = (gameQueryParams: GameQuery) => 
	useQuery<FetchResponse<Game>, Error>({
		queryKey: ['games', gameQueryParams],
		queryFn: () => 
			apiClient.get<FetchResponse<Game>>('/games', {
				params: {
					genres: gameQueryParams.genre?.id, 
					parent_platforms: gameQueryParams.platform?.id,
					ordering: gameQueryParams.sortOrder,
					search: gameQueryParams.searchText
				}
			})
			.then(res => res.data)
	});

export default useGames;
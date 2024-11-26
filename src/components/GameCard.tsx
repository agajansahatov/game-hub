import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "./../services/image-url";
import { GameQuery } from "../App";
import Emoji from "./Emoji";

interface Props {
	game: Game;
	gameQuery: GameQuery;
}

export const GameCard = ({ game, gameQuery }: Props) => {
	const gameName = game.name;
	const searchText = gameQuery.searchText;
	let start = "";
	let hightlight = "";
	let end = "";

	if (searchText && gameName.toLowerCase().includes(searchText)) {
		const index1 = gameName.toLowerCase().indexOf(searchText);
		const index2 = index1 + searchText.length - 1;
		start = gameName.slice(0, index1);
		hightlight = gameName.slice(index1, index2 + 1);
		end = gameName.slice(index2 + 1);
	}

	return (
		<Card>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<HStack justifyContent="space-between" marginBottom={3}>
					<PlatformIconList
						platforms={game.parent_platforms?.map((p) => p.platform)}
						selectedPlatform={gameQuery.platform}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize="2xl">
					{hightlight ? (
						<>
							{start}
							<Text as="span" textDecoration="underline">
								{hightlight}
							</Text>
							{end}
						</>
					) : (
						gameName
					)}
					<Emoji rating={game.rating_top} />
				</Heading>
			</CardBody>
		</Card>
	);
};

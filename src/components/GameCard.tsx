import { Game } from "../entities/Game";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "./../services/image-url";
import Emoji from "./Emoji";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";
import { Link } from "react-router-dom";

interface Props {
	game: Game;
}

export const GameCard = ({ game }: Props) => {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);
	const selectedPlatform = usePlatform(gameQuery.platformId);

	const gameName = game.name;
	const searchText = gameQuery.searchText?.toLowerCase();
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
		<Link to={`/games/${game.slug}`}>
			<Card>
				<Image src={getCroppedImageUrl(game.background_image)} />
				<CardBody>
					<HStack justifyContent="space-between" marginBottom={3}>
						<PlatformIconList
							platforms={game.parent_platforms?.map((p) => p.platform)}
							selectedPlatform={selectedPlatform}
						/>
						<CriticScore score={game.metacritic} />
					</HStack>
					<Heading fontSize="2xl">
						{hightlight ? (
							<>
								{start}
								<Text as="span" fontStyle="italic" fontWeight="bold">
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
		</Link>
	);
};

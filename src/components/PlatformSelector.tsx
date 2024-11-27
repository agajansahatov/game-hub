import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
	const { data, error } = usePlatforms();

	const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
	const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
	const selectedPlatform = usePlatform(selectedPlatformId);

	if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				{data?.results.map(
					(p) =>
						p.slug.indexOf("-") == -1 &&
						p.slug.indexOf("3") == -1 && (
							<MenuItem
								key={p.id}
								onClick={() => setSelectedPlatformId(p.id)}
								fontWeight={selectedPlatformId == p.id ? "bold" : "normal"}
							>
								{p.name}
							</MenuItem>
						),
				)}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;

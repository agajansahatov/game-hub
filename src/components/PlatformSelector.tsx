import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
	onSelectPlatform: (p: Platform) => void;
	selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
	const { data, error } = usePlatforms();

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
								onClick={() => onSelectPlatform(p)}
								fontWeight={selectedPlatform?.id == p.id ? "bold" : "normal"}
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

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
interface Props {
	onSelectPlatform: (p: Platform) => void;
	selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
	const { data, error } = usePlatforms();
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
								onClick={() => onSelectPlatform(p)}
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

import { HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
	onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
	return (
		<HStack padding="10px">
			<Image src={logo} boxSize="60px" />
			<Show above="lg">
				<Text fontSize={20} marginLeft={-1} paddingRight={2}>
					GameHub
				</Text>
			</Show>
			<SearchInput onSearch={onSearch} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;

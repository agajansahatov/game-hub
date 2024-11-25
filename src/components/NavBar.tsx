import { HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
	return (
		<HStack padding="10px">
			<Image src={logo} boxSize="60px" />
			<Show above="lg">
				<Text fontSize={20} marginLeft={-1} paddingRight={2}>
					GameHub
				</Text>
			</Show>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;

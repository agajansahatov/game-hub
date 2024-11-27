import { HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<HStack padding="10px">
			<Link to="/" className="logo">
				<HStack paddingRight={10} marginRight={5}>
					<Image
						src={logo}
						objectFit="cover"
						boxSize="60px"
						className="logo-image"
					/>
					<Show above="lg">
						<Text fontSize={20} marginLeft={-1}>
							GameHub
						</Text>
					</Show>
				</HStack>
			</Link>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;

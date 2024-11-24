import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons/lib";

interface Props {
	platforms: Platform[];
	selectedPlatform: Platform | null;
}

const PlatformIconList = ({ platforms, selectedPlatform }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		ios: MdPhoneIphone,
		web: BsGlobe,
	};

	const iconMapArray = Object.keys(iconMap);

	return (
		<HStack marginY={1}>
			{platforms.map((platform) =>
				iconMapArray.indexOf(platform.slug) ? (
					<Icon
						as={iconMap[platform.slug]}
						color={
							platform.slug === selectedPlatform?.slug ? "green" : "gray.500"
						}
						key={platform.id}
					/>
				) : (
					platform.name
				),
			)}
		</HStack>
	);
};

export default PlatformIconList;

import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";
import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiAtari, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons/lib";

interface Props {
	platforms: Platform[];
	selectedPlatform: Platform | null;
}

const PlatformIconList = ({ platforms = [], selectedPlatform }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		ios: MdPhoneIphone,
		android: FaAndroid,
		mac: FaApple,
		linux: FaLinux,
		nintendo: SiNintendo,
		atari: SiAtari,
		sega: SiSega,
		web: BsGlobe,
	};

	return (
		<HStack marginY={1}>
			{platforms.map((platform) => (
				<Icon
					as={iconMap[platform.slug]}
					color={
						platform.slug === selectedPlatform?.slug ? "green" : "gray.500"
					}
					key={platform.id}
				/>
			))}
		</HStack>
	);
};

export default PlatformIconList;

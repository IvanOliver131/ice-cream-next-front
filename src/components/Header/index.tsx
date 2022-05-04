import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { Darkmode } from "./Darkmode";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";


export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Flex
      as="header"  
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      { !isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} my="2" />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="5"
        >

        </IconButton>
      )}
      <Logo />

      { isWideVersion && (<SearchBox />)}

      <Flex
        align="center"
        ml="auto"
      >
        <Darkmode />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Spacer,
  Square,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { LogoImg } from "../../Assets";

import "./style.css";
interface HeaderProps {
  isLandingScreen?: boolean;
}
const Header: FC<HeaderProps> = ({ isLandingScreen }) => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" bg={"black"} p="2">
      <Box p="2">
        <Flex>
          <Box w="20px" h="5" mr="3">
            <Image objectFit="cover" src={LogoImg} alt="Samuha Logo" />
          </Box>
          <Heading size="md" color={"white"}>
            Samuha
          </Heading>
        </Flex>
      </Box>
      <Spacer />
      {isLandingScreen ? (
        <ButtonGroup gap="2">
          <Button colorScheme="yellow" className="sing-in-btn">
            Sign in with Lens
          </Button>
          <Button>
            <Link to="/ConnectWallet"> Connect Wallet</Link>
          </Button>
        </ButtonGroup>
      ) : (
        <Button colorScheme="yellow" className="sing-in-btn">
          0xasdasd..cx
        </Button>
      )}
    </Flex>
    // <Grid className="header-main" templateColumns="repeat(2, 1fr)" gap={4}>
    //   <GridItem colSpan={2} h="10">
    //     <HStack spacing="24px">
    //       <Box w="20px" h="5">
    //         <Image objectFit="cover" src={LogoImg} alt="Samuha Logo" />
    //       </Box>
    //       <Box w="170px" h="10">
    //         <Text color="white" fontSize="22px">
    //           Samuha
    //         </Text>
    //       </Box>
    //     </HStack>
    //   </GridItem>
    //   {isLandingScreen ? (
    //     <GridItem colStart={4} colEnd={6} h="10">
    //       <Button colorScheme="yellow" className="sing-in-btn">
    //         Sign in with Lens
    //       </Button>
    //       <Button>
    //         <Link to="/ConnectWallet"> Connect Wallet</Link>
    //       </Button>
    //     </GridItem>
    //   ) : (
    //     <GridItem colStart={4} colEnd={6} h="10">
    //       <Button colorScheme="yellow" className="sing-in-btn">
    //         Sign in with Lens
    //       </Button>
    //       <Button>
    //         <Link to="/ConnectWallet"> Connect Wallet</Link>
    //       </Button>
    //     </GridItem>
    //   )}
    // </Grid>
  );
};
Header.defaultProps = {
  isLandingScreen: false,
};
export default Header;

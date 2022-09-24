import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Spacer,
  Square,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { LogoImg } from "../../Assets";

import "./style.css";
const Header: FC = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      <GridItem colSpan={2} h="10">
        <HStack spacing="24px">
          <Box w="20px" h="5">
            <Image
              objectFit="cover"
              src={LogoImg}
              alt="Samuha Logo"
            />
          </Box>
          <Box w="170px" h="10">
            <Text color="white" fontSize="22px">
              Samuha
            </Text>
          </Box>
        </HStack>
      </GridItem>
      <GridItem colStart={4} colEnd={6} h="10">
        <Button colorScheme="yellow" className="sing-in-btn">
          Sign in with Lens
        </Button>
        <Button>Connect Wallet</Button>
      </GridItem>
    </Grid>
  );
};

export default Header;

import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  CloseButton,
  Divider,
  Flex,
  Grid,  
  Spacer,  
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { Ellipse_Item } from "../../Assets";
import Header from "../Header/Header";

import "./style.css";
const ConnectWallet: FC = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <Grid>
      <Header isLandingScreen={false} />
      <Center mt={50} color="white" w={"100%"}>
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          w={1000}
          p="5"
        >
          <Stack spacing={3}>
            <Flex>
              <Text pt="5" fontSize="lg" color={"black"}>
                Join communities
              </Text>
              <Spacer />
              <CloseButton color={"black"} size="md" />
            </Flex>
            <Text pt="1px" fontSize="sm" color={"black"}>
              Your Holdings
            </Text>
          </Stack>
          <Tabs isFitted variant="unstyled" mt="5">
            <TabList mb="1em">
              <Tab
                borderRadius={"4"}
                bgColor={"#E9E9E9"}
                color="black"
                _selected={{ color: "white", bg: "black" }}
                p="10px"
              >
                Tokens
              </Tab>
              <Tab
                borderRadius={"4"}
                bgColor={"#E9E9E9"}
                color="black"
                _selected={{ color: "white", bg: "black" }}
                p="10px"
              >
                NFTs
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {["BTC", "ETH", "MATIC", "BTC", "BTC"].map((item, index) => (
                  <Box
                    p="10px"
                    color="white"
                    className="token-items"
                    key={index}
                  >
                    <Flex color={"black"}>
                      <Avatar mt="1.5" size='sm' src={Ellipse_Item}/>
                      <Box ml="3">
                        <Text fontWeight="bold">
                          {item}                          
                        </Text>                        
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Center>
    </Grid>
  );
};

export default ConnectWallet;

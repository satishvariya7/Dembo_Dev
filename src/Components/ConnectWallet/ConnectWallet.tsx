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
import { Link } from "react-router-dom";
import { LogoImg } from "../../Assets";
import Header from "../Header/Header";

import "./style.css";
const ConnectWallet: FC = () => {
  return <Grid>
    <Header isLandingScreen={false}/>
  </Grid>;
};

export default ConnectWallet;

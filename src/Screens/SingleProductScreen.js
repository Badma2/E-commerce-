import {
  Box,
  Heading,
  HStack,
  Image,
  ScrollView,
  Spacer,
  Text,
  View,
} from "native-base";
import React from "react";
import NumericInput from "react-native-numeric-input";
import Colors from "../color";
import Rating from "../Components/Rating";

function SingleProductScreen() {
  const [value, setValue] = useState(0);
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/4.png")}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          New Adidas shoe form Amazon Shop
        </Heading>
        <Rating value={4} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            $400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          NativeBase Icons was designed to make integration of icons in
          nativebase projects easier. It is unified library which export icons
          and fonts for all the native and web platforms.NativeBase VS Code
          Extensions NativeBase VS Code Extensions are specifical designed to
          quicken your development process using NativeBase 3.0. NativeBase
          snippets are shorthand for commoly used NativeBase components. All
          snippets start with the prefix nb- and are followed by the name of the
          desired component.
        </Text>
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;

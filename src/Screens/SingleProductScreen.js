import { Box, Heading, HStack, Image, ScrollView, View } from "native-base";
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
            iconStyle={{ color: Colors.white}}
            rightButtonBackgroundColor={}
          />
        </HStack>
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;

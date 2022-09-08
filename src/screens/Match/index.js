import React, { useState } from "react";
import { HStack, VStack, Text } from "@react-native-material/core";
import { Dimensions, FlatList, ScrollView,  TextInput } from "react-native"
import { ButtonContained } from "../../components/Button";
import { Input } from "../../components/Input";

const Match = () => {

  const maxPoint = 4000;
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const [inputPoints, setInputPoints] = useState("")
  const [listPlayers, setListPlayers] = useState([
    {
      id: 1,
      name: "Lucas",
      points: [],
    },
    {
      id: 2,
      name: "Anderson",
      points: [],
    },
    {
      id: 3,
      name: "Adrielli",
      points: [],
    },
  ]);

  function handleAddPoints(player) {
    console.log('to aquii')
    listPlayers.map(i => i.id == player.id ? i.points.push(parseInt(inputPoints)) : null)
    setInputPoints("");
  }

  function handleRemovePoints(player) {
    console.log(player);
    listPlayers.map(i => (i.id == player.id && i.points.length > 0) ? i.points.pop() : null)
    setListPlayers(listPlayers);
  }

  const renderPLayer = (item) => {
    return (

      <VStack
        justifyContent="space-evenly"
        alignItems="center"
        width={width}
        height={height * 0.5}
      >
        <VStack flex={1} alignItems="center" justifyContent={"center"}>
          <Text fontSize={32}>{item.name}</Text>
        </VStack>
        <VStack justifyContent="space-evenly" alignItems="center" flex={1}>
          <TextInput
            style={{ width: 150, borderColor: 'black', borderWidth: 1 }}
            onChangeText={value => setInputPoints(value)}
            value={inputPoints}
          />
          <HStack justifyContent='space-evenly' width={width}>

            <ButtonContained onPress={() => handleAddPoints(item)} minW={height * 0.2} title="Adicionar ponto" />
            <ButtonContained onPress={() => handleRemovePoints(item)} minW={height * 0.2} title="Remover ponto" />
          </HStack>

        </VStack>
      </VStack>
    );
  };
  return (
    <VStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      pb={6}
      bg="white"
    >
      <VStack flex={1} justifyContent="center" alignItems="center">
        <HStack justifyContent="space-around" bg="gray.300" width={width} flex={1}>
          <VStack>
            <Text>Pontuação Máxima: {maxPoint}</Text>
            <Text>Pontuação:</Text>

            {listPlayers.map(player => {
              return (
                <Text key={player.id}>{player.name}: {player.points.reduce((a, b) => a + b, 0)} </Text>
              )
            })}
          </VStack>
          <VStack>
            <Text>teste</Text>
          </VStack>
        </HStack>
      </VStack>
      <VStack
        flex={1}
        alignItems="center"
        justifyContent="center"
        borderTopWidth={1}
      >
        <FlatList
          width={width}
          height={height}
          key={(item) => item.id}
          data={listPlayers}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => renderPLayer(item)}
        />
      </VStack>
    </VStack>
  );

}

export default Match



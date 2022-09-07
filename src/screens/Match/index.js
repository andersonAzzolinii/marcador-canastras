// import { FlatList, Heading, HStack, Text, VStack } from "native-base";
// import { useState } from "react";
// import { Dimensions, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
// import { Button } from "../components/Button";
// import { Input } from "../components/Input";
// // import { FlatList } from 'react-native';
import React from "react"
import { Text } from "react-native"
const Match = () => {
  return (<Text>
    TESTE DO GATATA
  </Text>)


}


export default Match
//   // const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
//   const maxPoint = 4000;
//   const width = Dimensions.get("window").width;
//   const height = Dimensions.get("window").height;
//   const [inputPoints, setInputPoints] = useState("")
//   const [listPlayers, setListPlayers] = useState([
//     {
//       id: 1,
//       name: "Lucas",
//       points: [],
//     },
//     {
//       id: 2,
//       name: "Anderson",
//       points: [],
//     },
//     {
//       id: 3,
//       name: "Adrielli",
//       points: [],
//     },
//   ]);

//   function handleAddPoints(player) {
//     listPlayers.map(i => i.id == player.id ? i.points.push(parseInt(inputPoints)) : null)
//     setInputPoints("");
//   }

//   function handleRemovePoints(player) {
//     setListPlayers(listPlayers.map(i => (i.id == player.id && i.points.length > 0) ? i.points.pop() : null))

//   }

//   const renderPLayer = (item) => {
//     return (
//       <ScrollView>

//         <VStack
//           justifyContent="space-evenly"
//           alignItems="center"
//           width={width}
//           height={height * 0.5}
//         >
//           <VStack flex={1} alignItems="center" justifyContent={"center"}>
//             <Text fontSize={32}>{item.name}</Text>
//           </VStack>
//           <VStack justifyContent="space-evenly" alignItems="center" flex={1}>
//             <KeyboardAvoidingView
//               behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>


//               <Input
//                 key={item.id}
//                 textAlign="center"
//                 placeholder="Pontos"
//                 width={width * 0.35}
//                 value={inputPoints}
//                 onChangeText={value => setInputPoints(value)}
//               />
//             </KeyboardAvoidingView>
//             <HStack justifyContent='space-evenly' width={width}>

//               <Button onPress={() => handleAddPoints(item)} minW={height * 0.2} title="Adicionar ponto" />
//               <Button onPress={() => handleRemovePoints(item)} minW={height * 0.2} title="Remover ponto" />
//             </HStack>

//           </VStack>
//         </VStack>
//       </ScrollView>
//     );
//   };

//   return (
//     <VStack
//       flex={1}
//       justifyContent="center"
//       alignItems="center"
//       pb={6}
//       bg="white"
//     >
//       <VStack flex={1} justifyContent="center" alignItems="center">
//         <Heading my={5}>Nome da partida</Heading>
//         <HStack justifyContent="space-around" bg="gray.300" width={width} flex={1}>
//           <VStack>
//             <Text>Pontuação Máxima: {maxPoint}</Text>
//             <Text>Pontuação:</Text>

//             {listPlayers.map(player => {
//               return (
//                 <Text key={player.id}>{player.name}: {player.points.reduce((a, b) => a + b, 0)} </Text>
//               )
//             })}
//           </VStack>
//           <VStack>
//             <Text>teste</Text>
//           </VStack>
//         </HStack>
//       </VStack>
//       <VStack
//         flex={1}
//         alignItems="center"
//         justifyContent="center"
//         borderTopWidth={1}
//       >
//         <FlatList
//           width={width}
//           height={height}
//           key={(item) => item.id}
//           data={listPlayers}
//           horizontal
//           pagingEnabled
//           showsHorizontalScrollIndicator={false}
//           renderItem={({ item }) => renderPLayer(item)}
//         />
//       </VStack>
//     </VStack>
//   );
// }

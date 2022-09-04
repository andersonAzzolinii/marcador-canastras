// import { Box, FlatList, Heading, HStack, Text, VStack } from "native-base";

// export function Card() {
//   const dataItem = [
//     {
//       id: 1,
//       Name: ["tiopatinhas", "mercenario"],
//       timeStamp: "12:03",
//       score: [2000, 4000],
//     },
//     {
//       id: 2,
//       Name: ["alopai", "jogadocaro"],
//       timeStamp: "11:33",
//       score: [3400, 3000],
//     },
//     {
//       id: 3,
//       Name: ["neyjrrrr", "trovador"],
//       timeStamp: "15:44",
//       score: [5000, 4400],
//     },
//     {
//       id: 4,
//       Name: ["tiopatinhas", "mercenario"],
//       timeStamp: "12:03",
//       score: [2000, 4000],
//     },
//     {
//       id: 5,
//       Name: ["alopai", "jogadocaro"],
//       timeStamp: "11:33",
//       score: [3400, 3000],
//     },
//     {
//       id: 6,
//       Name: ["neyjr", "trovador", "bacalhau"],
//       timeStamp: "15:44",
//       score: [5000, 4400],
//     },
//   ];

//   return (
//     <Box>
//       <Heading textAlign="center" fontSize="xl" p="6">
//         Histórico
//       </Heading>
//       <FlatList 
//         mb="12"
//         data={dataItem}
//         renderItem={({ item }) => (
//           <Box bg="gray.100" rounded="lg" px="3" py="3" my="1" mx="1">
//             <Text fontSize="md" color="gray.300">
//               {item.timeStamp}
//             </Text>
            
//             <HStack justifyContent="space-between">
//               <VStack pl="6">
//                 <Text bold color="blueGray.700">{item.Name[0]}</Text>
//                 <Text fontSize="xs">Pontos</Text>
//                 <Text bold fontSize="lg" color="blueGray.500">
//                   {item.score[0]}
//                 </Text>
//               </VStack>

//               <VStack pr="6">
//                 <Text bold color="blueGray.700">{item.Name[1]}</Text>
//                 <Text fontSize="xs">Pontos</Text>
//                 <Text bold fontSize="lg" color="blueGray.500">
//                   {item.score[1]}
//                 </Text>
//               </VStack>
//             </HStack>
//           </Box>
//         )}
//         keyExtractor={(item) => item.id}
//       />
//     </Box>
//   );
// }

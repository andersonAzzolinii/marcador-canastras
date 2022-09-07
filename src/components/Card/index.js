import React from "react"
import { FlatList, Text } from "react-native";
import {VStack, HStack} from 'react-native-flex-layout';
import { Box } from "@react-native-material/core";
import styles from "./styles";

export function Card() {
  const dataItem = [
    {
      id: 1,
      Name: ["tiopatinhas", "mercenario"],
      timeStamp: "12:03",
      score: [2000, 4000],
    },
    {
      id: 2,
      Name: ["alopai", "jogadocaro"],
      timeStamp: "11:33",
      score: [3400, 3000],
    },
    {
      id: 3,
      Name: ["neyjrrrr", "trovador"],
      timeStamp: "15:44",
      score: [5000, 4400],
    },
    {
      id: 4,
      Name: ["tiopatinhas", "mercenario"],
      timeStamp: "12:03",
      score: [2000, 4000],
    },
    {
      id: 5,
      Name: ["alopai", "jogadocaro"],
      timeStamp: "11:33",
      score: [3400, 3000],
    },
    {
      id: 6,
      Name: ["neyjr", "trovador", "bacalhau"],
      timeStamp: "15:44",
      score: [5000, 4400],
    },
  ];

  return (
    <Box>
      <Text>
        Histórico
      </Text>
      <FlatList 
        data={dataItem}
        renderItem={({ item }) => (
          <Box style={styles.cardItem}>
            <Text>
              {item.timeStamp}
            </Text>
            
            <HStack style={styles.cardText}>
              <VStack>
                <Text>{item.Name[0]}</Text>
                <Text >Pontos</Text>
                <Text>
                  {item.score[0]}
                </Text>
              </VStack>

              <VStack>
                <Text >{item.Name[1]}</Text>
                <Text >Pontos</Text>
                <Text>
                  {item.score[1]}
                </Text>
              </VStack>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
}

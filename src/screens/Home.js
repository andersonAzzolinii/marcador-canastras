import { Input } from "../components/Input";
import { useState } from "react";
import { Text } from "react-native"
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Home = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);

  function handleNewGame(value) {
    setShowModal(false)
    navigation.navigate("register", { amount: value });
  }
  function handleHistory() {
    setShowModal(false)
    navigation.navigate("history");
  }

  return (
    <>
      <>
        <Text>
          CU DE APERTA PIROCA
        </Text>
      </>
      {/* <HStack >
        <Modal
          onClose={() => setShowModal(!showModal)}
          isOpen={showModal}
          size="full"
        >
          <Modal.Content flex={1} maxWidth="350" maxH="220" >
            <Modal.CloseButton />
            <Modal.Header alignItems="center">Número de jogadores</Modal.Header>
            <Modal.Body>
              <VStack>
                <HStack>
                  <Button
                    title="2 Jogadores / Duplas"
                    onPress={() => handleNewGame(3)}
                    w="full"
                    mb={2}
                    mt={2}
                  />
                </HStack>
                <HStack>
                  <Button
                    title="3 Jogadores"
                    onPress={() => handleNewGame(4)}
                    w="full"
                  />
                </HStack>
              </VStack>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </HStack>
      <VStack flex='1' justifyContent='center' alignItems='center' px={20}>
        <VStack flex='1' justifyContent='center' alignItems='center'>

          <Logo width={320} height={160} />
        </VStack>
        <VStack flex='1'>
          <Button
            title="Nova partida"
            onPress={() => setShowModal(!showModal)}
            w="full"
            mb={3}
          />
          <Button
            title="Histórico"
            w="full"
            onPress={handleHistory}
          />
        </VStack>
      </VStack> */}
    </>
  )
}

export default Home
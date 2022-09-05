import { Input } from '../components/Input';
// import { Button } from "../components/Button";
import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Button,
} from 'react-native';
// import { Button } from "@react-native-material/core";

const Home = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);

  function handleNewGame(value) {
    setShowModal(false);
    navigation.navigate('register', {amount: value});
  }
  function handleHistory() {
    setShowModal(false);
    navigation.navigate('history');
  }

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

  return (
    <>
      <View>
        <Text>FOKIU BIT</Text>
        <Button title="Nova partida" onPress={() => setShowModal(!showModal)} />
        <Button title="Histórico" onPress={handleHistory} />
      </View>
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!showModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Número de Jogadores:</Text>
            <Button title="2 Jogadores / Duplas" onPress={() => handleNewGame(3)} />
            <Button title="3 Jogadores" onPress={() => handleNewGame(4)} />
          </View>
        </View>
      </Modal>
    </View>

    

      {/* <Modal onClose={() => setShowModal(!showModal)} isOpen={showModal}>
        <Text>Número de jogadores</Text>
        <Button title="2 Jogadores / Duplas" onPress={() => handleNewGame(3)} />
        <Button title="3 Jogadores" onPress={() => handleNewGame(4)} />
      </Modal> */}

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
  );

  
};

export default Home;

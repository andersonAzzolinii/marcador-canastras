import {Input} from '../components/Input';
// import { Button } from "../components/Button";
import React, {useState} from 'react';
import {Modal, Alert, StyleSheet, Text, Pressable, View} from 'react-native';
import {Button, Stack, Divider, Flex, HStack, VStack} from '@react-native-material/core';

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
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

  return (
    <>
    <HStack center>
      <Flex marginTop={50}>
        <View>
          <Text>CARQE COIZA</Text>
          <Stack spacing={6} margin={12}>
            <Button
              title="Nova partida"
              onPress={() => setShowModal(!showModal)}
            />
            <Button title="Histórico" onPress={handleHistory} />
          </Stack>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!showModal);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Stack center spacing={6}>
                  <Text style={styles.modalText}>Número de Jogadores:</Text>
                  <Divider style={{marginTop: 10}} />
                  <Button 
                    color="#FDCAE4"
                    tintColor="white"
                    title="2 Jogadores"
                    onPress={() => handleNewGame(3)}
                  />
                  <Button
                    color="#FDCAE4"
                    tintColor="white"
                    title="3 Jogadores"
                    onPress={() => handleNewGame(4)}
                  />
                </Stack>
              </View>
            </View>
          </Modal>
        </View>
      </Flex>
      </HStack>

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

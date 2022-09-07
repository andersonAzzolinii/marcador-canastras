import React, { useState } from 'react';
import { Modal, Alert, StyleSheet, Text, Pressable, View } from 'react-native';
import {
  Button,
  Stack,
  Divider,
  Flex,
  HStack,
  VStack,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
} from '@react-native-material/core';
import styles from './styles';

const Home = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);

  function handleNewGame(value) {
    setShowModal(false);
    navigation.navigate('match', { amount: value });
  }
  function handleHistory() {
    setShowModal(false);
    navigation.navigate('history');
  }

  return (
    <>
      <HStack center>
        <Flex marginTop={50}>
          <View>
            <Text>CARQE COIZA</Text>
            <Stack spacing={6} margin={12}>
              <Button
                title="Nova partida"
                onPress={() => {
                  console.log('1werwew')
                  setShowModal(true)}}
              />
              <Button title="Histórico" onPress={handleHistory} />
            </Stack>
          </View>
          <View style={styles.centeredView}>

            <Dialog visible={showModal} onDismiss={() => setShowModal(false)}>
              <DialogHeader title="Dialog Header" />
              <DialogContent>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                  eligendi inventore, laboriosam laudantium minima minus nesciunt
                  pariatur sequi.
                </Text>
              </DialogContent>
              <DialogActions>
                <Button
                  title="Cancel"
                  compact
                  variant="text"
                  onPress={() => setVisible(false)}
                />
                <Button
                  title="Ok"
                  compact
                  variant="text"
                  onPress={() => setVisible(false)}
                />
              </DialogActions>
            </Dialog>

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

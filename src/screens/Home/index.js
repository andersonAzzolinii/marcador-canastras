import React, {useState} from 'react';
import {VStack, HStack} from 'react-native-flex-layout';
import {Modal, Alert, StyleSheet, Text, Pressable, View} from 'react-native';
import {
  Button,
  Stack,
  Divider,
  Flex,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
} from '@react-native-material/core';
import styles from './styles';

const Home = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);

  function handleNewGame(value) {
    setShowModal(false);
    navigation.navigate('match', {amount: value});
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
            <Text style={styles.text}>LOGOTIPO</Text>
            <Stack spacing={6} margin={12}>
              <Button
                title="Nova partida"
                onPress={() => {
                  setShowModal(true);
                }}
              />
              <Button title="Histórico" onPress={handleHistory} />
            </Stack>
          </View>
          <View>
            <Dialog visible={showModal} onDismiss={() => setShowModal(false)}>
              <DialogHeader title="Partida" />
              <DialogContent>
                <Text style={styles.text}>
                  Selecione o número de jogadores para iniciar o registro da
                  partida
                </Text>
                <VStack center>
                  <Button
                    style={styles.buttonModal}
                    title="2 Jogadores / Duplas"
                    onPress={() => handleNewGame(3)}
                  />

                  <Button
                    style={styles.buttonModal}
                    title="3 Jogadores"
                    onPress={() => handleNewGame(4)}
                  />
                </VStack>
              </DialogContent>
              <DialogActions>
                <Button
                  title="Cancelar"
                  variant="text"
                  color="red"
                  onPress={() => setShowModal(false)}
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

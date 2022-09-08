import { Input } from "../../components/Input";
// import { Button } from "../components/Button";
import React, { useEffect, useState } from "react";
import { VStack, Pressable, Button } from '@react-native-material/core';
import styles from "./styles";

const Register = ({route, navigation}) =>   {
  const {amount} = route.params;
  const [infoPlayers, setInfoPlayers] = useState([]);
  const [maxScore, setMaxScore] = useState(0);

  // executa a função assim que a renderização estiver disponivel
  useEffect(() => {
    amountInputs();
  }, []);

  function handleChangeText(e, player) {
    // recria a lista com todos os objetos encontrados diferente da expressao utilizada (voltaDoMap.nome !== objeto1.nome)
    // utilizando (voltaDoMap.nome == objeto1.nome), recria a lista somente com o objeto encontrado, ignorando o resto
    // let listFilter = infoPlayers.filter((i) => i.id !== player.id);
    infoPlayers.map(p => {
      p.id == player.id ? (player.name = e) : null;
    });
  }

  function amountInputs() {
    // percorre o for conforme variavel amount, que vem por paramentro da tela incial
    for (let i = 1; i < amount; i++) {
      // seta InfoPlayers para uma nova lista, recebendo prevState (a propria lista antes da proxima alteração), em seguida adiciona um novo objedo a essa lista.
      setInfoPlayers(prevState => [
        ...prevState,
        {
          id: i,
          name: '',
          placeholder: `Jogador ${i}`,
        },
      ]);
    }
  }

  async function handleSubmit() {
    // const realm = await getRealm()
    try {
    } catch (error) {}
  }
  return (
    <>
      <VStack>
        {
          // percore infoPlayers, em cada volta renderiza um input, até acabar as voltas "player" é o objeto da vez no loop
          infoPlayers.map(player => {
            var i = player.id;
            return (
              <Input style={styles.defaultInput}
              placeholder={`Jogador ${i}`}
              />
            );
          })
        }
        <Button
          title="Criar partida"
          onPress={() => navigation.replace('match')}
        />
      </VStack>
    </>
  );
}

export default Register;
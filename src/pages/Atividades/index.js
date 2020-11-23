import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, TouchableOpacity } from "react-native";

import api from "../../services/api";

import logoImg from "../../assets/logo.png";

import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";

export default function Atividades() {
  const [atividades, setAtividades] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDetalhe(atividade) {
    navigation.navigate("Detalhe", { atividade });
  }

  function navigateBack() {
    navigation.goBack();
  }

  async function loadAtividades() {
    /*if (loading) {
      return;
    }*/

    if (total > 0 && atividades.length == total) {
      return;
    }

    setLoading(true);

    const response = await api.get("Atividades", {
      params: { page },
    });

    alert(response.data)

    setAtividades([...atividades, response.data]);
    setTotal(response.headers["x-total-count"]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadAtividades();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#043f5f" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Fale com um profissional da saúde!</Text>
      <Text style={styles.description}>Selecione o contato desejado.</Text>

      <FlatList
        data={atividades}
        style={styles.atividadeList}
        keyExtractor={(atividade) => String(atividade.id)}
        //showsVerticalScrollIndicator={false}
        onEndReached={loadAtividades}
        onEndReachedThreshold={0.2}
        renderItem={({ item: atividade }) => (
          <View style={styles.atividade}>
            <Text style={styles.atividadeProperty}>NOME:</Text>
            <Text style={styles.atividadeValue}>{atividade.nome}</Text>

            <Text style={styles.atividadeProperty}>USUÁRIO:</Text>
            <Text style={styles.atividadeValue}>{atividade.titulo}</Text>

            <Text style={styles.atividadeProperty}>ATUAÇÃO:</Text>
            <Text style={styles.atividadeValue}>
              {atividade.cargo} em {atividade.area}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetalhe(atividade)}
            >
              <Text style={styles.detailsButtonText}>Selecionar opção</Text>
              <Feather name="arrow-right" size={16} color="#043f5f" />
            </TouchableOpacity>
          </View>
        )}
      />

    </View>
  );
}

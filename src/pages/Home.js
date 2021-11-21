import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import New from '../components/New';
import House from '../components/House';
import Recommended from '../components/Recommended';

export default function Home() {
 const navigation = useNavigation();

 return (
   <ScrollView 
   showsVerticalScrollIndicator={false}
   style={{backgroundColor: '#FFF' }}
  >
    
    <View style={styles.header}>
      <View style={styles.inputArea}>
        <Feather name="search" size={24} color="black" />
        <TextInput
        placeholder="Ex: Casas Guaxinin"
        style={styles.input}
        />
      </View>
    </View>

    <View style={styles.contentNew}>
      <Text style={styles.title}>Novidades</Text>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
      <New
       cover={require('../assets/house1.jpg')} 
       name="Mundo Country"
       description="Viva a vida de cowboy ou cowgirl, descubra a natureza e seus belos animais."
       onPress={() => navigation.navigate('detail') }
      />

      <New
       cover={require('../assets/house2.jpg')} 
       name="Luxury Resort"
       description="Para você que deseja luxo, segurança e conforto."
       onPress={() => {}}
      />

      <New
       cover={require('../assets/house3.jpg')} 
       name="Vintage Life"
       description="Uma vida classica, redescubra o passado no presente."
       onPress={() => {}}
      />

    </ScrollView>

    <View style={{ flexDirection: 'row', marginBottom:10, alignItems: 'center' }}>
      <Text style={[styles.title, { marginTop: 20 } ]}>Próximo de você</Text>
    </View>  

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
      <House
      cover={require('../assets/house4.jpg')}
      />
      <House
      cover={require('../assets/house5.jpg')}
      />
      <House
      cover={require('../assets/house6.jpg')}
      />
    </ScrollView>

    <Text style={[styles.title, { marginTop: 20 } ]}>
      Promoções
    </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15 }}>
      <Recommended
        cover={require('../assets/house1.jpg')}
        house="Fazendas e Ranchos"
        offer="25%"
      />
      <Recommended
        cover={require('../assets/house4.jpg')}
        house="Residencias de Luxo"
        offer="15%"
      />
      <Recommended
        cover={require('../assets/house6.jpg')}
        house="Vintage/Classic"
        offer="10%"
      />
    </ScrollView>
   
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  header:{
   paddingHorizontal: 15,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   width: '100%',
   marginVertical: 20, 
  },
  inputArea:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor:  '#FFF',
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  input:{
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 10,
    fontSize: 13,
    width: '90%'
  },
  contentNew:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  title:{
    paddingHorizontal: 15,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#4f4a4a'
  }
});
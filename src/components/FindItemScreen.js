import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from  'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from  'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-web';

export default function FindItemScreen() {
    const data = [
        
    ]
    return (
        <View style = {styles.container}>
            <View style = {styles.head}>
                <Ionicons name='arrow-back' size={25} color={'white'} style={{left:'17px'}}/>

                <View style={{backgroundColor:'white', width:'200px', height:'30px', flexDirection:'row', paddingLeft:'5px', marginLeft:'30px', alignItems:'center'}}>

                    <Ionicons name='search' size={25}/>

                    <TextInput
                        editable
                        style={{
                            width:'200px',
                            height:'30px',
                            backgroundColor:'white',
                            color:'#7D5B5B',
                            paddingLeft:'40px',
                            flex:1,
                            marginLeft:'-30px'
                            }}
                        placeholder = 'Dây cáp USB'
                        
                    />

                <MaterialCommunityIcons name='cart-check' size={25} color={'white'} style={{left:'30px'}}/>

                <MaterialCommunityIcons name='dots-horizontal' size={25} color={'white'} style={{left:'60px'}}/>


                </View>
                

            </View>

            <View style={styles.mid}>


            </View>

            <View style = {styles.end}>
                <Icon name="bars" size={30} style={{left:'30px'}}/>                
                <Octicons name='home' size={30} style={{left:'150px'}}/>
                <Fontisto name='arrow-return-left'size={30} style={{left:'280px'}}/>

            </View>

        </View>
        
    );
  }
  
  const styles = StyleSheet.create({
    container:{
        flex: 1
    },

    head:{
        width:'100%',
        height: '42px',
        backgroundColor:'#1BA9FF',
        flexDirection: 'row',
        alignItems:'center'
    },

    mid:{
        width: '100%',
        height:'auto',
    },

    end:{
        width:'100%',
        height: '50px',
        backgroundColor:'#1BA9FF',
        flexDirection: 'row',
        position: 'fixed',
        bottom: '0px',
        alignItems:'center',
    },

  });
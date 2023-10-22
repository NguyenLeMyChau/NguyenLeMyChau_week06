import { StyleSheet, Text, View, FlatList, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from  'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from  'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-web';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default function FindItemScreen() {
    const data = [
        {
            id: 1,
            title:'Cáp chuyển từ Cổng USB sang PS2...',
            startingValue: 4.5,
            comment: 15,
            price:'69.900 đ',
            promotion: -39,
            imgUrl: require('/src/images/giacchuyen 1.png')
        },
        {
            id: 2,
            title:'Cáp chuyển từ Cổng USB sang PS2...',
            startingValue: 3,
            comment: 21,
            price:'79.900 đ',
            promotion: -50,
            imgUrl: require('/src/images/daynguon 1.png')
        },
        {
            id: 3,
            title:'Cáp chuyển từ Cổng USB sang PS2...',
            startingValue: 4,
            comment: 35,
            price:'89.900 đ',
            promotion: -60,
            imgUrl: require('/src/images/dauchuyendoipsps2 1.png')
        },
        {
            id: 4,
            title:'Cáp chuyển từ Cổng USB sang PS2...',
            startingValue: 3.5,
            comment: 62,
            price:'69.900 đ',
            promotion: -15,
            imgUrl: require('/src/images/dauchuyendoi 1.png')
        },
        {
            id: 5,
            title:'Cáp chuyển từ Cổng USB sang PS2...',
            startingValue: 3.4,
            comment: 24,
            price:'100.000 đ',
            promotion: -39,
            imgUrl: require('/src/images/carbusbtops2 1.png')
        },
        {
            id: 6,
            title:'Cáp chuyển từ Cổng USB sang PS2...',
            startingValue: 5,
            comment: 14,
            price:'69.900 đ',
            promotion: -20,
            imgUrl: require('/src/images/daucam 1.png')
        },
        {
            id: 7,
            title:'Cáp chuyển từ Cổng USB sang PS2...',
            startingValue: 3.5,
            comment: 62,
            price:'69.900 đ',
            promotion: -15,
            imgUrl: require('/src/images/dauchuyendoi 1.png')
        },
        {
            id: 8,
            title:'Cáp chuyển từ Cổng USB sang PS2...',
            startingValue: 3.4,
            comment: 24,
            price:'100.000 đ',
            promotion: -39,
            imgUrl: require('/src/images/carbusbtops2 1.png')
        },
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
                <SafeAreaView>
                
                    <FlatList
                        data={data}
                        numColumns={2}
                        renderItem={({item}) => (
                            <View style={styles.item}>
                                <Image
                                    source = {{uri:item.imgUrl}}
                                    style = {{width:'155px', height:'90px'}}
                                    resizeMode='contain'
                                />

                                <View style={{paddingLeft:'10px', marginTop:'5px', flexDirection:'column'}}>
                                    <Text style={{width:'120px', height:'35px', fontSize:'13px', fontWeight:'500', marginTop:'5px'}}>{item.title}</Text>

                                    <View style={{flexDirection:'row', marginTop:'5px'}}>
                                        <AirbnbRating
                                            showRating={false}
                                            isDisabled={true}
                                            size={15}
                                            defaultRating={item.startingValue}
                                            ratingContainerStyle = {{justifyContent:'space-between', alignSelf:'flex-start', left:'-5px'}}
                                        />

                                        <Text>({item.comment})</Text>
                                    </View>

                                    <View style={{flexDirection:'row', marginTop:'5px'}}>
                                        <Text style={{fontWeight:'bold'}}>{item.price}</Text>
                                        <Text style={{marginLeft:'25px', color:'#969DAA'}}>{item.promotion}%</Text>


                                    </View>

                                    

                                </View>


                            </View>


                        )}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{marginBottom: 45}}
                    />
                </SafeAreaView>

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
        bottom: 0,
        alignItems:'center',
    },

    item: {
        width: '200px',
        height:'auto',
        padding:'15px',
      },

  });
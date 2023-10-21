import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeIcon from 'react-native-vector-icons/Octicons';
import Left from 'react-native-vector-icons/Fontisto';
import Cart from  'react-native-vector-icons/MaterialCommunityIcons'
import Back from  'react-native-vector-icons/Ionicons'

export default function Chat() {
    const data = [
    {
        id: 1,
        title: 'Ca nấu lẩu, nấu mì mini',
        shop: 'Devang',
        imgUrl: require('/src/images/ca_nau_lau.png')
    },

    {
        id: 2,
        title: '1 KG gà bơ tỏi',
        shop: 'LTD Food',
        imgUrl: require('/src/images/ga_bo_toi.png')
    },

    {
        id: 3,
        title: 'Xe cần cẩu đa năng',
        shop: 'Thế giới đồ chơi',
        imgUrl: require('/src/images/xa_can_cau.png')
    },

    {
        id: 4,
        title: 'Đồ chơi dạng mô hình',
        shop: 'Thế giới đồ chơi',
        imgUrl: require('/src/images/do_choi_dang_mo_hinh.png')
    },

    {
        id: 5,
        title: 'Lãnh đạo giản đơn',
        shop: 'Minh Long Book',
        imgUrl: require('/src/images/lanh_dao_gian_don.png')
    },

    {
        id: 6,
        title: 'Hiểu lòng con trẻ',
        shop: 'Minh Long Book',
        imgUrl: require('/src/images/hieu_long_con_tre.png')
    },

    {
        id: 7,
        title: 'Hiểu lòng con trẻ',
        shop: 'Minh Long Book',
        imgUrl: require('/src/images/hieu_long_con_tre.png')
    },

    {
        id: 8,
        title: 'Lãnh đạo giản đơn',
        shop: 'Minh Long Book',
        imgUrl: require('/src/images/lanh_dao_gian_don.png')
    },

]

    return (
        <View style = {styles.container}>
            <View style = {styles.head}>
                <Back name='arrow-back' size={25} color={'white'} style={{left:'17px', top:'6px'}}/>


                <Text style = {styles.txtChat}>Chat</Text>

                <Cart name='cart-check' size={25} color={'white'} style={{left:'260px', top:'6px'}}/>

            </View>

            <Text style = {styles.txtHoi}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chat với shop!</Text>

            <View style = {styles.mid}>
                <SafeAreaView>
                    <FlatList
                        data={data}
                        renderItem={({item}) => (
                            <View style = {styles.item}>
                                <Image
                                    source = {{uri:item.imgUrl}}
                                    style = {{width:'80px', height:'80px'}}
                                    resizeMode='contain'
                                />

                                <View style = {{flexDirection:'column', width:'200px', paddingTop: '5px', left: '10px'}}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={{...styles.title, color:'red', top:'10px'}}>Shop: {item.shop}</Text>
                                </View>

                                <View style={{justifyContent:'center', alignItems:'center'}}>
                                    <TouchableOpacity style={styles.btnChat}>
                                        <Text style = {{fontSize:'20px', color:'white', textAlign:'center', top:'3px'}}>Chat</Text>
                                    </TouchableOpacity>
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
                <HomeIcon name='home' size={30} style={{left:'150px'}}/>
                <Left name='arrow-return-left'size={30} style={{left:'280px'}}/>
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
        flexDirection: 'row'
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

    txtChat:{
        width: '60px',
        height:' 60px',
        top: '5px',
        textAlign:'center',
        left:'140px',
        color: 'white',
        fontSize: '20px'
    },

    txtHoi:{
        width: '294px',
        height: '28.54px',
        left: '31.58px',
        margin:'20px',
        marginTop:'10px'
    },

    btnChat:{
        width: '88px',
        height: '38px',
        backgroundColor: '#F31111',

    },

    item: {
        width: '100%',
        height:'105px',
        flexDirection:'row',
        paddingLeft:'10px',
        paddingRight:'10px',
        paddingTop:'10px',
        borderTopWidth: 0.5,
        borderColor: '#C4C4C4',
      },

      title: {
        fontSize: '15px',
      },

});
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';



export default function Chat() {
    const data = [
    {
        id: 1,
        title: 'Ca nấu lẩu, nấu mì mini',
        shop: 'Devang',
        imgUrl:'/src/images/ca_nau_lau.png'
    },

    {
        id: 2,
        title: '1 KG gà bơ tỏi',
        shop: 'LTD Food',
        imgUrl:'/src/images/ga_bo_toi.png'
    },

    {
        id: 3,
        title: 'Xe cần cẩu đa năng',
        shop: 'Thế giới đồ chơi',
        imgUrl:'/src/images/xa_can_cau.png'
    },

    {
        id: 4,
        title: 'Đồ chơi dạng mô hình',
        shop: 'Thế giới đồ chơi',
        imgUrl:'/src/images/do_choi_dang_mo_hinh.png'
    },

    {
        id: 5,
        title: 'Lãnh đạo giản đơn',
        shop: 'Minh Long Book',
        imgUrl:'/src/images/lanh_dao_gian_don.png'
    },

    {
        id: 6,
        title: 'Hiểu lòng con trẻ',
        shop: 'Minh Long Book',
        imgUrl:'/src/images/hieu_long_con_tre.png'
    },

]

    function Item ({title, shop, imgUrl}) {
        <View style={styles.item}>
            <Image
                    source = {{uri:imgUrl}}
                    style = {{width:'74px', height:'74px'}}
            />
            <View style = {{flexDirection:'column'}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.title}>{shop}</Text>
            </View>

            <TouchableOpacity 
                  style={styles.btnChat}>
                    
                <Text style = {styles.txtChat}>Chat</Text>

            </TouchableOpacity> 
        </View>
    };

    return (
        <View style = {styles.container}>
            <View style = {styles.head}>
                <Image
                    source = {require('/src/images/back.png')}
                    style = {styles.imgBack}
                />


                <Text style = {styles.txtChat}>Chat</Text>

                <Image
                    source = {require('/src/images/cart.png')}
                    style = {styles.imgCart}
                />
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
                                    style = {{width:'74px', height:'74px'}}
                                />
                                <View style = {{flexDirection:'column'}}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.title}>{item.shop}</Text>
                                </View>
                            </View>
                          )}
                        keyExtractor={item => item.id}

                    />

                </SafeAreaView>
            </View>


            <View style = {styles.end}>

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
        backgroundColor: 'yellow'
    },

    end:{
        width:'100%',
        height: '50px',
        backgroundColor:'#1BA9FF',
        flexDirection: 'row',
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
        margin:'10px'
    },

    btnChat:{
        width: '88px',
        height: '38px',
        top: '125px',
        left: '246px',
        backgroundColor: '#F31111'

    },

    imgBack:{
        width: '24px',
        height: '24px',
        top:'6px',
        left: '17px'
    },

    imgCart:{
        width: '24px',
        height: '24px',
        top:'6px',
        left: '260px'
    },

    item: {
        backgroundColor: '#f9c2ff',
        width: '100%',
        height:'80px',
        marginTop: '20px',
        flexDirection:'row'
      },

      title: {
        fontSize: '20px',
      },

});
import { View, Text, StatusBar, Image, useWindowDimensions, StyleSheet, TextInput, Pressable, Alert ,AsyncStorage, ToastAndroid} from 'react-native'
import React, { useState } from 'react'
import gss, { themeColor, spacingColLg,spacingRowLg, borderRadiusLg,fontSizeLg,textColorInverse,themeGreyLight, spacingColSm,themeColorDark } from '../gss'

import logo from '../assets/img/logo.png'
import { userLogin } from '../service'
let eyeClose = require('../assets/img/eye-close.png')
let eyeOpen = require('../assets/img/eye-open.png')


export default function Login({ navigation }) {
    let width = useWindowDimensions().width*0.1
    let height = width

    let [phone,setPhone] = useState('13501234567')
    let [upwd,setUpwd] = useState("123456");
    let [hidePsw,setHidePsw] = useState(true)
    let [btnBgColor,setBtnBgColor] = useState(themeColor)

    let doLogin = async ()=>{
        //1.验证手机号格式是否正确
        if(!/^1[3-9]\d{9}$/.test(phone)){
          Alert.alert("错误","手机号码不正确",[{text:'确定'}])
          return;
        }
        //2.验证密码格式是否正确
        if(upwd.length<6 || upwd.length>18){
          Alert.alert("错误","密码长度必须在6~18位之间",[{text:"确定"}])
          return;
        }
        //3.访问服务器接口,验证登录正确性
        let data = await userLogin(phone,upwd);
        //4.处理登录结果
        if(data.code === 2000){
          //--正确,登录
          //----取出令牌,保存到storage中
          AsyncStorage.setItem('userToken',data.token,()=>{
            //----弹出吐司,提示登录成功
            ToastAndroid.show("登录成功!",ToastAndroid.SHORT)
          });
        }else{
          //--错误,提示
          Alert.alert("错误","登录失败!服务器返回的错误原因:"+data.msg,[{text:"确定"}])
          return;
        }
        //5.跳转到下一个页面
        navigation.navigate("glist")
    }



  return (
    <>
        <StatusBar backgroundColor={themeColor} barStyle={'light-gray'}/>
        <Image resizeMode='contain' source={logo} style={[ss.logo, {width, height}]}/>

        <View style={ss.inputGroup}>
            <TextInput 
                style={[gss.bordered, ss.input]} 
                placeholder='Input phone number'
                value={phone}
                onChangeText={_ => setPhone(_)}
            />
            <Image 
                style={ss.iconLeft} 
                source={require('../assets/img/cellphone.png')} 
            />
            <Pressable 
                style={ss.iconRight} 
                onPress={()=>{setPhone('')}} >
            <Image 
                style={ss.iconRight} 
                source={require('../assets/img/clear.png')}
            />
            </Pressable>
        </View>

        <View style={[ss.inputGroup,{marginTop:spacingColLg*2}]}>
            <TextInput style={[gss.bordered, ss.input]}
                placeholder='psw'
                secureTextEntry={hidePsw}
                value={upwd}
                onChangeText={_ => setUpwd(_)}
            />
            <Image style={ss.iconLeft} 
                source={require('../assets/img/lock.png')}/>
            <Pressable style={ss.iconRight} onPress={()=>{setHidePsw(!hidePsw)}}>
                <Image style={ss.iconRight}
                    source={hidePsw ? eyeClose : eyeOpen}/>
            </Pressable>
        </View> 



        <Pressable 
            onPress={doLogin}
            onPressIn={()=>{setBtnBgColor(themeColorDark)}} 
            onPressOut={()=>{setBtnBgColor(themeColor)}}>
            <Text style={[ss.btn,{backgroundColor:btnBgColor}]}>Sign In</Text>
        </Pressable>

        <Text style={ss.link}>忘记密码</Text>

    </>

  )
}

let ss = StyleSheet.create(
    {
      logo: {
        marginTop: spacingColLg * 6,
        marginLeft:'auto',
        marginRight:'auto'
      },
      inputGroup:{
        position: 'relative',
        marginTop:spacingColLg * 5,
        marginHorizontal:spacingRowLg * 2,
        justifyContent:'center'//唐星容器中的子元素在主轴方向能上居中对齐
      },
      input: {
        borderColor:themeColor,
        borderRadius:borderRadiusLg,
        paddingHorizontal:spacingRowLg * 3,
        fontSize:fontSizeLg,
      },
      iconLeft:{
        position:'absolute',
        left:8,
        width:35,
        height:35,
      },
      iconRight:{
        position:'absolute',
        right:10,
        width:30,
        height:30,
      },
      btn:{
        marginHorizontal:spacingRowLg*2,
        marginTop:spacingColLg * 4,
        paddingVertical:spacingColLg,
        backgroundColor:themeColor,
        color:textColorInverse,
        borderRadius:borderRadiusLg,
        fontSize:fontSizeLg,
        textAlign:'center',
      },
      link:{
        marginTop:spacingColLg * 3,
        color:themeGreyLight,
        fontSize:fontSizeLg,
        textAlign:'center'
      }
    }
  );
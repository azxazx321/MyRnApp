import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { mallIndex } from '../service'
import Swiper from '../components/Swiper'


export default function GoodsList() {
  let [userInfo, setUserInfo] = useState({})
  let [carousels, setCarousels] = useState({})
  let [goodsTypes,setGoodsTypes] = useState({})

  
  useEffect(() => {
    (async () => {
      let data = await mallIndex()
      setUserInfo(data.userInfo)
      setCarousels(data.carousels)
      setGoodsTypes(data.goodsTypes)
    })()
  },[])

  return (
    <View>
    <Text>goodslist</Text>
    <Swiper data={carousels}/>
    <Text>{JSON.stringify(userInfo)}</Text>
    <Text>{JSON.stringify(goodsTypes)}</Text>
    <Text>{JSON.stringify(carousels)}</Text>
    </View>
  )
}

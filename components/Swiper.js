import React, { useEffect, useRef, useState } from 'react'
import { FlatList, View, useWindowDimensions, Text, Image } from 'react-native'
import { base } from '../service'

export default function Swiper({data}) {

    let windowWidth = useWindowDimensions().width

    let carouseList = useRef()

    let [cur,setCur] = useState(0)

    useEffect(()=>{
        if(data.length>1){
          setInterval(()=>{
            console.log("cur:",cur)
            let i = (cur >= data.length-1 ? 0 : cur+1);
            carouseList.current.scrollToIndex({index:i})
            console.log("i:",i)
            setCur(i)
          },2000)
        }
      },[data,cur])

    let _renderItem = ({item,index}) => {
        return (
            <Image
                style={{width: windowWidth, height: (180*windowWidth)/600}}
                source={{uri:base+item.pic}}
            />
        )
    }

    return (
        <View>
            
            <Text>{cur}</Text>
            <FlatList
                data={data}
                renderItem={_renderItem}
                horizontal={true}
                pagingEnabled={true}
                ref={carouseList}
            />
        </View>
        
    )
}

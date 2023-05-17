/** 接口访问文件 */
import {AsyncStorage} from 'react-native'

export let base = 'https://web.codeboy.com/zhsqapi/'

/**
  接口地址：user/login
  请求方式：POST
  请求主体格式：application/json   
  请求数据说明：
    名称	必填	类型	  说明
    phone	是	  string	手机号
    pwd	  是	  string	密码
 */
export let userLogin = async (phone,pwd)=>{
  //1.准备地址
  let url = base + 'user/login';
  //2.准备参数
  let options = {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({phone,pwd})
  }
  //3.发起请求
  let res = await fetch(url,options)
  //4.获取数据
  let data = await res.json()
  //5.返回数据
  return data;
}

export let mallIndex = async () => {
  let url = base + 'mall/index'
  let token = await AsyncStorage.getItem("userToken")

  let options = {
    headers: {token}
  }

  let res = await fetch(url, options)
  let data = await res.json()

  return data
}
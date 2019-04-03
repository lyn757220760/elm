import axios from 'axios'

// 根据经纬度获取地址信息
export function getAddress (latitude, longitude) {
  let url = `https://elm.cangdu.org/v2/pois/${latitude},${longitude}`
  // let url = `https://restapi.ele.me/bgs/poi/reverse_geo_coding?latitude=${latitude}&longitude=${longitude}`
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

// 使用百度地图api获取定位信息
/* eslint-disable */
export function fetchLocation () {
  let options = {
    enableHighAccuracy: true
  }
  var geolocation = new BMap.Geolocation()
  return new Promise((resolve, reject) => {
    geolocation.getCurrentPosition((pos) => {
      resolve(pos)
    }, (err) => {
      reject(err)
    })
  }, options)
}

// 根据关键字搜索地址
export function searchAddress (keyword) {
  let url = 'https://elm.cangdu.org/v1/pois'
  let params = {keyword}
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

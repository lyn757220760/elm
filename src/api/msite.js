import axios from 'axios'

// 获取天气预报
export function getWeather (latitude, longitude) {
  let url = 'https://restapi.ele.me/bgs/weather/current'
  let params = {latitude, longitude}
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

// 获取热搜关键字
export function getHotSearch (latitude, longitude) {
  let url = 'https://restapi.ele.me/shopping/v3/hot_search_words'
  let params = {latitude, longitude}
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

// 获取食品导航入口
export function getFoodEntries () {
  let url = 'https://elm.cangdu.org/v2/index_entry'
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

// 获取推荐商家
export function getRestaurants (latitude, longitude, offset, limit) {
  let url = 'https://elm.cangdu.org/shopping/restaurants'
  let params = {latitude, longitude, offset, limit}
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

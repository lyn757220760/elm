import axios from 'axios'

// 获取商品列表
export function getGoods (id) {
  let url = 'https://elm.cangdu.org/shopping/v2/menu'
  let params = {restaurant_id: id}
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

// 获取评价
export function getRatings (id, offset = 0, limit = 10) {
  let url = `https://elm.cangdu.org/ugc/v2/restaurants/${id}/ratings`
  let params = {offset, limit}
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

// 获取商家信息
export function getRestaurant (id) {
  let url = `https://elm.cangdu.org/shopping/restaurant/${id}`
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

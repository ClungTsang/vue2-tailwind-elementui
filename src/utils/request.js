import http from './http'

export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    http.get(url, {
      params: params
    })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    http.post(url, data)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const put = (url, data) => {
  return new Promise((resolve, reject) => {
    http.put(url, data)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}


// export const delete =  (url, params) => {
//   return new Promise((resolve, reject) => {
//     http.delete(url, params)
//       .then((response) => {
//         resolve(response.data)
//       })
//       .catch((error) => {
//         reject(error)
//       })
//   })
// }

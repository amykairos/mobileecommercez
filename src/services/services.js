export const getProduct = (id = '') => {
  const path = id.length ? `/api/product/${id}` : '/api/product'
  const response = Api(path, { method: 'GET' }, {})
  return response
}

export const addProduct = (param) => {
  const path = '/api/cart/'
  const response = Api(path, { method: 'POST' }, param)
  return response
}

const parseUrl = async (path) => {
  const baseUrl = 'https://front-test-api.herokuapp.com'
  const url = `${baseUrl}${path}`
  return url
}

const Api = async (path, { method = 'GET' } = {}, param) => {
  const url = await parseUrl(path)
  let data
  let response
  if (Object.keys(param).length) {
    const a = JSON.stringify(param)
    const headers = {
      'Content-Type': 'application/json'
    }
    // eslint-disable-next-line no-undef
    console.log(method, 'para Adri')
    response = await fetch(url, { method, body: a, headers: headers })
    data = response.json()
    return data
  }
  response = await fetch(url, { method })
  data = response.json()
  return data
}

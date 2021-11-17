export const getProduct = (param = '') => {
  const path = param.length ? `/api/product/${param}` : '/api/product'
  const method = { method: 'GET' }
  const response = Api(path, method)
  return response
}

const parseUrl = async (param) => {
  const baseUrl = 'https://front-test-api.herokuapp.com'
  const url = `${baseUrl}${param}`
  return url
}

const Api = async (path, { method = 'GET' } = {}) => {
  const url = await parseUrl(path)
  const response = await fetch(url, {
    method
  })
  const data = response.json()
  return data
}

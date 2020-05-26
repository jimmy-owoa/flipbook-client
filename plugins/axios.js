export default function ({ $axios, app, store }) {
  $axios.onRequest(config => {
    config.baseURL = 'localhost:3000/api/v1';
  })
}
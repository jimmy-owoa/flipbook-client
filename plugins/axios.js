export default function ({ $axios, app, store }) {
  $axios.onRequest(config => {
    config.baseURL = 'https://flip-book-api.herokuapp.com/api/v1/';
  })
}
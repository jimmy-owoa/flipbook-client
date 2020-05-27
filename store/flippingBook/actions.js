export async function fetchFlippingBooks({ commit }) {
  try {
    const { data } = await this.$axios.get('flipping_books');
    commit("setFlippingBooks", data);
  } catch (e) {
    commit("FlippingBooksError", e.message);
  } finally {}
}

export async function fetchFlippingBook({ commit }, slug) {
  try {
    const { data } = await this.$axios(`posts_video/post?slug=${slug}`);
    commit("setFlippingBookPost", data);
  } catch (e) {
    commit("FlippingBooksError", e.message);
  } finally {}
}
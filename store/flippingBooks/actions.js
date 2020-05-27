export async function fetchFlippingBooks({ commit }) {
  try {
    const { data } = await this.$axios.get('flipping_books');
    commit("setFlippingBooks", data);
  } catch (e) {
    commit("FlippingBooksError", e.message);
  } finally {}
}

export async function fetchFlippingBook({ commit }, id) {
  try {
    const { data } = await this.$axios.get(`flipping_books/${id}`);
    commit("setFlippingBook", data);
  } catch (e) {
    commit("FlippingBooksError", e.message);
  } finally {}
}
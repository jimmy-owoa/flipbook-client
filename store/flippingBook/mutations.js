export function setFlippingBooks (state, flippingBooks) {
  state.flippingBooks = flippingBooks;
}

export function setFlippingBook (state, flippingBook) {
  state.selectedFlippingBook = flippingBook;
}

export function flippingBooksError(state, errorMessage){
  state.error = true;
  state.errorMessage = errorMessage;
  state.flippingBooks = [];
}
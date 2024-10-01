
const URI = `${import.meta.env.VITE_API_URL}/api/books`;


export async function  getBooks() {
    const res = await fetch(URI);
    const books = await res.json();
    return books;
}

export async function  postBooks(book) {
    const res = await fetch(URI, {
        method: "POST",
        body: book
    });
    const data = await res.json();
    return data;
}

export async function deleteBooks(bookId) {
    const res = await fetch(`${URI}/${bookId}`, {
        method: 'DELETE'
    });
    const data = await res.json();

}

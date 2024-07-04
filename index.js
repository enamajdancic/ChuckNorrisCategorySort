function search() {
    const jokeElement = document.getElementById('joke');
    const category = document.getElementById('category').value;
    let apiUrl = "https://api.chucknorris.io/jokes/random";

    if (category) {
        apiUrl += `?category=${category}`;
    }

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const joke = data.value;
            jokeElement.textContent = joke;
            console.log(joke);
        })
        .catch((error) => {
            console.error("Error: ", error);
        
        });
}
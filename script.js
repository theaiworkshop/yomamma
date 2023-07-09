document.getElementById('generateJoke').addEventListener('click', function() {
    var jokes = [
        "Yo Mama's so stupid, she put two quarters in her ears and thought she was listening to 50 Cent.",
        "Yo Mama's so fat, when she goes camping, the bears hide their food.",
        "Yo Mama's so old, she knew Burger King when he was a prince.",
        "Yo Mama's so short, she can do backflips under the bed."
        // add more jokes here
    ];

    var joke = jokes[Math.floor(Math.random() * jokes.length)];

    document.getElementById('joke').innerText = joke;
});

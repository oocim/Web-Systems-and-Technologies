document.getElementById("textInput").addEventListener("input", function () {
    const text = this.value.trim();

    const words = text.split(/\s+/).filter(word => word.length > 0);
    document.getElementById("wordcount").textContent = `Words: ${words.length}`;

    const sentences = text.split(/[.!?]\s/).filter(sentence => sentence.trim().length > 0);
    document.getElementById("sentenceCount").textContent = `Sentences: ${sentences.length}`;
});

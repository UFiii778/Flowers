onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Happy Birthday').split('');
    const smallTextContent = ('@Kanaeyya').split(''); // Tulis kata-kata kecilmu di sini
    
    const titleElement = document.getElementById('title');
    const smallTextElement = document.getElementById('small-text');
    
    let index = 0;
    let smallIndex = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      } else {
        // Setelah 'I LOVE U' selesai, ketik teks kecilnya
        appendSmallText();
      }
    }

    function appendSmallText() {
      if (smallIndex < smallTextContent.length) {
        smallTextElement.innerHTML += smallTextContent[smallIndex];
        smallIndex++;
        setTimeout(appendSmallText, 100);
      } else {
        // Memberikan class 'show' untuk memicu animasi CSS
        document.getElementById('btn-left').classList.add('show');
        document.getElementById('btn-right').classList.add('show');
      }
    }

    appendTitle();
    clearTimeout(c);
  }, 1000);
};
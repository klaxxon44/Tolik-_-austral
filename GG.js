function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
a = document.getElementById('myElement')
a.addEventListener("click",function(){
    this.style.backgroundColor = getRandomColor();
})
// GG


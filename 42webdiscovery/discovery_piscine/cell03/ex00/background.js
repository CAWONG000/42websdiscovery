let changeBtn = document.querySelector("button");

changeBtn.addEventListener("click", () => 
{
    document.body.style.backgroundColor = GRC();
    document.h1.style.randomColor
});

function GRC()
{
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

const myDiv = document.querySelector("div")

for(let i = 1; i < 501; i++)
{
    const myImage = document.createElement("img")
    
    // To any HTML tag, if we want to create an attribute, we need to use setAttribute()

    myImage.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)
    // myImage.classList.add("hello")
    // myImage.classList.remove("---")
    // myImage.classList.replace("---", "---")
    myDiv.append(myImage)
   
}
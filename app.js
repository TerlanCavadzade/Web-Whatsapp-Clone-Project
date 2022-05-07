let qrup = document.querySelectorAll("#group")
let sekil = document.querySelector("#topsekil")
let ad = document.querySelector("#ad")
let last = document.querySelector("#me")
for (let message of qrup) {
    message.addEventListener("click", function () {
        let source = this.children[0].firstElementChild.attributes.src.value
        let name = `${this.children[1].childNodes[1].innerHTML} <div id="inform">Click For More Information</div>`
        sekil.src = source
        ad.innerHTML = name
        for (q of this.parentNode.children) {
            if (q.classList[0] = "active") {
                q.classList.remove("active")
                q.children[1].classList.remove("active")
                q.children[2].classList.remove("active")
            }
        }
        this.classList.add("active")
        this.children[1].classList.add("active")
        this.classList.remove("notread")
        this.children[1].classList.remove("notread")
        this.children[2].classList.remove("notread")
    })
}

let mesaj = [
    {
        name: "me",
        message: "salam"
    },
    {
        name: "him",
        message: "salam"
    },
]
margin = 10
//for (let msg of mesaj.reverse()) {
if (msg.name === "me") {
    var node = document.createElement("div");
    node.classList.add("me")
    node.setAttribute("id", "msgcontainer");
    margin = margin + 10
    node.style.marginTop = `${margin}%`
    var para = document.createElement("p");
    para.classList.add("message")
    para.setAttribute("id", "me");
    var textnode = document.createTextNode(msg.message);
    para.appendChild(textnode);
    node.appendChild(para);
    document.getElementById("messagebox").appendChild(node);
}
else {
    var node = document.createElement("div");
    node.classList.add("him")
    node.setAttribute("id", "msgcontainer");
    margin = margin + 15
    node.style.marginTop = `${margin}%`
    var para = document.createElement("p");
    para.classList.add("message")
    para.setAttribute("id", "him");
    var textnode = document.createTextNode(msg.message);
    para.appendChild(textnode);
    node.appendChild(para);
    document.getElementById("messagebox").appendChild(node);
}
document.querySelector("#searchbutton").addEventListener("click", function () {
    document.querySelector("#searchinput").focus()
})

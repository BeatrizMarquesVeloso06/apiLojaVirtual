function displeyCartItems() {
    let total = 0
    document.querySelector("tbody").innerHTML = ""
    
    document.querySelector(".checkout").innerHTML = ""

    const cart= JSON.parse(localStorage.getItem("cart"))
    if(cart !== null){
        cart.forEach(product => {
            total += product.price
            const tr = document.createElement("tr")
            tr.innerHTML = `
            <td> ${product.title}</td>
            <td> ${product.price}</td>
            <td class="action"></td>
            `
            const btnRemover = document.createElement("button")
            btnRemover.textContent = "Remover"
            btnRemover.addEventListener("click", () => removeCart(product.id))
            tr.querySelector(".action").append(btnRemover)
            document.querySelector("tbody").append(tr)
        });
        if(total > 0) {
            document.querySelector(".checkout").innerHTML += `<p>total: ${total}</p>`
            const btnCheckout = document.createElement("button")
            btnCheckout.classList = "btn btn-primary"
            btnCheckout.textContent = "Encerrar compra"
            btnCheckout.addEventListener("click", () => checkout())
            document.querySelector(".checkout").append(btnCheckout)
        }
    
    }
}
function checkout() {
    localStorage.clear()
    alert("Pedido finalizado")
    displeyCartItems()
}
function removeCart(id) {
    const cart = JSON.parse(localStorage.getItem("cart"))
    const newCart = cart.filter(product => {return id !== product.id})
    localStorage.setItem("cart", JSON.stringify(newCart))
    alert("Produto removido")
    displeyCartItems()
}
displeyCartItems()
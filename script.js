fetch ("https://api.mercadolibre.com/sites/MLB/search?q=notebooks&limit=13").then(response=>response.json()).then(data => {
    data.results.forEach(product=> {
        const col = document.createElement("div")
        col.classList = "col-3"
        col.innerHTML = `
         <img src="${product.thumbnail}" alt="${product.title}">
         <h2>${product.title}</h2>
         <p>${product.price}</p>
        `
        const btn = document.createElement("a")
        btn.href = "#"
        btn.classList = "btn btn-primary"
        btn.textContent = "Comprar"
        btn.addEventListener("click", e => {
            e.preventDefault()
            addToCart(product)
        })
        col.append(btn)

        document.querySelector(".row").append(col) 
    
})    
})
        function addToCart(product) {
            let cart = JSON.parse(localStorage.getItem("cart"))
            if(cart === null) {
                cart = []
            } 
            cart.push(product)
            localStorage.setItem("cart", JSON.stringify(cart))
            alert("Produto adicionado")

        }
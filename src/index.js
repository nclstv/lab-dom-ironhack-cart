// ITERATION 1

function updateSubtotal(product) {

  const $price = product.querySelector('.price span')
  const $quantity = product.querySelector('.quantity input')
  const $subtotal = product.querySelector('.subtotal')

  const price = Number($price.innerText)
  const quantity = Number($quantity.value)
  const subtotal = price * quantity

  $subtotal.innerHTML = `$${subtotal}`

  return subtotal

}

function calculateAll() {

  const $products = document.getElementsByClassName('product')
  const $total = document.querySelector('#total-value span')

  const products = [...$products]
  let sum = 0;

  products.forEach(element => sum += updateSubtotal(element));

  $total.innerHTML = sum
  
}

function removeProduct(event) {

  const target = event.currentTarget;
  target.parentNode.parentNode.remove()

  calculateAll()

}

function createProduct() {

  const $product = document.querySelectorAll('.create-product input')
  const product = [...$product]

  let $name = product[0]
  let $price = product[1]


  if (!$name.value || !$price.value) {
    alert('Error - You should provide a name and a price in order to add a new product')
  }
  else {

    const tbody = document.querySelector('tbody')
    const tr = document.createElement('tr')

    const newProduct = tbody.appendChild(tr)
    newProduct.className = 'product'

    const name = document.createElement('td')
    const nameSpan = document.createElement('span')
    newProduct.appendChild(name)
    name.appendChild(nameSpan)
    name.className = 'name'
    nameSpan.innerHTML = $name.value
      
    const price = document.createElement('td')
    const priceSpan = document.createElement('span')
    newProduct.appendChild(price)
    price.innerHTML = '$'
    price.className = 'price'
    price.appendChild(priceSpan)
    priceSpan.innerHTML = $price.value

    const quantity = document.createElement('td')
    const quantityInput = document.createElement('input')
    newProduct.appendChild(quantity)
    quantity.appendChild(quantityInput)
    quantity.className = 'quantity'
    quantityInput.type = 'number'
    quantityInput.value = 0
    quantityInput.min = 0
    quantityInput.placeholder = "Quantity"

    const subtotal = document.createElement('td')
    const subtotalSpan = document.createElement('span')
    newProduct.appendChild(subtotal)
    subtotal.innerHTML = '$'
    subtotal.className = 'subtotal'
    subtotal.appendChild(subtotalSpan)
    subtotalSpan.innerHTML = '0'

    const action = document.createElement('td')
    const actionButton = document.createElement('button')
    newProduct.appendChild(action)
    action.appendChild(actionButton)
    action.className = 'action'
    actionButton.className = 'btn btn-remove'
    actionButton.innerHTML = 'Remove'
    
    actionButton.addEventListener('click', (event) => {
      removeProduct(event)
    })

    $name.value = ""
    $price.value = ""


  }

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const products = document.getElementsByClassName('product')
  const productsArray = [...products]

  productsArray.forEach((product) => {

    const remove = product.querySelector('.action button')
    remove.addEventListener('click', (event) => {
      removeProduct(event)
    })

  });

  const createProductButton = document.querySelector('.create-product button')
  createProductButton.addEventListener('click', () => {
    createProduct()
  })
});

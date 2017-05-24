// 3. Create three objects with four properties (one must be an image file path) using object literal notation.
// 5. Add to a method each literal object, that multiplies two numbers and returns the product.

var apple = {
	name: "apple",
	price: 0.6,
	quantity: 30,
	image:"images/apple.jpg",
	cost: function() {
		return this.price * this.quantity
	}
}


var peach = {
	name: "peach",
	price: 1,
	quantity: 40,
	image:"images/peach.jpg",
	cost: function() {
		return this.price * this.quantity
	}
}

var lychee = {
	name: "lychee",
	price: 1.2,
	quantity: 60,
	image:"images/lychee.jpg",
	cost: function() {
		return this.price * this.quantity
	}
}

console.log(apple.cost(), peach.cost(), lychee.cost());



// 4. Create the same three objects, with the same four properties, using a constructor notation.
// 6. Add to the constructor function, create a method that multiplies two numbers and returns the product.

// object constructor
function Fruit(name, price, quantity, image) {
	this.name = name
	this.price = price
	this.quantity = quantity
	this.image = image
	this.cost = function() {
		return (this.price * this.quantity)
	}
}

var apple = new Fruit('apple', 0.6, 30, 'images/apple.jpg')
var peach = new Fruit('peach', 1, 40, 'images/peach.jpg')
var lychee = new Fruit('lychee', 1.2, 60, 'images/lychee.jpg')

// 7. Add each constructor object to an array.
var fruit = [apple, peach, lychee]

// 8. Loop through the array of objects, for each property create an element to add content to.
for (i=0; i < fruit.length; i++) {
	var div  = document.createElement('div')
	var h1 = document.createElement('h1')
	var h2 = document.createElement('h2')
	var p = document.createElement('p')
	var img = document.createElement('img')
	console.log(div, h1, h2, p, img)

// 9.Still in the loop, create text nodes for each piece of content, add those to the elements you created.
  	var h1Text = document.createTextNode(fruit[i].name)
  	var h2Text = document.createTextNode("Price: $ " + fruit[i].price)
  	var pText = document.createTextNode("Quantity Available: " + fruit[i].quantity)
  	console.log(h1Text, h2Text, pText)

  	h1.appendChild(h1Text)
  	h2.appendChild(h2Text)
  	p.appendChild(pText)
  	console.log(h1, h2, p)

  	// 10. Still in the loop, update the source and alt attributes of the image.
  	 img.src = fruit[i].image;
  	 img.alt = fruit[i].name;

// 12. Still in the loop, add the elements to the HTML so a user can view them.
	
 	div.appendChild(img);
  	div.appendChild(h1);
  	div.appendChild(h2);
  	div.appendChild(p);

  document.getElementById("addHere").appendChild(div)

}




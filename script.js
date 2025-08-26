// Part 1: JavaScript Basics

// Variables, Data Types, Conditionals
function checkAge() {
  let age = document.getElementById("ageInput").value; // capture input
  let result = "";

  if (age >= 18) {
    result = "✅ You are an adult.";
  } else if (age > 0) {
    result = "👶 You are under 18.";
  } else {
    result = "❌ Please enter a valid age.";
  }

  document.getElementById("ageResult").textContent = result;
}


// Part 2: Functions

// Function 1: Calculate total with tax
function calculateTotal(price, tax) {
  return price + (price * tax);
}

// Function 2: Call the function and display result
function showTotal() {
  let price = 100;   // Example price
  let tax = 0.15;    // 15% tax
  let total = calculateTotal(price, tax);
  document.getElementById("totalResult").textContent =
    `💰 Total Price (with tax): $${total}`;
}


// Part 3: Loops

// Example 1: Countdown using a for loop
function showCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear previous items

  for (let i = 5; i > 0; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }

  let done = document.createElement("li");
  done.textContent = "🎉 Go!";
  list.appendChild(done);
}

// Example 2: Iterating through an array
let fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange"];
fruits.forEach(fruit => {
  console.log("Fruit:", fruit);
});


// Part 4: DOM Manipulation

// 1. Toggle background color
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// 2. Add new item dynamically
function addItem() {
  let list = document.getElementById("itemList");
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
}

// 3. Change text content on load
document.getElementById("ageResult").textContent = "👋 Enter your age above!";

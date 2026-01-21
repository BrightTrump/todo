const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  // "bad-request://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
console.log(fetchPromise);

fetchPromise
  .then((response) => {
    if (!response) {
      throw new Error(`HTTP Error: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data[0].name, data[0].price, data[0].image, data[0].type);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

console.log("Started request...");

// Example 2
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });

// Example 3 (Async and await)
async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!response) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Failed to fetch: ${error}`);
  }
}
fetchProducts();

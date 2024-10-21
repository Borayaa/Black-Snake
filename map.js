let container = document.getElementById('container');
export const row = 68;
export const column = 33;

// A 2D array to represent the map (empty boxes at first)
let coord = Array.from({ length: column }, () => Array(row).fill('block'));

console.log(coord)


// Proxy handler to detect changes to the 2D map
let handler = {
  set(target, property, value) {
    // Get x, y from the 2D array
    let [x, y] = property.split(',');
    // Update the 2D array value
    target[x][y] = value;

    // Automatically update the corresponding block's class
    let blockIndex = coordToMap(x, y);
    const block = document.getElementsByClassName(`block`)
    block[blockIndex].className = value;

    return true;
  }
};

// Wrap the 2D array in a Proxy
export let map = {
  coord: new Proxy(coord, handler)
};

// Function to map coordinates to a block index
function coordToMap(x, y) {
  // Assuming a simple formula to convert coordinates to an index
  return x - y * 4 + (row * column - row); // example for 50x50 grid
}

// Example usage: setting the player on the map at (23, 23)
map.coord[23][23] = "player"; // This will automatically update the block's class
const block = document.getElementsByClassName(`block`)
console.log(block[coordToMap(23, 23)])
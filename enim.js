function isVertical(direction) {
  return direction === "up" || direction === "down";
}

console.log(isVertical("up")); // true
console.log(isVertical("down")); // true
console.log(isVertical("left")); // false
console.log(isVertical("right")); // false

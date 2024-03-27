let activeGameAddress = "0x1234567890abcdef";

// Use a function to always get the current address
function getCurrentGameAddress() {
  return activeGameAddress;
}

console.log(getCurrentGameAddress()); // Output: "0x1234567890abcdef"

activeGameAddress = "0x9876543210fedcba";

console.log(getCurrentGameAddress()); // Output: "0x9876543210fedcba"

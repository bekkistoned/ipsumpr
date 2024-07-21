try {
    // Code that may throw an error
    let result = someFunctionThatMightThrow();
    console.log(result);
} catch (error) {
    // Handle the error
    console.error('Error occurred:', error);
    // Optionally, handle specific types of errors differently
    if (error instanceof TypeError) {
        // Handle TypeError
    } else if (error instanceof RangeError) {
        // Handle RangeError
    } else {
        // Handle other types of errors
    }
}

   // Assuming projectsData is an array of project objects and currentIndex is initially set to 0
   let currentIndex = 0;
   const projectsData = [...]; // Array of project data

   // Function to handle moving to the next project index
   function moveToNextProject() {
       currentIndex = (currentIndex + 1) % projectsData.length;
       // Call a function to update the UI or perform other actions based on the new index
       updateProjectUI(currentIndex);
   }

   // Example usage
   moveToNextProject(); // Moves to the next project
   
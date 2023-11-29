// Function to fetch data from Google Sheets
function fetchDataFromGoogleSheet() {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/1JqfIvSFu0b1cfJ8CO9PN5pp8z9iD_Nh1DvvLdQwdmxM/values/A1:A60?key=AIzaSyBohOC63Q7vXf1pcsNRN-PJlDw-gXTEZhI')
      .then(response => response.json())
      .then(data => {
        displayProducts(data.values);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Function to display products on the webpage
  function displayProducts(products) {
    const productList = document.getElementById('productsRow');
  
    // Loop through each row of fetched data
    products.forEach(row => {
      // Create a div element for each product and append HTML content
      const productDiv = document.createElement('div');
      productDiv.classList.add('col-lg-4', 'col-md-6', 'mb-4');
      productDiv.innerHTML = row[0]; // Assuming the HTML code is in the first column
  
      // Append the product HTML to the webpage
      productList.appendChild(productDiv);
    });
  }
  
  // Call the function to fetch and display data when the page loads
  document.addEventListener('DOMContentLoaded', fetchDataFromGoogleSheet);
  
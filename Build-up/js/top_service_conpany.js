// async function getData() {
//     document.getElementById("loading2").style.display = "flex"; // Show loading spinner
//     document.getElementById("rowData2").style.display = "none"; // Hide content
  
//     try {
//         let response = await fetch("https://build-up.site/backend/public/services/top_companies.php");
  
//         if (response.ok) {
//             let responseData = await response.json();
//             console.log(responseData.products);
//             display(responseData.products);
            
//             setTimeout(() => { 
//                 document.getElementById("loading2").style.display = "none"; // Hide loading
//                 document.getElementById("rowData2").style.display = "flex"; // Show content
//             }, 2000); // Simulate loading delay
//         }
//     } catch (error) {
//         console.error("❌ Error loading data:", error);
//         document.getElementById("loading2").innerHTML = "<p>⚠️ Failed to load data. Try again later.</p>";
//     }
//   }
  
//   getData();
  
//   function display(arr) {
//       let cartona = "";
//       for (let i = 0; i < arr.length; i++) {
//           cartona += `
//           <div class="card" data-aos="fade-up" data-aos-duration="1000">
//               <img src="${arr[i].service_image}" alt="">
//               <div class="discription">
//                   <h1>${arr[i].service_title}</h1>
//                   <p>${arr[i].service_description}</p>
//                   <p class="price">Rs ${arr[i].service_price}</p>
//               </div>
//           </div>`;
//       }
//       document.getElementById("rowData2").innerHTML = cartona;
//   }
  






// async function getData() {
//     document.getElementById("loading").style.display = "flex"; // Show loading spinner
//     document.getElementById("rowData").style.display = "none"; // Hide content

//     try {
//         let response = await fetch("https://build-up.site/backend/public/services/top_companies.php");

//         if (response.ok) {
//             let responseData = await response.json();
//             console.log(responseData.products);
//             display(responseData.products);
            
//             setTimeout(() => {
//                 document.getElementById("loading").style.display = "none"; // Hide loading
//                 document.getElementById("rowData").style.display = "flex"; // Show content
//             }, 2000); // Simulate loading delay
//         }
//     } catch (error) {
//         console.error("❌ Error loading data:", error);
//         document.getElementById("loading").innerHTML = "<p>⚠️ Failed to load data. Try again later.</p>";
//     }
// }

// getData();

// function display(arr) {
//     let cartona = "";
//     for (let i = 0; i < arr.length; i++) {
//         cartona += `
//         <div class="card" data-aos="fade-up" data-aos-duration="1000">
//             <img src="${arr[i].service_image}" alt="">
//             <div class="discription">
//                 <h1>${arr[i].service_title}</h1>
//                 <p>${arr[i].service_description}</p>
//                 <p class="price">Rs ${arr[i].service_price}</p>
//             </div>
//         </div>`;
//     }
//     document.getElementById("rowData-2").innerHTML = cartona;
// }

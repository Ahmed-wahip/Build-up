// async function getData() {
//     document.getElementById("loading").style.display = "flex"; // Show loading spinner
//     document.getElementById("rowData").style.display = "none"; // Hide content

//     try {
//         let response = await fetch("https://build-up.site/backend/public/services/top_individuals.php");

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
//     document.getElementById("rowData").innerHTML = cartona;
// }









async function getIndividualsData() {
    document.getElementById("loading").style.display = "flex"; // إظهار التحميل
    document.getElementById("rowData").style.display = "none"; // إخفاء المحتوى

    try {
        let response = await fetch("https://build-up.site/backend/public/services/top_individuals.php");

        if (response.ok) {
            let responseData = await response.json();
            console.log(responseData.products);
            display(responseData.products, "rowData");
            
            setTimeout(() => {
                document.getElementById("loading").style.display = "none";
                document.getElementById("rowData").style.display = "flex";
            }, 0);
        }
    } catch (error) {
        console.error("❌ خطأ في تحميل البيانات:", error);
        document.getElementById("loading").innerHTML = "<p>⚠ فشل تحميل البيانات. حاول لاحقًا.</p>";
    }
}

async function getCompaniesData() {
    document.getElementById("loading2").style.display = "flex"; // إظهار التحميل
    document.getElementById("rowData-2").style.display = "none"; // إخفاء المحتوى

    try {
        let response = await fetch("https://build-up.site/backend/public/services/top_companies.php");

        if (response.ok) {
            let responseData = await response.json();
            console.log(responseData.products);
            display(responseData.products, "rowData-2");
            
            setTimeout(() => {
                document.getElementById("loading2").style.display = "none";
                document.getElementById("rowData-2").style.display = "flex";
            }, 0);
        }
    } catch (error) {
        console.error("❌ خطأ في تحميل البيانات:", error);
        document.getElementById("loading2").innerHTML = "<p>⚠ فشل تحميل البيانات. حاول لاحقًا.</p>";
    }
}

// وظيفة عرض البيانات
function display(arr, targetId) {
    let cartona = "";
    for (let i = 0; i < arr.length; i++) {
        cartona += `
        <div class="card" data-aos="fade-up" data-aos-duration="1000">
            <img src="${arr[i].service_image}" alt="">
            <div class="discription">
                <h1>${arr[i].service_title}</h1>
                <p>${arr[i].service_description}</p>
                <p class="price">Rs ${arr[i].service_price}</p>
            </div>
        </div>`;
    }
    document.getElementById(targetId).innerHTML = cartona;
}

// استدعاء البيانات لكل فئة عند تحميل الصفحة
getIndividualsData();
getCompaniesData();
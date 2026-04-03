const projects = [
    {
        name: "Zoom Zone",
        description: "Zoom Zone is a full-stack scheduling application designed to simplify booking meetings. It integrates with Google Calendar and Zoom APIs, allowing users to securely authenticate through OAuth and automatically generate meeting links without manual setup. I implemented the authentication flow, handled API requests, and designed a clean interface for selecting available time slots. This project strengthened my experience with real-world API integration and managing secure user data in a modern web application.",
        project: "http://127.0.0.1:5501/Portfolio/pages/project.html?search=zoom" // this is a link to my projects page but i want to zero it in on its page + the search bar with zoom zone typed in
    },
    {
        name: "DataBricks Factory",
        description: "Built during a hackathon, this project simulates a real-world data pipeline using Databricks to process and analyze large datasets. I helped transform raw data into structured formats with SQL and integrated Streamlit to create an interactive dashboard for visualizing results. This project strengthened my ability to work in fast-paced team environments and apply data engineering concepts to real problems.",
        project: "http://127.0.0.1:5501/Portfolio/pages/project.html?search=databricks"
    },
    {
        name: "Goals App",
        description: "The Goals App is a C# console application focused on object-oriented programming principles like inheritance, polymorphism, abstraction, and encapsulation. Users can create and track different goal types, with dynamic behavior based on class structure. This project strengthened my ability to design organized and scalable programs.",
        project: "http://127.0.0.1:5501/Portfolio/pages/project.html?search=goals"
    },
    {
        name: "Data Analysis",
        description: "This project analyzes whether income can be predicted from a Star Wars survey dataset. I cleaned and processed the data, engineered features, and built a decision tree model with about 60% accuracy. The results showed weak correlation, highlighting the importance of meaningful feature selection in machine learning.",
        project: "http://127.0.0.1:5501/Portfolio/pages/project.html?search=data"
    },
    {
        name: "Web Projects",
        description: "A collection of front-end projects focused on building responsive and user-friendly interfaces using HTML, CSS, and JavaScript. These projects emphasize clean design, layout structure, and interactivity, showcasing my growth in creating functional and visually appealing web experiences.",
        project: "http://127.0.0.1:5501/Portfolio/pages/project.html?search=web"
    }

]


// ========= 1 ==========
// create a variable to keep track of the current project index
// start at 0 (first project)

// HINT: let currentIndex = ?




// ========= 2 ==========
// select left and right buttons using querySelector





// ========= 3 ==========
// when right button is clicked → go to next project
// when left button is clicked → go to previous project

// HINT:
// rightBtn.addEventListener("click", function() {
//     // change index
// });




// ========= 4 ==========
// move forward right button
// increase index by 1

// BUT you must loop back to start if at the end

// HINT:
// currentIndex++

// IF currentIndex >= projects.length → go back to 0




// ========= 5 ==========
// move backwards left button
// decrease index by 1

// BUT if you go below 0 → go to last project

// HINT:
// currentIndex--

// IF currentIndex < 0 → set to projects.length - 1





// ========= 6 ==========
// show the current projects from list
// create a function like showProject()

// inside:
// get the project using projects[currentIndex]

// then update:
// - title
// - description
// - link

// HINT:
// const project = projects[currentIndex];




// ========= 7 ==========
//Make the button link to the project page
// when user clicks "view project" button:

// use the project field from your object

// HINT:
// window.location.href = project.project;





// ========= 8 ==========
//final step 

// // "hey URL, do you have a 'search' value?"
// if yes → give it to me
// const params = new URLSearchParams(window.location.search);
// const searchValue = params.get("search");

// then If something exists in the URL…”
// if (searchValue) {

// // put it into your search bar
// HINT: document.querySelector("#searchBar").value = searchValue;

// // call your filter function

// HINT:
// filterProjects(searchValue)
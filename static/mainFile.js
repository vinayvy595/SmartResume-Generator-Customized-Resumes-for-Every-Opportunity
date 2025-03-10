function addNewExp() {
  // Get the work experience container
  let workExperienceContainer = document.getElementById(
    "workExperienceContainer"
  );

  // Create a new work experience div
  let newWorkExperience = document.createElement("div");
  newWorkExperience.classList.add("workExperience");

  // Create input elements
  let roleInput = document.createElement("input");
  roleInput.type = "text";
  roleInput.classList.add("form-control", "roleInput");
  roleInput.placeholder = "Role";

  let durationInput = document.createElement("input");
  durationInput.type = "text";
  durationInput.classList.add("form-control", "durationInput");
  durationInput.placeholder = "Duration";

  let companyInput = document.createElement("input");
  companyInput.type = "text";
  companyInput.classList.add("form-control", "companyInput");
  companyInput.placeholder = "company name";

  // Create delete button
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.innerHTML = "delete";
  deleteButton.addEventListener("click", function () {
    workExperienceContainer.removeChild(newWorkExperience);
  });

  // Append the input elements and delete button to the new work experience div
  newWorkExperience.appendChild(roleInput);
  newWorkExperience.appendChild(companyInput);
  newWorkExperience.appendChild(durationInput);
  newWorkExperience.appendChild(deleteButton);
  newWorkExperience.appendChild(document.createElement("div")); // Clear float

  // Append the new work experience div to the container
  workExperienceContainer.appendChild(newWorkExperience);
}
function clearworkExperience(btn) {
  // Get the parent element (.workExperience)
  let workExperience = btn.parentElement;

  // Clear the input fields within the .eduExperience element
  let inputs = workExperience.querySelectorAll('input, textarea');
  inputs.forEach(function (input) {
    input.value = '';
  });
}
// =============================work experience section ends here===========================================

// ==========================Education===========================================================
function addNewEdu() {
  // Get the education experience container
  let eduExperienceContainer = document.getElementById(
    "eduExperienceContainer"
  );

  // Create a new education experience div
  let newEducation = document.createElement("div");
  newEducation.classList.add("eduExperience");

  // Create input elements
  let clgInput = document.createElement("input");
  clgInput.type = "text";
  clgInput.classList.add("form-control", "clgInput");
  clgInput.placeholder = "School/College";

  let degreeInput = document.createElement("input");
  degreeInput.type = "text";
  degreeInput.classList.add("form-control", "degInput");
  degreeInput.placeholder = "Degree/course";

  let durationInput = document.createElement("input");
  durationInput.type = "text";
  durationInput.classList.add("form-control", "startYearInput");
  durationInput.placeholder = "Start Year";

  let durationInput2 = document.createElement("input");
  durationInput2.type = "text";
  durationInput2.classList.add("form-control", "endYearInput");
  durationInput2.placeholder = "End Year";

  let percentageInput = document.createElement("input");
  percentageInput.type = "text";
  percentageInput.classList.add("form-control", "percentInput");
  percentageInput.placeholder = "CGPA/Percentage% ex:CGPA:7.2 or Percentage:90%";

  // Create delete button
  let deleteButtons = document.createElement("button");
  deleteButtons.classList.add("deleteButtons");
  deleteButtons.innerHTML = "delete";
  deleteButtons.addEventListener("click", function () {
    eduExperienceContainer.removeChild(newEducation);
  });

  // Append the input elements and delete button to the new education experience div
  newEducation.appendChild(clgInput);
  newEducation.appendChild(degreeInput);
  newEducation.appendChild(durationInput);
  newEducation.appendChild(durationInput2);
  newEducation.appendChild(percentageInput);
  newEducation.appendChild(deleteButtons);
  newEducation.appendChild(document.createElement("div")); // Clear float

  // Append the new education experience div to the container
  eduExperienceContainer.appendChild(newEducation);
}
// clear education delete button
function clearEduExperience(btn) {
  // Get the parent element (.eduExperience)
  let eduExperience = btn.parentElement;

  // Clear the input fields within the .eduExperience element
  let inputs = eduExperience.querySelectorAll('input, textarea');
  inputs.forEach(function (input) {
    input.value = '';
  });
}
// =============================education section ends here===========================================

// ===========================add new project details===================================================
function addNewProj() {
  // Get the project details container
  let projectDetailsContainer = document.getElementById(
    "projectDetailsContainer"
  );

  // Create a new project details div
  let newProject = document.createElement("div");
  newProject.classList.add("projDetails");

  // Create input elements
  let titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.classList.add("form-control", "titleInput");
  titleInput.placeholder = "Project Title";

  let projdescriptionInput = document.createElement("input");
  projdescriptionInput.type = "text";
  projdescriptionInput.classList.add("form-control", "projdescriptionInput");
  projdescriptionInput.placeholder = "Degree/course";


  // Create delete button
  let deleteButtonP = document.createElement("button");
  deleteButtonP.classList.add("deleteButtonP");
  deleteButtonP.innerHTML = "delete";
  deleteButtonP.addEventListener("click", function () {
    projectDetailsContainer.removeChild(newProject);
  });

  // Append the input elements and delete button to the new project details div
  newProject.appendChild(titleInput);
  newProject.appendChild(projdescriptionInput);
  newProject.appendChild(deleteButtonP);
  newProject.appendChild(document.createElement("div")); // Clear float

  // Append the new project details div to the container
  projectDetailsContainer.appendChild(newProject);
}
// clear project details delete button
function clearProjDetails(btn) {
  // Get the parent element (.projDetails)
  let projDetails = btn.parentElement;

  // Clear the input fields within the .eduExperience element
  let inputs = projDetails.querySelectorAll('input, textarea');
  inputs.forEach(function (input) {
    input.value = '';
  });
}
// =============================project details section ends here===========================================


// ========================= Function to the generateResumeButton ===========================
function generateResumeButton() {
  // Get values from the form
  const name = document.getElementById('namefield').value;
  const contact = document.getElementById('contactfield').value;
  const email = document.getElementById('emailfield').value;
  const area = document.getElementById('areafield').value;
  const role = document.getElementById('desired-role').value;
  const summ = document.getElementById('summary').value;
  const github = document.getElementById('githubfield').value;
  const linkedin = document.getElementById('linkedinfield').value;

  // Hobbies
  const lang = document.getElementById('langfield').value;

  // Work Experience
  let roles = document.getElementsByClassName('roleInput');
  let companies = document.getElementsByClassName('companyInput');
  let durations = document.getElementsByClassName('durationInput');
  let workExperience = [];

  for (let i = 0; i < roles.length; i++) {
    workExperience.push({
      role: roles[i].value,
      company: companies[i].value,
      duration: durations[i].value
    });
  }

  // Education
  let clgs = document.getElementsByClassName('clgInput');
  let degrees = document.getElementsByClassName('degInput');
  let startYears = document.getElementsByClassName('startYearInput');
  let endYears = document.getElementsByClassName('endYearInput');
  let percentage = document.getElementsByClassName('percentInput');
  let education = [];

  for (let i = 0; i < clgs.length; i++) {
    education.push({
      college: clgs[i].value,
      degree: degrees[i].value,
      startYear: startYears[i].value,
      endYear: endYears[i].value,
      percent: percentage[i].value
    });
  }

  // Projects
  let titles = document.getElementsByClassName('titleInput');
  // let teche = document.getElementsByClassName('techInput');
  let descriptions = document.getElementsByClassName('projdescriptionInput');
  let projects = [];

  for (let i = 0; i < titles.length; i++) {
    projects.push({
      title: titles[i].value,
      // tech: teche[i].value,
      description: descriptions[i].value
    });
  }

  // Store all data in localStorage
  const resumeData = {
    name, contact, email, area, role, summ, github, linkedin, lang,
    workExperience, education, projects
  };

  localStorage.setItem("resumeData", JSON.stringify(resumeData));

  // Redirect to resume page
  window.location.href = "Resume.html";
}



// =================Function to update the profile picture in the template ====================

// ==============================Function to update the profile picture ends here ====================

// =============================Function to remove the template footer ====================
function toggleFooter() {
  var checkbox = document.getElementById("removeFooterCheckbox");
  var footer = document.querySelector('.resume footer');

  // Check if the checkbox is checked
  if (checkbox.checked) {
    // If checked, hide the footer
    footer.style.display = "none";
  } else {
    // If not checked, show the footer
    footer.style.display = "block";
  }
}


// =============================Function to remove the template footer ends here ====================

// ===============================Function to download the pdf ====================================
document.getElementById("downloadButton").addEventListener("click", function () {
  const element = document.getElementById("resume-template");

  // the screen width to adjust PDF format dynamically
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Generate the PDF from the element with custom options
  const options = {
    margin: [0, 0, 0, 0],
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "px", format: [1500, 1800], orientation: "portrait" } // Default size for larger screens
  };

  // Adjust format and orientation for smaller screens
  if (screenWidth <= 768) {
    options.jsPDF.format = [700, 900]; //  the format for smaller screens
    options.jsPDF.orientation = "portrait"; //  the orientation for smaller screens
  }

  html2pdf().set(options).from(element).toContainer().toCanvas().toPdf().save();


});

// ===============================Function to download the pdf ends here================================
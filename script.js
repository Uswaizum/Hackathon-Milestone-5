// Get references for form & display area
var formData = document.getElementById('resume-form');
var newResumeDisplayElement = document.getElementById('resume-display');
//shareable link & download button.
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handling Form Submission
formData === null || formData === void 0 ? void 0 : formData.addEventListener('submit', function (event) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    event.preventDefault();
    // page reload prevention.
    // Collect user input values
    var username = document.getElementById('username').value;
    var name = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value;
    var email = (_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value;
    var phone = (_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value;
    var address = (_d = document.getElementById('address')) === null || _d === void 0 ? void 0 : _d.value;
    var DOB = (_e = document.getElementById('dob')) === null || _e === void 0 ? void 0 : _e.value;
    var gender = (_f = document.getElementById('gender')) === null || _f === void 0 ? void 0 : _f.value;
    var education = (_g = document.getElementById('education')) === null || _g === void 0 ? void 0 : _g.value;
    var skills = (_h = document.getElementById('skills')) === null || _h === void 0 ? void 0 : _h.value;
    var workexperience = (_j = document.getElementById('work-experience')) === null || _j === void 0 ? void 0 : _j.value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        DOB: DOB,
        gender: gender,
        education: education,
        skills: skills,
        workexperience: workexperience,
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving our data locally.
    // Generating the resume content dynamically.
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable =\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable =\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable =\"true\">").concat(phone, "</span></p>\n    <h3>Address</h3>\n    <p contenteditable =\"true\">").concat(address, "</p>\n    <h3>DOB</h3>\n    <p contenteditable =\"true\">").concat(DOB, "</p>\n    <h3>Gender</h3>\n    <p contenteditable =\"true\">").concat(gender, "</p>\n    <h3>Education</h3>\n    <p contenteditable =\"true\">").concat(education, "</p>\n    <h3>skills</h3>\n    <p contenteditable =\"true\">").concat(skills, "</p>\n    <h3>workexperience</h3>\n    <p contenteditable =\"true\">").concat(workexperience, "</p>\n  ");
    // Display the generated resume
    newResumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});

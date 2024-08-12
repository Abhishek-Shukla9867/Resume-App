// script.js
document.getElementById('resumeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Build resume
    const resumeOutput = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h4>Education</h4>
        <p>${education.replace(/\n/g, '<br>')}</p>
        <h4>Experience</h4>
        <p>${experience.replace(/\n/g, '<br>')}</p>
        <h4>Skills</h4>
        <p>${skills.replace(/\n/g, '<br>')}</p>
    `;

    // Display resume
    document.getElementById('output').innerHTML = resumeOutput;
    document.getElementById('resume').style.display = 'block';
});


document.querySelector('.bio').innerHTML = "<h2>Lesetja <span class='mySur'>Modiba<span> <br></br> </h2>"
    + "<p>"
    + "I am a Software developer from Tshwane University of Technology holding a national diploma in"
    + " Software development and currently pursuing an advanced diploma in computer sciences. I can provide"
    + " clean code, pixel perfect design, and responsive websites."
    + " I am currently based in Polokwane but willing to relocate to any place.<br></br>"

    + "I do front-end web development and a bit of back-end using HTML,CSS & Javascript or ReactJS. I am"
    + " familiar with the following languages, C#, Java, & C++, and I have used MySql, Microsoft SQL Server, and Firebase."
    + "I am currently learning Flutter and React native for Android and iOS application development."
    + "</p>"
    + "<button class='btn-low'>Download CV</button>";

function isChecked() {
    document.querySelector('.menu').style.display = "block";
}
function unCheck() {
    document.querySelector('.menu').style.display = "none";
    location.reload();
}

function changeTheme()
{
    
        var element = document.body;
        element.classList.toggle("dark-mode");
}



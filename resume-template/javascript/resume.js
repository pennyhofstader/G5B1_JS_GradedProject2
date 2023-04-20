// store json data
let resumeData
let front = 1
// this varibale is used to control next prev navigation buttons
let buttonfirst
// this varibale is used to control next prev navigation buttons  for filtered results 
let btn
// used for passing array elements
let z = 1

// fetching the json file
$(document).ready(function () {
    $.getJSON("../json/data.json", function (data) {
        document.querySelector(".errorpage").style.display = "none"
        resumeData = data
        display(resumeData, 0)
    })
})

//  next button 
function forward() {
    if (btn == "r") {
        z = z + 2
    }

    btn = "f"
    if (array[z] != undefined) {

        document.getElementById("prev").style.visibility = "visible"

        if (z == array.length - 1)
            document.getElementById("next").style.visibility = "hidden"

        displayfilter(resumeData, array[z])
        z++

    } else {

        var child = achievelist.lastElementChild;
        while (child) {
            achievelist.removeChild(child);
            child = achievelist.lastElementChild;
        }

        var child = hobbieslist.lastElementChild;
        while (child) {
            hobbieslist.removeChild(child)
            child = hobbieslist.lastElementChild;
        }

        var child = techlist.lastElementChild;
        while (child) {
            techlist.removeChild(child);
            child = techlist.lastElementChild;
        }
        if ((buttonfirst == "reverse" && (front != 0))) {
            front++
        }

        buttonfirst = "forward"
        if ((front <= 5) && (front == 0)) {
            front++
            display(resumeData, front++)
        } else {
            display(resumeData, front++)
        }
    }
}


// prev button 
function back() {
    if (btn == "f") {
        z = z - 2
    }

    btn = "r"
    if (array[z] != undefined) {
        document.getElementById("next").style.visibility = "visible"
        if (z == 0)
            document.getElementById("prev").style.visibility = "hidden"

        displayfilter(resumeData, array[z])
        z--

    } else {

        var child = achievelist.lastElementChild;
        while (child) {
            achievelist.removeChild(child);
            child = achievelist.lastElementChild;
        }

        var child = hobbieslist.lastElementChild;
        while (child) {
            hobbieslist.removeChild(child);
            child = hobbieslist.lastElementChild;
        }

        var child = techlist.lastElementChild;
        while (child) {
            techlist.removeChild(child);
            child = techlist.lastElementChild;
        }

        if ((buttonfirst == "forward") && (front != 5)) {
            front--
        }
        buttonfirst = "reverse"
        if (front > 0) {
            display(resumeData, --front)
        }
    }
}


// displaying the contents
function display(resumeData, k) {

    if (k == 0) {
        btn = document.getElementById("prev").style.visibility = "hidden"


    } else if (k == 5) {
        btn = document.getElementById("next").style.visibility = "hidden"
        front--

    } else {

        btn = document.getElementById("prev").style.visibility = "visible"
        btn = document.getElementById("next").style.visibility = "visible"

    }


    // displaying personal information    
    let names = document.querySelector(".names")
    names.innerText = `${resumeData.resume[k].basics.name}`
    let AppliedFor = document.querySelector(".applied")
    AppliedFor.innerText = `${resumeData.resume[k].basics.AppliedFor}`

    let phone = document.querySelector(".phone")
    phone.innerText = `${resumeData.resume[k].basics.phone}`

    let email = document.querySelector(".email")
    email.innerText = `${resumeData.resume[k].basics.email}`

    //for changing the links of linkdin
    document.querySelector(".link").href = `${resumeData.resume[k].basics.profiles.url}`;

    // for displaying technical skills
    for (i = 1; i <= ((resumeData.resume[k].skills.keywords).length); i++) {

        techlist = document.querySelector(".tech")
        let p = document.createElement("p");
        p.innerText = `${resumeData.resume[k].skills.keywords[i - 1]}`
        techlist.appendChild(p);
    }

    // displaying hobbies
    for (i = 1; i <= ((resumeData.resume[k].interests.hobbies).length); i++) {
        hobbieslist = document.querySelector(".hobbies")
        let p = document.createElement("p");
        p.innerText = `${resumeData.resume[k].interests.hobbies[i - 1]}`
        hobbieslist.appendChild(p);
    }

    //  displaying Work Experience
    let company = document.querySelector(".company")
    company.innerText = `${resumeData.resume[k].work["Company Name"]}`

    let position = document.querySelector(".work-position")
    position.innerText = `${resumeData.resume[k].work.Position}`

    let startdate = document.querySelector(".sd")
    startdate.innerText = `${resumeData.resume[k].work["Start Date"]}`

    let enddate = document.querySelector(".ed")
    enddate.innerText = `${resumeData.resume[k].work["End Date"]}`

    let summary = document.querySelector(".worksummary")
    summary.innerText = `${resumeData.resume[k].work.Summary}`

    // displaying project details
    let projectname = document.querySelector(".projectname")
    projectname.innerText = `${resumeData.resume[k].projects.name}:`

    let description = document.querySelector(".description")
    description.innerText = `${resumeData.resume[k].projects.description}:`

    //  displaying education
    let ug = document.querySelector(".ug")
    ug.innerText = `${resumeData.resume[k].education.UG.institute},${resumeData.resume[k].education.UG.course},${resumeData.resume[k].education.UG["Start Date"]},${resumeData.resume[k].education.UG["End Date"]},${resumeData.resume[k].education.UG.cgpa}`

    let pu = document.querySelector(".pu")
    pu.innerText = `${resumeData.resume[k].education["Senior Secondary"].institute},${resumeData.resume[k].education["Senior Secondary"].cgpa}`

    let school = document.querySelector(".school")
    school.innerText = `${resumeData.resume[k].education["High School"].institute},${resumeData.resume[k].education["High School"].cgpa}`

    // displaying internship
    let intern_company = document.querySelector(".intern_company")
    intern_company.innerText = `${resumeData.resume[k].Internship["Company Name"]}`

    let intern_postion = document.querySelector(".intern_postion")
    intern_postion.innerText = `${resumeData.resume[k].Internship.Position}`
    let intern_startdate = document.querySelector(".intern_startdate")
    intern_startdate.innerText = `${resumeData.resume[k].Internship["Start Date"]}`
    let intern_enddate = document.querySelector(".intern_enddate")
    intern_enddate.innerText = `${resumeData.resume[k].Internship["End Date"]}`

    let intern_summary = document.querySelector(".intern_summary")
    intern_summary.innerText = `${resumeData.resume[k].Internship.Summary}`

    // displaying achievements
    for (i = 1; i <= ((resumeData.resume[k].achievements.Summary).length); i++) {
        achievelist = document.querySelector(".achievements")
        let li = document.createElement("li");
        li.innerText = `${resumeData.resume[k].achievements.Summary[i - 1]}`
        achievelist.appendChild(li);

    }
}



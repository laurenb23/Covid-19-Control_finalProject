function welcomeUser() {
    document.getElementById('theirName').innerHTML =
        "Welcome " + document.getElementById("username").value;
    return false;
}


let faq1 = document.getElementsByClassName("q1");
let i;

for (i = 0; i < faq1.length; i++) {
    faq1[i].addEventListener("click", function() {

        this.classList.toggle("active");

        let body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    })
}

let faq2 = document.getElementsByClassName("q2");
let j;

for (j = 0; j < faq2.length; j++) {
    faq2[j].addEventListener("click", function() {
        this.classList.toggle("active");

        let body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

let faq3 = document.getElementsByClassName("q3");
let k;

for (k = 0; k < faq3.length; k++) {
    faq3[k].addEventListener("click", function() {

        this.classList.toggle("active");

        let body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

let faq4 = document.getElementsByClassName("q4");
let l;

for (l = 0; l < faq4.length; l++) {
    faq4[l].addEventListener("click", function() {
        this.classList.toggle("active");


        let body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

anychart.onDocumentLoad(function() {
    let data = [{
        x: '12-17',
        y: 52.1
    }, {
        x: '18-24',
        y: 57.6
    }, {
        x: '25-39',
        y: 62.0
    }, {
        x: '40-49',
        y: 70.4
    }, {
        x: '50-64',
        y: 77.5
    }, {
        x: '65-74',
        y: 89.3
    }, {
        x: '75+',
        y: 84.0
    }];
    let ageVaxchart = anychart.bar();
    ageVaxchart.title('Vaccination Rates By Age ');
    ageVaxchart.xAxis().title("Age");
    ageVaxchart.yAxis().title("Percentage of Population Vaccinated");
    let dataPoints = ageVaxchart.bar(data);
    ageVaxchart.container("ageVaxContainer");
    ageVaxchart.draw();
});

anychart.onDocumentLoad(function() {
    let data = [{
        x: 'Alabama',
        y: 66.1
    }, {
        x: 'Alaska',
        y: 75.9
    }, {
        x: 'Arizona',
        y: 77.9
    }, {
        x: 'Arkansas',
        y: 71.8
    }, {
        x: 'California',
        y: 88.7
    }, {
        x: 'Colorado',
        y: 81.4
    }, {
        x: 'Connecticut',
        y: 90.4
    }, {
        x: 'Delaware',
        y: 80.7
    }, {
        x: 'Florida ',
        y: 80.6
    }, {
        x: 'Georgia ',
        y: 71.8
    }, {
        x: 'Hawaii ',
        y: 89.7
    }, {
        x: 'Idaho ',
        y: 84.7
    }, {
        x: 'Illinois ',
        y: 79.5
    }, {
        x: 'Iowa ',
        y: 72.9
    }, {
        x: 'Kansas ',
        y: 75.8
    }, {
        x: 'Kentucky ',
        y: 70.5
    }, {
        x: 'Louisiana ',
        y: 66.0
    }, {
        x: 'Maine ',
        y: 85.6
    }, {
        x: 'Maryland ',
        y: 87.9
    }, {
        x: 'Massachusetts ',
        y: 91.9
    }, {
        x: 'Michigan ',
        y: 70.5
    }, {
        x: 'Minnesota ',
        y: 79.5
    }, {
        x: 'Mississippi ',
        y: 64.6
    }, {
        x: 'Missouri ',
        y: 70.1
    }, {
        x: 'Montana ',
        y: 70.5
    }, {
        x: 'Nebraska ',
        y: 76.1
    }, {
        x: 'Nevada ',
        y: 78.9
    }, {
        x: 'New Hampshire ',
        y: 85.2
    }, {
        x: 'New Jersey ',
        y: 87.6
    }, {
        x: 'New Mexico ',
        y: 85.7
    }, {
        x: 'New York ',
        y: 86.8
    }, {
        x: 'North Carolina ',
        y: 77.4
    }, {
        x: 'North Dakota ',
        y: 69.3
    }, {
        x: 'Ohio ',
        y: 67.6
    }, {
        x: 'Oklahoma ',
        y: 73.2
    }, {
        x: 'Oregon ',
        y: 81.8
    }, {
        x: 'Pennsylvania ',
        y: 82.7
    }, {
        x: 'Rhode Island ',
        y: 90.1
    }, {
        x: 'South Carolina ',
        y: 70.7
    }, {
        x: 'South Dakota ',
        y: 77.0
    }, {
        x: 'Tennessee ',
        y: 66.7
    }, {
        x: 'Texas ',
        y: 80
    }, {
        x: 'Utah ',
        y: 81.2
    }, {
        x: 'Vermont ',
        y: 90.4
    }, {
        x: 'Virgina ',
        y: 85.7
    }, {
        x: 'Washington ',
        y: 84.4
    }, {
        x: 'Washington DC ',
        y: 92.2
    }, {
        x: 'West Virgina ',
        y: 79.8
    }, {
        x: 'Wisconsin ',
        y: 75.2
    }, {
        x: 'Wyoming ',
        y: 64.7
    }];
    let stateVaxchart = anychart.bar();
    stateVaxchart.title('Vaccination Rates By State ');
    stateVaxchart.xAxis().title("Age");
    stateVaxchart.yAxis().title("Average Percentage of Population Vaccinated");
    let data_points = stateVaxchart.bar(data);
    stateVaxchart.container("stateVaxContainer");
    stateVaxchart.draw();
});
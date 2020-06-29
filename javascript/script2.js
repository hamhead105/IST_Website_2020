function checkBloodCompatibility() {
    if (donorGroup.value != "null" && donorRH.value != "null" && patientGroup.value != "null" && patientRH.value != "null") {
        if  (donorRH.value == '-') {
            if (donorGroup.value == 'O') {
                output.textContent = "Match";
                output.classList.add("minty");
                output.classList.remove("red");
            }
            else if (donorGroup.value == patientGroup.value) {
                output.textContent = "Match";
                output.classList.add("minty");
                output.classList.remove("red");
            }
            else if ((donorGroup.value == 'A'|| donorGroup.value == 'B') && (patientGroup.value == 'AB')) {
                output.textContent = "Match";
                output.classList.add("minty");
                output.classList.remove("red");
            }
            else {
                output.textContent = "Blood groups do not match";
                output.classList.add("red");
                output.classList.remove("minty");
            } 
        }
        
        else if (donorRH.value == '+') {
            if (donorGroup.value == 'O') {
                if (patientRH.value == '+') {
                    output.textContent = "Match";
                    output.classList.add("minty");
                    output.classList.remove("red");
                } else {
                    output.textContent = "RH factors do not match";
                    output.classList.add("red");
                    output.classList.remove("minty");
                }
            }
            else if (donorGroup.value == patientGroup.value) {
                if (patientRH.value == '+') {
                    output.textContent = "Match";
                    output.classList.add("minty");
                    output.classList.remove("red");
                } else {
                    output.textContent = "Rh factors does not match";
                }
            }
            else if ((donorGroup.value == 'A' || donorGroup.value == 'B') && (patientGroup.value == 'AB')) {
                if (patientRH.value == '+') {
                    output.textContent = "Match";
                    output.classList.add("minty");
                    output.classList.remove("red");
                } else {
                    output.textContent = "RH factors do not match";
                    output.classList.add("red");
                    output.classList.remove("minty");
                }
            }
            else {
                if (patientRH.value == '+') {
                    output.textContent = "Blood groups do not match";
                    output.classList.add("red");
                    output.classList.remove("minty");
                }
                else {
                    output.textContent = "Both blood group and Rh factor do not match";
                    output.classList.add("red");
                    output.classList.remove("minty");
                }
            }
        }
    } else {
        output.textContent = "Invalid Inputs";
        output.classList.add("red");
        output.classList.remove("minty");
    }
}

enter.onclick = checkBloodCompatibility;








// https://coolors.co/072436-033b63-7c98ac-f5f5f5-eb6559
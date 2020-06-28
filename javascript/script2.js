function checkBloodCompatibility() {
    if (donorGroup.value != "null" && donorRH.value != "null" && patientGroup.value != "null" && patientRH.value != "null") {
        if  (donorRH.value == '-') {
            if (donorGroup.value == 'O') {
                output.textContent = "match";
            }
            else if (donorGroup.value == patientGroup.value) {
                output.textContent = "match";
            }
            else if ((donorGroup.value == 'A'|| donorGroup.value == 'B') && (patientGroup.value == 'AB')) {
                output.textContent = "match";
            }
            else {
                output.textContent = "blood groups do not match";
            } 
        }
        
        else if (donorRH.value == '+') {
            if (donorGroup.value == 'O') {
                if (patientRH.value == '+') {
                    output.textContent = "match";
                } else {
                    output.textContent = "RH factors do not match";
                }
            }
            else if (donorGroup.value == patientGroup.value) {
                if (patientRH.value == '+') {
                    output.textContent = "match";
                } else {
                    output.textContent = "Rh factors does not match";
                }
            }
            else if ((donorGroup.value == 'A' || donorGroup.value == 'B') && (patientGroup.value == 'AB')) {
                if (patientRH.value == '+') {
                    output.textContent = "match";
                } else {
                    output.textContent = "RH factors do not match";
                }
            }
            else {
                if (patientRH.value == '+') {
                    output.textContent = "Blood groups do not match";
                }
                else {
                    output.textContent = "Both blood group and Rh factor do not match";
                }
            }
        }
    }  else {
        output.textContent = "invalid inputs";
    }
}

enter.onclick = checkBloodCompatibility;








// https://coolors.co/072436-033b63-7c98ac-f5f5f5-eb6559
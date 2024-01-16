
const yearInput = document.querySelector('#year');
const monthInput = document.querySelector('#Month');
const dayInput = document.querySelector('#day');
const getDateInput = document.querySelector("#getDate");
const getAgeElement = document.querySelector('.getAge');

const getData = () => {
    // BIRTHDAY DATES
    if(!getDateInput.value){
        alert('Please select a birth date.');
        return;
    }
    else{
        let birth = new Date(getDateInput.value);
        let birthYear = birth.getFullYear();
        let birthMonth = birth.getMonth();
        let birthDay = birth.getDate();
    
        // CURRENT DATES
        let current = new Date();
        let currentYear = current.getFullYear();
        let currentMonth = current.getMonth();
        let currentDay = current.getDate();
    
        if (birthYear > currentYear || (birthYear === currentYear && birthMonth > currentMonth) || 
            (birthYear === currentYear && birthMonth === currentMonth && birthDay > currentDay)) {
            alert("Invalid date. Please check your input.");
            getDateInput.value = '';
            return;
        }
    
        getAgeElement.classList.add('show');
        calculation(birthYear, birthMonth, birthDay, currentYear, currentMonth, currentDay);
    }

   
};

const calculation = (birthYear, birthMonth, birthDay, currentYear, currentMonth, currentDay) => {
    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDay - birthDay;

    // Adjust negative values
    if (days < 0) {
        months--;
        days += 30; // Assuming 30 days in a month for simplicity
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    // Update HTML elements
    yearInput.innerHTML = years;
    monthInput.innerHTML = months; // Corrected variable name
    dayInput.innerHTML = days; // Corrected variable name
};


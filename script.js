function getDOB() {
    // Get the values from the input fields
    const dobInput = document.getElementById('inputDob').value;
    const currentDateInput = document.getElementById('cdate').value;

    // Validate if both dates are provided
    if (!dobInput || !currentDateInput) {
        alert('Please enter both Date of Birth and Current Date.');
        return;
    }

    // Convert input values to Date objects
    const dob = new Date(dobInput);
    const currentDate = new Date(currentDateInput);

    // Validate if the dates are valid
    if (isNaN(dob.getTime()) || isNaN(currentDate.getTime())) {
        alert('Please enter valid dates.');
        return;
    }

    // Ensure dob is not in the future
    if (currentDate < dob) {
        alert('Date of Birth cannot be in the future.');
        return;
    }

    // Calculate age
    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDifference = currentDate.getMonth() - dob.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('currentAge').textContent = 'Your age is '+age+' years.';
    
}
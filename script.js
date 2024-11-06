function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const result = document.getElementById('result');
    
    if (!birthdate) {
      result.innerText = "Please select your birth date.";
      return;
    }
  
    const birthDateObj = new Date(birthdate);
    const currentDate = new Date();
    
    let years = currentDate.getFullYear() - birthDateObj.getFullYear();
    let months = currentDate.getMonth() - birthDateObj.getMonth();
    let days = currentDate.getDate() - birthDateObj.getDate();
  
    // Adjust the month and day values if necessary
    if (days < 0) {
      months--;
      days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate(); // Days in previous month
    }
    
    if (months < 0) {
      years--;
      months += 12;
    }
  
    result.innerText = `Your age is: ${years} years, ${months} months, and ${days} days.`;
  }
  
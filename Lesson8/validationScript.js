    // JavaScript code for form validation
	// Prevent form from submitting
    document.getElementById('myForm').addEventListener('submit', function(event){
      const name = document.getElementById('inputField').value;
      console.log(inputField);
      if (name === "") {
        alert('Input is required!');
        event.preventDefault();
      }
      else{
      // Retrieve the input field value
        let inputField = document.querySelector('#inputField');
        let input = inputField.value;
      // Regular expression pattern for alphanumeric input 
      var regex = /^[a-zA-Z0-9]+$/;
      // Check if the input value matches the pattern
        if (regex.test(input)){          
        // Valid input: display confirmation and submit the form
          alert('Input is Valid');
        } else {
        // Invalid input: display error message
          alert('Input is invalid');
          event.preventDefault();
        }
      }
    }
      );
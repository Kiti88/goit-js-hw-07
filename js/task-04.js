const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const formData = {};
      let formValid = true;

      // Iterate over form elements
      for (const element of this.elements) {
        if (element.type !== 'submit') {
          const trimmedValue = element.value.trim();
          formData[element.name] = trimmedValue;

          if (!trimmedValue) {
            formValid = false;
          }
        }
      }

      if (!formValid) {
        alert('All form fields must be filled in');
      } else {
        console.log(formData);
        this.reset();
      }
    });

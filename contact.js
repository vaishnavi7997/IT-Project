document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
  
      // validation 
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
      }
  
      // email validation 
      if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
      }
  
      console.log('Form data:');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Subject:', subject);
      console.log('Message:', message);
  
      alert('Thank you for your message! We will get back to you soon.');
  
      form.reset();
    });
  });
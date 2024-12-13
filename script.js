  // Hamburger Menu 
  document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("nav-active");
  });

  // Inspire Button 
  document.getElementById("inspire-btn").addEventListener("click", function () {
    const inspirationalMessages = [
      "Start your day with coffee and a smile!",
      "Life is too short for bad coffee!",
      "Take a break, coffee makes everything better.",
      "Savor the moments, one cup at a time.",
      "Coffee is the answer, who cares what the question is?",
      "A cup of coffee shared with a friend is happiness tasted and time well spent.",
      "Life happens, coffee helps."
      
    ];
    const randomMessage  = inspirationalMessages[Math.floor(Math.random() * inspirationalMessages.length)];
    document.getElementById("Messages").textContent = randomMessage ;
  });

  // Form Submission 
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent successfully, We will get back to you soon.`);
      document.getElementById("contact-form").reset();
    } else {
      alert("Please fill out this field.");
    }
  });


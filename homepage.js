const welcomeTemplate = Handlebars.compile(document.querySelector('#welcome-template').innerHTML);

const currentUser = {
  username: "Njoki"
};

const welcomeMessage = welcomeTemplate(currentUser);
document.querySelector('#welcome-message').innerHTML = welcomeMessage;

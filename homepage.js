const welcomeTemplate = Handlebars.compile(document.querySelector('#welcome-template').innerHTML);

const currentUser = {
  username: "Kennedy Nyamai"
};

const welcomeMessage = welcomeTemplate(currentUser);
document.querySelector('#welcome-message').innerHTML = welcomeMessage;

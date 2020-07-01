var content = $(".content")

function home(){
    var homeSection = $("<div>")
    var homeSectionTitle =$("<h1>")
    var homeSectionContent =$("<h2>")

    homeSectionTitle.text ("welcome to my website")
    homeSectionContent.text("click on any of the buttons above or in the nav bar to learn more about me")

    homeSection.append(homeSectionTitle, homeSectionContent)
    content.html(homeSection)
}
home();

function aboutMe(){
    var aboutMeSection = $("<div>")
    
    var aboutMeHeader = $("<h1>")
    aboutMeHeader.text("about me")

    var aboutMeContent = $("<p>")
    aboutMeContent.text("Full-stack web developer hoping to utilize a background in Architecture and Interior Design to create a more aesthetically pleasing design and user experience on the web. Worked with project managers to manage client relationships, projects, timelines, budgets, and customer satisfaction during time as an Architecture Associate. Recently graduated from University of Washington with a certificate in Full Stack Development. Previously graduated from the University of Southern California with a Bachelor of Science in GeoDesign. Comfortable working with HTML, CSS, responsive design, JavaScript, jQuery, and local storage. Excellent working with Github for deployment and collaboration, and API, JSON, and AJAX for API interaction. Developing skills in Node.js. Active problem solver with a passion for user experience and project management. Successfully worked with a team as a project manager to create an application that allows users to find cocktail recipes, information on beer, and local grocery stores and breweries - this application illustrates a sleek user experience with mobile responsiveness from Materialize and DOM manipulation from JavaScript. I believe I will be an asset to any team to create more efficient, user friendly applications, within timelines and budget.")
    console.log(aboutMeContent)
    
    aboutMeSection.append(aboutMeHeader, aboutMeContent)
    content.html(aboutMeSection)
    console.log(content)
    
}
function portfolio(){
    var portfolioDiv =$("<div>")
    var portfolioSection = $("<div>")

    var portfolioHeader = $("<h1>")
    portfolioHeader.text("portfolio")
   
    var portfolioContent = [
        {
            "name": "drinkME",
            "info": "In the mood for a cocktail or a beer? try this application for recipies and breweries near you.",
            "image": "assets/images/drinkme.png",
            "website": "https://derek-watson14.github.io/drinkME/"
        },
        {
            "name": "weather dashboard",
            "info": "Look up current weather for a city using this app",
            "image": "assets/images/hw6.png",
            "website": "https://nicoleremy95.github.io/hw6_server_side_apis_weather/5"
        },
        {
            "name": "calendar",
            "info": "Schedule important events in your day to day.",
            "image": "assets/images/hw5.png",
            "website": "https://nicoleremy95.github.io/hw5_calendar_schedule_NEW//"
        },
        {
            "name": "coding assesment",
            "info": "Test your coding knowledge with this assesment.",
            "image": "assets/images/hw4.png",
            "website": "https://nicoleremy95.github.io/hw4_coding_assesment/"
        },
        {
            "name": "password generator",
            "info": "Need a new password? Use this application do generate a random password.",
            "image": "assets/images/hw3.png",
            "website": "https://nicoleremy95.github.io/hw3_passwordgenerator/"
        },
        {
            "name": "refractor code",
            "info": "check out my refractored code here",
            "image": "assets/images/hw1.png",
            "website": "https://github.com/nicoleremy95/hw1_coderefractor"
        }
    ];
    console.log(portfolioContent)

    portfolioContent.forEach(function(item){
        var cardContent = $("<div class= 'card-content'>")
        var cardTitle = $("<div class = 'card-title'>")
        var cardAction = $("<a class = 'card-action'>")
        var cardStacked = $("<div class = 'card-stacked'>")
        var cardImage = $("<div class = 'card-image'>")
        var cardHorizontal = $("<div class = 'card horizontal portfolio-cards col s12 l4'>")

        objName = item.name
        console.log(item.name)
        
        objInfo = item.info
        console.log(item.info)
        
        objImage = item.image
        console.log(item.image)
        var image =$("<img>").attr("src", objImage)
        
        objWebsite = item.website
        console.log(item.website)
        
        cardTitle.append(objName)
        cardAction.append(objWebsite)
        cardContent.append(cardTitle, objInfo)
        cardStacked.append(cardContent, cardAction)
        cardImage.append(image)
        

        cardHorizontal.append(cardImage, cardStacked)
        portfolioSection.append(cardHorizontal)
    })
    
    portfolioDiv.append(portfolioHeader, portfolioSection)
    content.html(portfolioDiv)
}

function contactMe(){
  var contactMeSection = $("<form class = 'col s12'>")
  var contactMeHeader = $("<h1>")
    contactMeHeader.text("contact me")
  
  var row1 = $("<div class = 'row'>")
  var row2 = $("<div class = 'row'>")
  var row3 = $("<div class = 'row'>")
  var row4 = $("<div class = 'row'>")

  var firstName = $("<div class = 'input-field col s6'>")
  var lastName = $("<div class = 'input-field col s6'>")
  var email = $("<div class = 'input-field col s12'>")
  var message = $("<div class = 'input-field col 12'>")
  var button =$("<button class =' btn waves-effect waves light submit' type = 'submit' name = 'action' id = 'submit'>")

  var firstNameInput = $("<input placeholder='jane' type = 'text' class = 'validate' id = 'first_name'>")
  var firstNameLabel = $("<label for='first_name'>")
  firstNameLabel.text("first name")

  var lastNameInput = $("<input placeholder='smith' type = 'text' class = 'validate' id = 'last_name'>")
  var lastNameLabel = $("<label for='last_name'>")
  lastNameLabel.text("last name")

  var emailInput = $("<input placeholder='jane@doe.com' type = 'email' class = 'validate' id = 'email'>")
  var emailLabel = $("<label for='email'>")
  emailLabel.text("email")

  var messageInput = $("<input placeholder='hi there!' type = 'text' class = 'validate' id = 'message'>")
  var messageLabel = $("<label for='message'>")
  messageLabel.text("message")

  button.text("submit")

  firstName.append(firstNameInput, firstNameLabel)
  lastName.append(lastNameInput, lastNameLabel )
  email.append(emailInput, emailLabel)
  message.append(messageInput, messageLabel)

  row1.append(firstName, lastName)
  row2.append(email)
  row3.append(message)
  row4.append(button)

  contactMeSection.append(contactMeHeader, row1, row2, row3, row4)
  content.html(contactMeSection)  
}

function submit(){
    var textSubmit = $("<h2>")
    textSubmit.text("thanks for submitting!")

    content.append(textSubmit)
}

$(".home").click(function(event){
    event.preventDefault();
    home();
    console.log("you clicked home")
})

$(".about-me").click(function(event){
    event.preventDefault();
    aboutMe();
    console.log("you clicked about me")
})

$(".portfolio").click(function(event){
    event.preventDefault();
    portfolio();
    console.log("you clicked portfolio")
})

$(".contact-me").click(function(event){
    event.preventDefault();
    contactMe();
    console.log("you clicked contact me")
})

$("#submit").click(function(event){
    event.preventDefault();
    submit();
    console.log("thanks!")
})
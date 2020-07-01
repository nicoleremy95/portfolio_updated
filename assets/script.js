var content = $(".content")


function aboutMe(){
    var aboutMeSection = $("<div>")
    
    var aboutMeHeader = $("<h1>")
    aboutMeHeader.text("about me")

    var aboutMeContent = $("<h2>")
    aboutMeContent.text("Welcome to the website that tells you all about me. My name is Nicole, I am a Washingtonian, and I love music. I graduated from the University of Southern California in 2018 with a degree in GeoDesign. From there, I worked as an Architecture Associate for two years while dancing professionally in the NFL. Currently, I am studying to become a web developer. During my free time, you can find me enjoying long walks, reading, or drinking coffee while watching the sunrise. I am also an avid Netflix binger; my most recent of which is 'Riverdale'.")
    console.log(aboutMeContent)
    
    aboutMeSection.append(aboutMeHeader, aboutMeContent)
    content.html(aboutMeSection)
    console.log(content)
    
}
function portfolio(){
    var portfolioSection = $("<div>")

    var portfolioHeader = $("<h1>")
    portfolioHeader.text("portfolio")
   
    var portfolioContent = [
        {
            "name": "drinkME",
            "info": "In the mood for a cocktail or a beer? try this application for recipies and breweries near you.",
            "image": "assets/images/rsz_1screen_shot_2020-06-09_at_25837_pm.png",
            "website": "https://derek-watson14.github.io/drinkME/"
        },
        {
            "name": "weather dashboard",
            "info": "Look up current weather for a city using this app",
            "image": "assets/images/rsz_1screen_shot_2020-06-09_at_25837_pm.png",
            "website": "https://nicoleremy95.github.io/hw6_server_side_apis_weather/5"
        },
        {
            "name": "calendar",
            "info": "Schedule important events in your day to day.",
            "image": "assets/images/rsz_1screen_shot_2020-06-09_at_25837_pm.png",
            "website": "https://nicoleremy95.github.io/hw5_calendar_schedule_NEW//"
        },
        {
            "name": "coding assesment",
            "info": "Test your coding knowledge with this assesment.",
            "image": "assets/images/rsz_1screen_shot_2020-06-09_at_25837_pm.png",
            "website": "https://nicoleremy95.github.io/hw4_coding_assesment/"
        },
        {
            "name": "password generator",
            "info": "Need a new password? Use this application do generate a random password.",
            "image": "assets/images/rsz_1screen_shot_2020-06-09_at_25837_pm.png",
            "website": "https://nicoleremy95.github.io/hw3_passwordgenerator/"
        },
        {
            "name": "refractor code",
            "info": "check out my refractored code here",
            "image": "assets/images/rsz_1screen_shot_2020-06-09_at_25837_pm.png",
            "website": "https://github.com/nicoleremy95/hw1_coderefractor"
        }
    ];
    console.log(portfolioContent)

    portfolioContent.forEach(function(item){
        var cardContent = $("<div class= 'card-content'>")
        var cardAction = $("<div class = 'card-action'>")
        var cardStacked = $("<div class = 'card-stacked'>")
        var cardImage = $("<div class = 'card-image'>")
        var cardHorizontal = $("<div class = 'card horizontal portfolio-cards col s12 l4'>")

        objName = item.name
        console.log(item.name)
        objInfo = item.info
        console.log(item.info)
        objImage = item.image
        console.log(item.image)
        objWebsite = item.website
        console.log(item.website)

        cardAction.append(objWebsite)
        cardContent.append(objName, objInfo)
        cardStacked.append(cardContent, cardAction)
        cardImage.append(objImage)

        cardHorizontal.append(cardImage, cardStacked)
        portfolioSection.append(cardHorizontal)
    })
    
    content.append(portfolioHeader, portfolioSection)
}
function contactMe(){
  
    
}


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
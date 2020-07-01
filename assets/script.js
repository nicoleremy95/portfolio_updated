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
            "name": "hw1",
            "info": "info",
            "image": "assets/images/rsz_1screen_shot_2020-06-09_at_25837_pm.png",
            "website": "https://github.com/nicoleremy95"
        },
        {
            "name": "hw2",
            "info": "info",
            "image": "assets/images/rsz_1screen_shot_2020-06-09_at_25837_pm.png",
            "website": "https://github.com/nicoleremy95"
        }
        

    ];
    console.log(portfolioContent)

    portfolioContent.forEach(function(item){
        // var cardContent = $("<div class= 'card-content'>")
        // var cardAction = $("<div class = 'card-action'>")
        // var cardStacked = $("<div class = 'card-stacked'>")
        // var cardImage = $("<div class = 'card-image'>")
        // var cardHorizontal = $("<div class = 'card horizontal'>")

        objName = item.name
        console.log(item.name)
        objInfo = item.info
        console.log(item.info)
        objImage = item.image
        console.log(item.image)
        objWebsite = item.website
        console.log(item.website)

        // cardAction.append(objName)
        // cardContent.append(objInfo)
        // cardStacked.append(cardContent, cardAction)
        // cardImage.append(objImage)

        // cardHorizontal.append(cardImage, cardStacked)
        // portfolioSection.append(cardHorizontal)
    })
    // content.append(portfolioHeader, portfolioSection)
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
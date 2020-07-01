var content = $(".content")


function aboutMe(){
    var aboutMeSection = $("<div>")
    
    var aboutMeHeader = $("<h1>")
    aboutMeHeader.text("about me")
    console.log(aboutMeHeader)

    var aboutMeContent = $("<h2>")
    aboutMeContent.text("Welcome to the website that tells you all about me. My name is Nicole, I am a Washingtonian, and I love music. I graduated from the University of Southern California in 2018 with a degree in GeoDesign. From there, I worked as an Architecture Associate for two years while dancing professionally in the NFL. Currently, I am studying to become a web developer. During my free time, you can find me enjoying long walks, reading, or drinking coffee while watching the sunrise. I am also an avid Netflix binger; my most recent of which is 'Riverdale'.")
    console.log(aboutMeContent)
    
    aboutMeSection.append(aboutMeHeader, aboutMeContent)
    content.html(aboutMeSection)
    console.log(content)
    
}
function portfolio(){
   
    
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
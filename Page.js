var cur = "name";
var open= [];
function shownav(){
    var texts = document.getElementsByClassName("nav-text");
    for(i=0; i < texts.length; i++){
        texts[i].style.display = "inline-block";
    }
}
function hidenav(){
    var texts = document.getElementsByClassName("nav-text");
    for(i=0; i < texts.length; i++){
        texts[i].style.display = "none";
    }
}
function scrollto(id){
    
    var page = document.getElementById(id);
    var topPos = page.offsetTop;
    var temp = cur + "-img";
    document.getElementById(temp).src = "./images/select-circle.png";
    document.getElementById(id+"-img").src = "./images/med-circle.png";
    cur = id
    page.scrollIntoView();
}
function show(id){
    if(open.includes(id)){
        document.getElementById(id).style.display = "none";
        open.splice(open.indexOf(id), 1)
    }
    else{
        open.push(id)
        document.getElementById(id).style.display = "block";
    }
    
}
var aboutdownwaypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        if(direction == 'down'){
            var temp = cur + "-img";
            document.getElementById(temp).src = "./images/select-circle.png";
            document.getElementById("about-img").src = "./images/med-circle.png";
            cur = "about"
        }

    },
    offset: 250
})
var homewayuppoint = new Waypoint({
    element: document.getElementById('name'),
    handler: function(direction) {
        if(direction == 'up'){
            var temp = cur + "-img";
            document.getElementById(temp).src = "./images/select-circle.png";
            document.getElementById("name-img").src = "./images/med-circle.png";
            cur = "name"
        }

    },
    offset: -500
})

var aboutupwaypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        if(direction == 'up'){
            var temp = cur + "-img";
            document.getElementById(temp).src = "./images/select-circle.png";
            document.getElementById("about-img").src = "./images/med-circle.png";
            cur = "about"
        }

    },
    offset: -250
})

var projectsdownwaypoint = new Waypoint({
    element: document.getElementById('projects'),
    handler: function(direction) {
        if(direction == 'down'){
            var temp = cur + "-img";
            document.getElementById(temp).src = "./images/select-circle.png";
            document.getElementById("projects-img").src = "./images/med-circle.png";
            cur = "projects"
        }

    },
    offset: 250
})

var projectsupwaypoint = new Waypoint({
    element: document.getElementById('projects'),
    handler: function(direction) {
        if(direction == 'up'){
            var temp = cur + "-img";
            document.getElementById(temp).src = "./images/select-circle.png";
            document.getElementById("projects-img").src = "./images/med-circle.png";
            cur = "projects"
        }

    },
    offset: -500
})

var experiencedownwaypoint = new Waypoint({
    element: document.getElementById('experience'),
    handler: function(direction) {
        if(direction == 'down'){
            var temp = cur + "-img";
            document.getElementById(temp).src = "./images/select-circle.png";
            document.getElementById("experience-img").src = "./images/med-circle.png";
            cur = "experience"
        }

    },
    offset: 250
})
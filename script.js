
let personA = document.querySelector("#first")
let personB = document.querySelector("#second")
let personC = document.querySelector("#third")
let personD = document.querySelector("#fourth")


let content = document.querySelector("#content")

let info = {
    0: {
        firstName: "Francisco",
        lastName: "Bermúdez",
        heightFeet: "6",
        heighInches: "3",
        favoriteFood: "pupusas",
        favoriteColor: "pink",
        
        
        
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName + ". " + "I am" + this.heightFeet + "'" + this.heighInches + " and my favaorite food is" + this.favoriteFood + ". My favorite color is") + this.favoriteColor;
       
        }
    },
   
    1: {
        firstName: "Emmanuel",
        lastName: "Appiah",
        heightFeet: "5",
        heighInches: "6",
        favoriteFood: "Fried yam",
        favoriteColor: "Blue",
        
        
        
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName + ". " + "I am" + this.heightFeet + "'" + this.heighInches + " and my favaorite food is" + this.favoriteFood + ". My favorite color is") + this.favoriteColor;
       
        }
    },
    2: {
    firstName: "Kate",
    lastName: "Appiah",
    heightFeet: "5",
    heighInches: "5",
    favoriteFood: "jollof",
    favoriteColor: "sky blue",
    
    
    
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName + ". " + "I am" + this.heightFeet + "'" + this.heighInches + " and my favaorite food is" + this.favoriteFood + ". My favorite color is") + this.favoriteColor;
        }    
    },
    3: {
       
        firstName: "Prince",
        lastName: "Appiah",
        heightFeet: "4",
        heighInches: "6",
        favoriteFood: "Rice",
        favoriteColor: " blue",
        
        
        
            sayFullName: function() {
                alert("This is " + this.firstName + " " + this.lastName + ". " + "I am" + this.heightFeet + "'" + this.heighInches + " and my favaorite food is" + this.favoriteFood + ". My favorite color is") + this.favoriteColor;  }
    
    
    
    },
}


personA.onclick = function(event) {
    content.innerHTML = "";
    event.preventDefault();
    let div = document.createElement("div") ;

    let p1 = document.createElement ("p");
    let p2 = document.createElement ("p");
    let p3 = document.createElement ("p");


    
    p1.innerHTML = "Hi my name is " + info[0].firstName + " " + info[0].lastName + ".";
    p2.innerHTML = "I am " + info[0].heightFeet + " feet and " + info[0].heighInches + " inches tall. ";
    p3.innerHTML = "My favorite food is " + info[0].favoriteFood + " and my favorite colour is " + info[0].favoriteColor + ".";


    div.style.border = "solid 5px black";
    div.style.fontSize = "50px"
    div.style.color = "white"
    
    div.appendChild (p1); 
    div.appendChild (p2); 
    div.appendChild (p3); 
    content.appendChild (div);



}

personB.onclick = function(event) {
    event.preventDefault();
    content.innerHTML = "";
    let div = document.createElement("div") ;

    let p1 = document.createElement ("p");
    let p2 = document.createElement ("p");
    let p3 = document.createElement ("p");


    
    p1.innerHTML = "Hi my name is " + info[1].firstName + " " + info[1].lastName + ".";
    p2.innerHTML = "I am " + info[1].heightFeet + " feet and " + info[1].heighInches + " inches tall. ";
    p3.innerHTML = "My favorite food is " + info[1].favoriteFood + " and my favorite colour is " + info[1].favoriteColor + ".";


    div.style.border = "solid 5px black";
    div.style.fontSize = "50px"
    div.style.color = "white"
    div.appendChild (p1); 
    div.appendChild (p2); 
    div.appendChild (p3); 
    content.appendChild (div);



}


personC.onclick = function(event) {
    event.preventDefault();
    content.innerHTML = "";
    let div = document.createElement("div") ;

    let p1 = document.createElement ("p");
    let p2 = document.createElement ("p");
    let p3 = document.createElement ("p");


    
    p1.innerHTML = "Hi my name is " + info[2].firstName + " " + info[2].lastName + ".";
    p2.innerHTML = "I am " + info[2].heightFeet + " feet and " + info[2].heighInches + " inches tall. ";
    p3.innerHTML = "My favorite food is " + info[2].favoriteFood + " and my favorite colour is " + info[2].favoriteColor + ".";


    div.style.border = "solid 5px black";
    div.style.fontSize = "50px"
    div.style.color = "white"
    div.appendChild (p1); 
    div.appendChild (p2); 
    div.appendChild (p3); 
    content.appendChild (div);



}

personD.onclick = function(event) {
    content.innerHTML = "";
    event.preventDefault();
    let div = document.createElement("div") ;

    let p1 = document.createElement ("p");
    let p2 = document.createElement ("p");
    let p3 = document.createElement ("p");


    
    p1.innerHTML = "Hi my name is " + info[3].firstName + " " + info[3].lastName + ".";
    p2.innerHTML = "I am " + info[3].heightFeet + " feet and " + info[3].heighInches + " inches tall. ";
    p3.innerHTML = "My favorite food is " + info[3].favoriteFood + " and my favorite colour is " + info[3].favoriteColor + ".";


    div.style.border = "solid 5px black";
    div.style.fontSize = "50px"
    div.style.color = "white"
    
    div.appendChild (p1); 
    div.appendChild (p2); 
    div.appendChild (p3); 
    content.appendChild (div);



}
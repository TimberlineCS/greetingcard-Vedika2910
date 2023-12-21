//Vedika Gowdru 
//7
//12/11/2023

/*Provide a description about what this program does here*/

/*Write code to create and manipulate the elements on the index.html page.  
The elements must come to gether to resemble an image.  Your Greeting Card
must also include text, an image, and music. */
/*
var moon = document.createElement("img");
moon.src = "./Images/moon2.gif";
moon.setAttribute("width","200px");
document.body.append(moon);
moon.style.position="absolute";
moon.style.top = "40px";
moon.style.left = "40px";
*/

document.body.style.backgroundColor = "#020e27";

 var tree = document.createElement("img");
tree.src = "./Images/sparklyChristmastree.gif";
tree.setAttribute("width","400px");
document.body.append(tree);
tree.style.position= "absolute";
tree.style.bottom = "40px";
tree.style.right = "550px";

var Txt = document.createElement("h1");
Txt.innerHTML = "Merry Christmas and Happy Holidays!";
//Txt.style.font= "Brush Script";
Txt.style.color = "Red";
Txt.style.position= "absolute"; 
Txt.style.fontSize="xx-large!";
Txt.style.position= "absolute";
Txt.style.background="#ABEBC6";
Txt.style.top= "100px"; 
Txt.style.left="450px"; 
Txt.style.fontColor="white";
document.body.append(Txt);


var snow = document.createElement("img");
snow.src = "./Images/Snow.gif";
snow.setAttribute ("width","1520px");
snow.setAttribute ("height","700px");
document.body.append(snow);
//snow.src = ("C:\Users\veere_zbrot1g\csp\greetingcard-Vedika2910\Images\FallingSnowTransparent.gif");
//snow.backgroundColor;
//document.body.style.background.snow;

var Cbody = document.createElement("div");
Cbody.style.width = "150px";
Cbody.style.height = "150px";
Cbody.style.border = "white solid 5px";
Cbody.style.backgroundColor = "#FDFEFE"
Cbody.style.borderRadius = "50%"
Cbody.style.position= "absolute"; 
Cbody.style.top= "500px"; 
Cbody.style.left="400px"; 
document.body.append(Cbody);


var Cbody2 = document.createElement("div");
Cbody2.style.width = "100px";
Cbody2.style.height = "100px";
Cbody2.style.border = "white solid 5px";
Cbody2.style.backgroundColor = "#FDFEFE"
Cbody2.style.borderRadius = "50%"
Cbody2.style.position= "absolute"; 
Cbody2.style.top= "410px"; 
Cbody2.style.left="422px"; 
document.body.append(Cbody2);

var Chead = document.createElement("div");
Chead.style.width = "75px";
Chead.style.height = "75px";
Chead.style.border = "white solid 5px";
Chead.style.backgroundColor = "#FDFEFE"
Chead.style.borderRadius = "50%"
Chead.style.position= "absolute"; 
Chead.style.top= "335px"; 
Chead.style.left="432px"; 
document.body.append(Chead);
/*
var rbody = document.createElement("div");
rbody.style.width = "150px";
rbody.style.height = "150px";
rbody.style.border = "white solid 5px";
rbody.style.backgroundColor = "#FDFEFE"
rbody.style.borderRadius = "50%"
rbody.style.position= "absolute"; 
rbody.style.top= "500px"; 
rbody.style.left="1000px"; 
document.body.append(rbody);


var rbody2 = document.createElement("div");
rbody2.style.width = "100px";
rbody2.style.height = "100px";
rbody2.style.border = "white solid 5px";
rbody2.style.backgroundColor = "#FDFEFE"
rbody2.style.borderRadius = "50%"
rbody2.style.position= "absolute"; 
rbody2.style.top= "410px"; 
rbody2.style.left="1022px"; 
document.body.append(rbody2);

var rhead = document.createElement("div");
rhead.style.width = "75px";
rhead.style.height = "75px";
rhead.style.border = "white solid 5px";
rhead.style.backgroundColor = "#FDFEFE"
rhead.style.borderRadius = "50%"
rhead.style.position= "absolute"; 
rhead.style.top= "335px"; 
rhead.style.left="1032px"; 
document.body.append(rhead);

var Reye = document.createElement("div");
Reye.style.width = "10px";
Reye.style.height = "10px";
Reye.style.backgroundColor = "#A569BD";
Reye.style.borderRadius = "50%"
Reye.style.position= "absolute"; 
Reye.style.top= "360px"; 
Reye.style.left="1053px"; 
document.body.append(Reye);

var Leye = document.createElement("div");
Leye.style.width = "10px";
Leye.style.height = "10px";
Leye.style.backgroundColor = "#A569BD";
Leye.style.borderRadius = "50%"
Leye.style.position= "absolute"; 
Leye.style.top= "360px"; 
Leye.style.left="1085px"; 
document.body.append(Leye);
*/
var Reye2 = document.createElement("div");
Reye2.style.width = "10px";
Reye2.style.height = "10px";
Reye2.style.backgroundColor = "#A569BD";
Reye2.style.borderRadius = "50%"
Reye2.style.position= "absolute"; 
Reye2.style.top= "360px"; 
Reye2.style.left="485px"; 
document.body.append(Reye2);

var Leye2 = document.createElement("div");
Leye2.style.width = "10px";
Leye2.style.height = "10px";
Leye2.style.backgroundColor = "#A569BD";
Leye2.style.borderRadius = "50%"
Leye2.style.position= "absolute"; 
Leye2.style.top= "360px"; 
Leye2.style.left="455px"; 
document.body.append(Leye2);
/*
var triangle = document.createElement("div"); 
triangle.style.border = "red solid 50px"; 
triangle.style.width = "5px"; 
triangle.style.height = "10px";
 triangle.style.borderLeftColor = "transparent"; 
 triangle.style.borderRightColor = "transparent"; 
 triangle.style.borderTopColor = "transparent"; 
 triangle.style.borderBottomWidth = "200px"
  triangle.style.position= "absolute";
triangle.style.top= "100px"; 
  triangle.style.left="190px";
  document.body.append(triangle);  
*/


var nose1 = document.createElement("div");
nose1.style.border = "red solid 5px";
//nose1.style.width = "2px";
//nose1.style.height = "15px";
nose1.style.transform="rotate(110deg)";
nose1.style.borderLeftColor = "transparent";
nose1.style.borderRightColor = "transparent";
nose1.style.borderTopColor = "transparent";
nose1.style.borderBottomWidth ="30px";
nose1.style.position= "absolute"; 
nose1.style.top= "375px"; 
nose1.style.left="485px"; 
document.body.append(nose1);


/*
var hat = docuemnt.createElement("div");
hat.style.border="transparent 25px solid";
hat.style.width="5px";
hat.style.height = "10px";
hat.style.borderBottom = "red 200px solid";
hat.style.position= "absolute"; 
hat.style.top= "100px"; 
hat.style.left="190px"; 
document.body.append(hat);


*/
var dino = document.createElement("img");
dino.src = "./Images/output-onlinegiftools.gif";
dino.setAttribute("width","400px");
dino.style.position= "absolute";
dino.style.bottom = "20px";
dino.style.right = "250px";
document.body.append(dino);

var gift = document.createElement("img");
gift.src = "./Images/MoreImg/AGift-removebg-preview.png";
gift.setAttribute("width","250px");
gift.style.position= "absolute";
gift.style.bottom = "0px";
gift.style.right = "500px";
document.body.append(gift);

var gift2 = document.createElement("img");
gift2.src = "./Images/MoreImg/AGift-removebg-preview.png";
gift2.setAttribute("width","250px");
gift2.style.position= "absolute";
gift2.style.bottom = "0px";
gift2.style.right = "750px";
document.body.append(gift2);

var button1 = document.createElement("div");
button1.style.width = "3px";
button1.style.height = "3px";
button1.style.border = "transparent solid 5px";
button1.style.backgroundColor = "#A3E4D7"
button1.style.borderRadius = "30%"
button1.style.position= "absolute"; 
button1.style.top= "440px"; 
button1.style.left="470px"; 
document.body.append(button1)

var button2 = document.createElement("div");
button2.style.width = "3px";
button2.style.height = "3px";
button2.style.border = "transparent solid 5px";
button2.style.backgroundColor = "#A3E4D7"
button2.style.borderRadius = "30%"
button2.style.position= "absolute"; 
button2.style.top= "480px"; 
button2.style.left="470px"; 
document.body.append(button2)

var button3 = document.createElement("div");
button3.style.width = "3px";
button3.style.height = "3px";
button3.style.border = "transparent solid 5px";
button3.style.backgroundColor = "#EC7063";
button3.style.borderRadius = "30%"
button3.style.position= "absolute"; 
button3.style.top= "520px"; 
button3.style.left="470px"; 
document.body.append(button3)

var button4 = document.createElement("div");
button4.style.width = "3px";
button4.style.height = "3px";
button4.style.border = "transparent solid 5px";
button4.style.backgroundColor = "#EC7063";
button4.style.borderRadius = "30%"
button4.style.position= "absolute"; 
button4.style.top= "560px"; 
button4.style.left="470px"; 
document.body.append(button4)

var button5 = document.createElement("div");
button5.style.width = "3px";
button5.style.height = "3px";
button5.style.border = "transparent solid 5px";
button5.style.backgroundColor = "#EC7063";
button5.style.borderRadius = "30%"
button5.style.position= "absolute"; 
button5.style.top= "600px"; 
button5.style.left="470px"; 
document.body.append(button5)

var hand = document.createElement("div");
hand.style.width = ".25px";
hand.style.height = "100px";
hand.style.transform="rotate(80deg)";
hand.style.border = "transparent solid 5px";
hand.style.backgroundColor = "#BA4A00";
hand.style.position= "absolute"; 
hand.style.top= "400px"; 
hand.style.left="570px"; 
document.body.append(hand)

var hand2 = document.createElement("div");
hand2.style.width = ".25px";
hand2.style.height = "100px";
hand2.style.transform="rotate(280deg)";
hand2.style.border = "transparent solid 5px";
hand2.style.backgroundColor = "#BA4A00";
hand2.style.position= "absolute"; 
hand2.style.top= "400px"; 
hand2.style.left="370px"; 
document.body.append(hand2)

var scarf = document.createElement("div");
scarf.style.width = ".5px";
scarf.style.height = "45px";
scarf.style.transform="rotate(90deg)";
scarf.style.border = "transparent solid 5px";
scarf.style.backgroundColor = "#FF7F50";
scarf.style.borderRadius = "30%"
scarf.style.position= "absolute"; 
scarf.style.top= "390px"; 
scarf.style.left="470px"; 
document.body.append(scarf)


var hat = document.createElement("div");
hat.style.border = "red solid 20px";
//nose1.style.transform="rotate(110deg)";
hat.style.borderLeftColor = "transparent";
hat.style.borderRightColor = "transparent";
hat.style.borderTopColor = "transparent";
hat.style.borderBottomWidth ="60px";
hat.style.position= "absolute"; 
hat.style.top= "260px"; 
hat.style.left="455px"; 
document.body.append(hat);


var cracker = document.createElement("img");
cracker.src = "./Images/MoreImg/fireworks.png";
cracker.setAttribute("width","400px");
cracker.style.position= "absolute";
cracker.style.top = "30px";
cracker.style.right = "120px";
document.body.append(cracker);

var cracker2 = document.createElement("img");
cracker2.src = "./Images/MoreImg/fireworks.png";
cracker2.setAttribute("width","400px");
cracker2.style.transform="rotate(180deg)";
cracker2.style.position= "absolute";
cracker2.style.top = "20px";
cracker2.style.left= "20px";
document.body.append(cracker2);


var santa = document.createElement("img");
santa.src = "./Images/santa.gif";
santa.setAttribute("width","300px");
santa.style.position= "absolute";
santa.style.bottom = "30px";
santa.style.left = "40px";
document.body.append(santa); 

var music = new Audio("./Music/AllIWantForChristmas.mp3");
music.controls = true;
document.body.appendChild(music);

/*
var Btn = document.createElement("BUTTON");
var Click = document.createTextNode("Click me");
Btn.setAttribute("width","250px");
Btn.style.position= "absolute";
Btn.style.bottom = "30px";
Btn.style.right = "120px";
Btn.style.backgroundColor = "white";
document.body.append(Btn); 
*/
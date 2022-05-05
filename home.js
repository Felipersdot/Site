// using JQUERY - save the file to the directory and then apply it to the html page for connection 
$('.accordion').on('click', '.accordion-control', function(e){ // When clicked
  e.preventDefault();                    // Prevent default action of button
  $(this)                                // Get the element the user clicked on
    .next('.accordion-panel')            // Select following panel 
    .not(':animated')                    // If it is not currently animating
    .slideToggle();                      // Use slide toggle to show or hide it
});

$(function(){
  $('Slider_Container #cuties').hide().slideDown();
  var li = $('#cuties li');
  li.hide().each(function(index){
    $(this).delay(800 * index).fadeIn(800).delay(800).fadeOut();
  });
});

var quotes = new Array(
 "Its computer science, anything is possible","youre not doing anything that thousands of others who came before you havent already done ",
 "dont waste your time being fustrated. You made it this far because you know you can go further"," a stagnant life would be boring for us. Why not get a field thats constantly growin ... constatntly challenging you? ",
 "whats the point without a goal"," Can't is a cowards way in computer science. Everything is possible, everything you struggle with has already been done. So hold yourself higher. Doubt is pointless in the grand scheme of invitability - we are inevitable ",
 "Dont be afraid to ask for help - no one is perfect but that doesnt mean we should stop trying. Forge ahead. Conquor whats before you. ","Every lesson you learned - every trick you picked up - ",
 "It's not going to work the first time, if it did we wouldnt try as hard as we do. This was never meant to be easy.","You are more than capable of doing what thousands of others have already done before you. So don't stress it out. Like everything else in life it will bend to your whim. So step up and control is"
);
$(document).ready(function(){
  change_text();
  setInterval(Change_quote, 5000);

  appear();
})

function change_text(){
  var date = new Date(); 
  var hour = date.getHours();
  var greetings;  
  if(hour > 18){
  greetings = 'Good Evening  ';
  } 
  else if (hour > 12){
greetings = 'Good Afternoon  ';
  }
  else if (hour > 0){
greetings = "Good Morning  "; 
  }
  else {
greetings = 'Welcome :'; 
  }
  
  $('#cuties').text(greetings + date.toDateString()).animate({opacity: 0}, 2000);
}
// access the array at randome and display quotes from there 
function Change_quote(){
  $('#cuties').animate({opacity:0});
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const other_quote = quotes[randomIndex];
  $('#cuties').text(other_quote).animate({opacity: 1},2000).animate({opacity:0}, 2000);

}
  $('#skill_container div ul li').each(function(i){

    $(this).hide().delay(500*i).show(500);
  });
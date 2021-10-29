var images = ["https://www.google.com/imgres?imgurl=https%3A%2F%2Fd2gg9evh47fn9z.cloudfront.net%2F800px_COLOURBOX10522309.jpg&imgrefurl=https%3A%2F%2Fwww.colourbox.com%2Fvector%2Fmom-cartoon-with-vacuum-cleaner-vector-10522309&tbnid=KN6DgC0itYky9M&vet=12ahUKEwiJrKSXqO7zAhXIQEIHHecUDdIQMygdegUIARCJAg..i&docid=T8CGQbHLFb9s9M&w=598&h=800&q=mom%20cartoon%20images%20for%20kids&ved=2ahUKEwiJrKSXqO7zAhXIQEIHHecUDdIQMygdegUIARCJAg", "https://lh3.googleusercontent.com/proxy/viy7XjvLGbz3z_OaAyS5c5E6ihzsoMK-mMCr9Hza2QN3-BmwgA1NOmV50Q2wrGNjphTA8OhEP7IDBcZM_wpr3uKAVDDzyLKHHvpyGqA9BQ", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Fkids-cartoon%2F50%2F59-512.png&imgrefurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F3275904%2Fanimated_boy_boy_cartoon_boy_cartoon_character_cartoon_kid_icon&tbnid=_pePDdT-iWItBM&vet=12ahUKEwiJ54_EqO7zAhUPFqwKHatNA9oQMygGegUIARDKAQ..i&docid=CFGq59Ub-YyPIM&w=512&h=512&q=boy%20cartoon%20images%20for%20kids&ved=2ahUKEwiJ54_EqO7zAhUPFqwKHatNA9oQMygGegUIARDKAQ", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fus.123rf.com%2F450wm%2Fyupiramos%2Fyupiramos1905%2Fyupiramos190505227%2F122760736-little-girl-avatar-character-vector-illustration-design.jpg%3Fver%3D6&imgrefurl=https%3A%2F%2Fwww.123rf.com%2Fstock-photo%2Fsister_cartoon.html&tbnid=uUrZXmrCiP2DKM&vet=12ahUKEwi9tJb8qO7zAhUJ9qwKHXxlBncQMygAegUIARDHAQ..i&docid=FF6tPfSye803HM&w=450&h=450&q=sister%20cartoon%20images%20for%20kids&ved=2ahUKEwi9tJb8qO7zAhUJ9qwKHXxlBncQMygAegUIARDHAQ"];
var names = ["Mom", "Dad", "Me", "Us"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }


$(document).ready(function(){
  let myName = $("#myName")
  $("#myBtn").click(function(){
    if(myName.text() == "健哥哥"){
      $("#myName").text("川哥哥")
    } else {
      $("#myName").text("健哥哥")
    }
  });
});
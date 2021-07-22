// EASY
$(".e").click(function(){
  $(".main").css("display","none");
  $(".easy").css("display","block");
  var gamePattern = [];
  var buttonColours = ["red","royalblue","green","yellow"];
  var userClickedPattern = [];
  var started = false;
  var level = 0;

  $(document).keypress(function(){
    if(started === false)
    {
        $(".gif").css("display","none");
        $("#level-titlee").css("fontSize","6rem");
        $("#level-titlee").css("margin","3%");
        $("#level-titlee").text("LEVEL "+level);
        nextSequence();
        started = true;
        $(".container").css("display","block");
    }

  });

  $(".btn").click(function()
  {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    //playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1,userChosenColour);
  });

  function nextSequence()
  {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4) ;
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    var randomId = "."+randomChosenColour;
    $(randomId).fadeOut(200).fadeIn(200);
    playSound(randomChosenColour);
    level++;
    $("#level-titlee").text("LEVEL "+level);

  }



  function animatePress(currentColour)
  {
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
      $("."+currentColour).removeClass("pressed");
    },100);
  }

  function checkAnswer(currentLevel , sound)
  {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
    {
      console.log("success");
      playSound(sound);
      if(userClickedPattern.length === gamePattern.length)
      {
        setTimeout(function(){
          nextSequence();
        },1000);
      }
    }
    else
    {
      console.log("wrong");
      $("body").addClass("game-over");
      setTimeout(function(){
        $("body").removeClass("game-over");
      },200);
      audio = new Audio("sounds/wrong.mp3");
      audio.play();
      $("#level-titlee").text("GAME OVER, PRESS ANY KEY TO RESTART");
      $("#bdif").css("display","block");
      $(".container").css("display","none");
      $(".gif").css("display","block");
      gif = new Audio("giphys.mp3");
      gif.play();
      startOver();
    }
  }
  $("#bdif").click(function(){
    location.reload();
  });
  function playSound( name)
  {
    var audio = new Audio ("sounds/" + name + ".mp3");
    audio.play();
  }

  function startOver()
  {

      gamePattern = [];
      started = false;
      level = 0;
  }
});




// MEDIUM
  $(".m").click(function(){
  $(".main").css("display","none");
  $(".medium").css("display","block");
  var gamePattern = [];
  var buttonColours = ["red","royalblue","green","yellow","teal","silver","purple","orange"];
  var userClickedPattern = [];
  var started = false;
  var level = 0;

  $(document).keypress(function(){
    if(started === false)
    {
        $(".gif").css("display","none");
        $("#level-titlem").css("fontSize","5rem");
        $("#level-titlem").css("margin","3%");
        $("#level-titlem").text("LEVEL "+level);
        nextSequence();
        started = true;
        $(".container").css("display","block");
    }

  });

  $(".btnm").click(function()
  {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    //playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1,userChosenColour);
  });

  function nextSequence()
  {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 8) ;
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    var randomId = "."+randomChosenColour;
    $(randomId).fadeOut(200).fadeIn(200);
    playSound(randomChosenColour);
    level++;
    $("#level-titlem").text("LEVEL "+level);

  }



  function animatePress(currentColour)
  {
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
      $("."+currentColour).removeClass("pressed");
    },100);
  }

  function checkAnswer(currentLevel , sound)
  {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
    {
      console.log("success");
      playSound(sound);
      if(userClickedPattern.length === gamePattern.length)
      {
        setTimeout(function(){
          nextSequence();
        },1000);
      }
    }
    else
    {
      console.log("wrong");
      $("body").addClass("game-over");
      setTimeout(function(){
        $("body").removeClass("game-over");
      },200);
      audio = new Audio("sounds/wrong.mp3");
      audio.play();
      $("#level-titlem").text("GAME OVER, PRESS ANY KEY TO RESTART");
      $("#bdifm").css("display","block");
      $(".container").css("display","none");
      $(".gif").css("display","block");
      gif = new Audio("giphys.mp3");
      gif.play();
      startOver();
    }
  }
  $("#bdifm").click(function(){
    location.reload();
  });

  function playSound( name)
  {
    var audio = new Audio ("sounds/" + name + ".mp3");
    audio.play();
  }

  function startOver()
  {

      gamePattern = [];
      started = false;
      level = 0;

  }
});



// DIFFICULT
$(".d").click(function(){
$(".main").css("display","none");
$(".difficult").css("display","block");
var gamePattern = [];
var buttonColours = ["red","royalblue","green","yellow","teal","silver","purple","orange","indigo","hotpink","wheat","aquamarine"];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function(){
  if(started === false)
  {

      $(".gif").css("display","none");
      $("#level-titled").css("fontSize","5rem");
      $("#level-titled").css("margin","3%");
      $("#level-titled").text("LEVEL "+level);
      nextSequence();
      started = true;
      $(".container").css("display","block");
  }

});

$(".btnd").click(function()
{
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  //playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1,userChosenColour);
});

function nextSequence()
{
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 12) ;
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  var randomId = "."+randomChosenColour;
  $(randomId).fadeOut(200).fadeIn(200);
  playSound(randomChosenColour);
  level++;
  $("#level-titled").text("LEVEL "+level);

}



function animatePress(currentColour)
{
  $("."+currentColour).addClass("pressed");
  setTimeout(function(){
    $("."+currentColour).removeClass("pressed");
  },100);
}

function checkAnswer(currentLevel , sound)
{
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
  {
    console.log("success");
    playSound(sound);
    if(userClickedPattern.length === gamePattern.length)
    {
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }
  else
  {
    console.log("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("#level-titled").text("GAME OVER, PRESS ANY KEY TO RESTART");
    $("#bdifd").css("display","block");
    $("#bdif").css("display","block");
    $(".container").css("display","none");
    $(".gif").css("display","block");
    gif = new Audio("giphys.mp3");
    gif.play();
    startOver();
  }
}
$("#bdifd").click(function(){
  location.reload();
});
function playSound( name)
{
  var audio = new Audio ("sounds/" + name + ".mp3");
  audio.play();
}

function startOver()
{

    gamePattern = [];
    started = false;
    level = 0;

}
});

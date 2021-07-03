var audio = "";


$(".card").click(function() {
  var clickedId = $(this).attr("id");
  console.log(clickedId);
  playSound(clickedId);
});





function playSound(name) {

  switch (name) {
    case "bread":
      audio = new Audio("Food_Sounds/bread.mp3");
      audio.play();
      break;
    case "burger":
      audio = new Audio("Food_Sounds/burger.mp3");
      audio.play();
      break;
    case "butter":
      audio = new Audio("Food_Sounds/butter.mp3");
      audio.play();
      break;
    case "cake":
      audio = new Audio("Food_Sounds/cake.mp3");
      audio.play();
      break;
    case "cereal":
      audio = new Audio("Food_Sounds/cereal.mp3");
      audio.play();
      break;
    case "cheese":
      audio = new Audio("Food_Sounds/cheese.mp3");
      audio.play();
      break;
    case "chicken":
      audio = new Audio("Food_Sounds/chicken.mp3");
      audio.play();
      break;
    case "chips":
      audio = new Audio("Food_Sounds/chips.mp3");
      audio.play();
      break;
    case "chocolate":
      audio = new Audio("Food_Sounds/chocolate.mp3");
      audio.play();
      break;
    case "coffee":
      audio = new Audio("Food_Sounds/coffee.mp3");
      audio.play();
      break;
    case "cookies":
      audio = new Audio("Food_Sounds/cookies.mp3");
      audio.play();
      break;
    case "donut":
      audio = new Audio("Food_Sounds/donut.mp3");
      audio.play();
      break;
    case "eggs":
      audio = new Audio("Food_Sounds/eggs.mp3");
      audio.play();
      break;
    case "fish":
      audio = new Audio("Food_Sounds/fish.mp3");
      audio.play();
      break;
    case "honey":
      audio = new Audio("Food_Sounds/honey.mp3");
      audio.play();
      break;
    case "hotdog":
      audio = new Audio("Food_Sounds/hotdog.mp3");
      audio.play();
      break;
    case "ice_cream":
      audio = new Audio("Food_Sounds/ice_cream.mp3");
      audio.play();
      break;
    case "jam":
      audio = new Audio("Food_Sounds/jam.mp3");
      audio.play();
      break;
    case "juice":
      audio = new Audio("Food_Sounds/juice.mp3");
      audio.play();
      break;
    case "meat":
      audio = new Audio("Food_Sounds/meat.mp3");
      audio.play();
      break;
    case "milk":
      audio = new Audio("Food_Sounds/milk.mp3");
      audio.play();
      break;
    case "muffins":
      audio = new Audio("Food_Sounds/muffins.mp3");
      audio.play();
      break;
    case "pizza":
      audio = new Audio("Food_Sounds/pizza.mp3");
      audio.play();
      break;
    case "rice":
      audio = new Audio("Food_Sounds/rice.mp3");
      audio.play();
      break;

    case "salad":
      audio = new Audio("Food_Sounds/salad.mp3");
      audio.play();
      break;

    case "sandwich":
      audio = new Audio("Food_Sounds/sandwich.mp3");
      audio.play();
      break;

    case "soda":
      audio = new Audio("Food_Sounds/soda.mp3");
      audio.play();
      break;

    case "spaghetti":

      audio = new Audio("Food_Sounds/sphagetti.mp3");
      audio.play();
      break;

    case "tea":
      audio = new Audio("Food_Sounds/tea.mp3");
      audio.play();
      break;

    case "vegetables":
      audio = new Audio("Food_Sounds/vegetables.mp3");
      audio.play();
      break;

    case "water":
      audio = new Audio("Food_Sounds/water.mp3");
      audio.play();
      break;


    default:
      console.log("What is this card???");

  }

}

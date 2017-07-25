$(document).ready(function() {
  $(".small-container").hide();
  $(".total-savings").hide();
  var a = []; // ways of saving money
  var d = []; // difficulty
  var e = []; // explanation
  var s = []; // solution text
  var f = []; // can the user add info to a field, e.g. how much less coffee will they drink per month
  var savings = [];
  var counter = -1; // question counter
  var totalSavings = 0;

  // titles
  a[0] = "Drink less coffee at fancy places";
  a[1] = "Use 'Coupons at Checkout' plugin";
  a[2] = "Pack your own lunch once (or more) a month";
  a[3] = "Drink water instead of soda a few times a month";
  a[4] = "Use price comparison sites before buying expensive stuff";
  a[5] = "Buy groceries in bulk";
  a[6] = "Cut cable and use Netflix/Hulu/Amazon";
  a[7] = "Reduce your internet service fees";
  a[8] = "Reduce mobile phone bill";
  a[9] = "Reduce car insurance bill by a measly 10%";
  a[10] = "Reduce home insurance fees by a measly 10%";
  a[11] = "Reduce checking account fees";
  a[12] = "Check the expense ratio of your investments and switch to Vanguard";
  a[13] = "Refinance student loan and decrease payment by a measly 10%";
  a[14] =
    "Pay off high interest debts (e.g. credit cards) with a low-interest personal loan";
  a[15] = "Refinance your mortgage";
  a[16] = "Quit smoking, excessive drinking and gambling";

  // difficulty

  d[0] = "Piece of cake";
  d[1] = "Piece of cake";
  d[2] = "Piece of cake";
  d[3] = "Piece of cake";
  d[4] = "Piece of cake";
  d[5] = "Easy";
  d[6] = "Easy";
  d[7] = "Easy";
  d[8] = "Easy";
  d[9] = "Easy";
  d[10] = "Easy";
  d[11] = "Medium";
  d[12] = "Medium";
  d[13] = "Medium";
  d[14] = "Medium";
  d[15] = "Hard";
  d[16] = "Hard";

  // explanation

  e[0] =
    "Drinking coffee is good for you. But buying a $5 latte every day means that you'll spend $1,825 per year. Or you drink two? Then the total sum is $3,650. If you make your own coffee once a month(!), you can save $48/year.";
  e[1] =
    "All you have to do is to install the plugin, and you can enjoy he discounts during the checkout at many online stores. Savings: up to you, but it's potentially $x - $xxx per month. Say hello to the $10 Udemy courses! :)";
  e[2] = "It's easier than you think, and cooking is actually fun!";
  e[3] = "This shouldn't be too hard! Even if you're a soda addict, your body will thank you if you just say no to one or two cans a month.";
  e[4] = "'Thank you captain obvious!' But hey, I forgot this many times when I wanted to buy something expensive - I should have save at least a couple of bucks.";
  e[5] = "";
  e[6] = "";
  e[7] = "";
  e[8] = "";
  e[9] = "";
  e[10] = "";
  e[11] = "";
  e[12] = "";
  e[13] = "";
  e[14] = "";
  e[15] = "";
  e[16] = "";

  // solution

  s[0] = "Well, I can make my own coffee a few times a month, saving ";
  s[1] =
    "I'm installing this plugin right now, expecting I can save monthly a whopping ";

  // fields

  f[0] = true;
  f[1] = true;
  f[2] = true;
  f[3] = true;
  f[4] = true;
  f[5] = true;
  f[6] = true;
  f[7] = true;
  f[8] = true;
  f[9] = true;
  f[10] = true;
  f[11] = true;
  f[12] = true;
  f[13] = true;
  f[14] = true;
  f[15] = true;
  f[16] = true;

  $(".the-button").click(function() {
    $(".container").hide();
    $(".small-container").show();
    $(".total-savings").show();
    
    for (var counter = 0; counter < a.length; counter++) {
     
    $(".questions-container").append(
      "<div class='question-title  difficulty-" + d[counter].replace(/\s/g, '') + "'>" +
        (counter + 1) +
        ". " +
        a[counter] +
        "<span class='difficulty'>" +
        d[counter] +
        "</span></div><div class='question-explanation'>" +
        e[counter] +
        "</div><div class='icansave'>\"" +
        s[counter] +
        "<input class='question-input' id='input-" +
        counter +
        "'> $/month.\"</div><hr class='divider'>"
    );
      }
    
        });
/*
    $(".next-button").click(function() {
      counter += 1;
      alert(counter);

      $(".questions-container").html(
        "<div class='question-title'>" +
          (counter + 1) +
          ". " +
          a[counter] +
          "<span class='question-difficulty'>" +
          d[counter] +
          "</span></div><div class='question-explanation'>" +
          e[counter] +
          "</div><div class='icansave'>\"" +
          s[counter] +
          "<input class='question-input' id='input-" +
          counter +
          "'> dollars/month.\"</div><button class='next-button'>Next</button>"
      );

  });
  */


for (var i = 0; i < a.length; i++) {

totalSavings += $("#input-" + i).val();

}

//$(".total-savings").html(totalSavings);


  });
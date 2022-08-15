var hourlyData= document.querySelector(".isNotShown");

let chosenValuebyUser = document.querySelectorAll('input[name="reason"]');

chosenValuebyUser[0].addEventListener("click", function()
{
  document.querySelector("#showCheck").classList = "isShown";
})

chosenValuebyUser[1].addEventListener("click", function()
{
  document.querySelector("#showCheck").classList = "isNotShown";
  document.querySelector("#showCheck").classList.remove("isShown");
})

chosenValuebyUser[2].addEventListener("click", function()
{
  document.querySelector("#showCheck").classList = "isNotShown";
  document.querySelector("#showCheck").classList.remove("isShown");
})

// REGEX [^DFIOUQWZ0-9][0-9][^DFIOUQ0-9] [0-9][^DFIOUQ0-9][0-9]

var firstCharPattern = '[^DFIOUQWZ0-9]';
  var numberPattern = '[0-9]';
  var otherCharPattern = '[^DFIOUQ0-9]';
  var fourthChar = ' ';

  var totalPattern =
    firstCharPattern +
    numberPattern +
    otherCharPattern +
    fourthChar +
    numberPattern +
    otherCharPattern +
    numberPattern;

document.querySelector("#postal-id").addEventListener("click", function()
{
  var value = document.querySelector("#postal-id").value.match(totalPattern);

  console.log(value);

  if (!value)
  {
    document.querySelector("#error").style.display = 'block';
  }
  else
  {
    document.querySelector("#error").style.display = 'none';
  }

})


var btn=document.querySelector(".submit-button");

// created new instance of XMLHttpRequest Object using its constructor
var xhr = new XMLHttpRequest();

btn.onclick = function() 
{
  document.getElementById("form1").action = "https://httpbin.org/post";
  document.getElementById("form1").method="POST";

};